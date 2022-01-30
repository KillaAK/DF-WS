import React, {
	useEffect,
	useState,
	forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from './redux/blockchain/blockchainActions';
import { fetchData, broadCastSupply } from './redux/data/dataActions';
import Web3 from 'web3';

const truncate = (input, len) =>
	input.length > len ? `${input.substring(0, len)}...` : input;

function Mint() {
	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchain);
	const data = useSelector((state) => state.data);
	const [claimingNft, setClaimingNft] = useState(false);
	const [supply, setSupply] = useState(0);
	const [feedback, setFeedback] = useState(
		`Click on mint to Buy your NFT Token.`
	);
	const [mintAmount, setMintAmount] = useState(1);
	const [CONFIG, SET_CONFIG] = useState({
		CONTRACT_ADDRESS: '',
		SCAN_LINK: '',
		NETWORK: {
			NAME: '',
			SYMBOL: '',
			ID: 0,
		},
		NFT_NAME: '',
		SYMBOL: '',
		MAX_SUPPLY: 1,
		WEI_COST: 0,
		DISPLAY_COST: 0,
		GAS_LIMIT: 0,
		MARKETPLACE: '',
		MARKETPLACE_LINK: '',
		SHOW_BACKGROUND: false,
	});

	const claimNFTs = () => {
		let cost = CONFIG.WEI_COST;
		let gasLimit = CONFIG.GAS_LIMIT;

		//get current total supply using event
    let supply = data.totalSupply;
    setSupply(supply);

		// let totalCostWei = String(cost * mintAmount);
		let totalGasLimit = String(gasLimit * mintAmount);
		
		console.log('Gas limit: ', totalGasLimit);
		setFeedback(`Mint Successful`);
		setClaimingNft(true);

		//if supply is less than 300
	  if (supply <= 300) {
      cost = Web3.utils.toWei('0.05');
      let totalCostWei = String(cost * mintAmount);
         blockchain.smartContract.methods
           .alphaMint(mintAmount)
           .send({
             gasLimit: String(totalGasLimit),
             to: CONFIG.CONTRACT_ADDRESS,
             from: blockchain.account,
             value: totalCostWei,
           })
           .once('error', (err) => {
             console.log(err);
             setFeedback(
               'Sorry, something went wrong please try again later.'
             );
             setClaimingNft(false);
           })
           .then((receipt) => {
             console.log(receipt);
             setFeedback(
               `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
             );
             setClaimingNft(false);
             dispatch(fetchData(blockchain.account));
           });
    }
    else if (supply >= 301 && supply <= 2444) {
      cost = Web3.utils.toWei('0.08');
      console.log('Cost: ', cost);
      let totalCostWei = String(cost * mintAmount);
      console.log('Total Cost: ', totalCostWei);
			blockchain.smartContract.methods
				.alphaMint(mintAmount)
				.send({
					gasLimit: String(totalGasLimit),
					to: CONFIG.CONTRACT_ADDRESS,
					from: blockchain.account,
					value: totalCostWei,
				})
				.once('error', (err) => {
					console.log(err);
					setFeedback('Sorry, something went wrong please try again later.');
					setClaimingNft(false);
				})
				.then((receipt) => {
					console.log(receipt);
					setFeedback(
						`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
					);
					setClaimingNft(false);
					dispatch(fetchData(blockchain.account));
				});
		} else {
			cost = Web3.utils.toWei('0.1');
			let totalCostWei = String(cost * mintAmount);
			blockchain.smartContract.methods
				.bravoMint(mintAmount)
				.send({
					gasLimit: String(totalGasLimit),
					to: CONFIG.CONTRACT_ADDRESS,
					from: blockchain.account,
					value: totalCostWei,
				})
				.once('error', (err) => {
					console.log(err);
					setFeedback('Sorry, something went wrong please try again later.');
					setClaimingNft(false);
				})
				.then((receipt) => {
					console.log(receipt);
					setFeedback(
						`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
					);
					setClaimingNft(false);
					dispatch(fetchData(blockchain.account));
				});
		}
	};

	const decrementMintAmount = () => {
		let newMintAmount = mintAmount - 1;
		if (newMintAmount < 1) {
			newMintAmount = 1;
		}
		setMintAmount(newMintAmount);
	};

	const incrementMintAmount = () => {
		let newMintAmount = mintAmount + 1;
		if (newMintAmount > 10) {
			newMintAmount = 10;
		}
		setMintAmount(newMintAmount);
	};

	function getData () {
		if (blockchain.account !== '' && blockchain.smartContract !== null) {
			dispatch(fetchData(blockchain.account));
			subEvent();
		}
  };
  

	const getConfig = async () => {
		const configResponse = await fetch('/config/config.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const config = await configResponse.json();
		SET_CONFIG(config);
	};

	const subEvent = async () => {
		blockchain.smartContract.events
			.TotalMinted()
			.on('data', (data) => {
				console.log(data);
				dispatch(broadCastSupply(data.returnValues._value));
			})
			.on('error', (error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getConfig();
	}, []);

	useEffect(() => {
		getData();
	}, [blockchain.account]);

	return (
		<div className="w-full h-[100vh] bg-primary py-28">
			<div
				className="w-full"
				image={CONFIG.SHOW_BACKGROUND ? '/config/images/mint.png' : null}
			>
				<div className="px-8 md:px-20 py-7 mx-auto w-full">
					<div
						className="flex bg-footer h-full py-10"
						style={{
							boxShadow: '0px 5px 11px 2px rgba(0,0,0,0.7)',
						}}
					>
						<div className="flex justify-center items-center w-full  px-6 py-6 md:px-10 md:py-10 md:space-x-10">
							<div className="">
								{Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
									<></>
								) : (
									<>
										{blockchain.account === '' ||
										blockchain.smartContract === null ? (
											<div className="flex flex-col items-center justify-center w-full">
												<h3 className="text-white font-Boston font-bold text-base md:text-2xl md:tracking-wider">
													Connect to the {CONFIG.NETWORK.NAME} network
												</h3>
												<button
													className="bg-secondary text-white px-8 py-3 rounded-md font-Boston tracking-wider mt-16"
													onClick={(e) => {
														e.preventDefault();
														dispatch(connect());
														getData();
													}}
												>
													CONNECT
												</button>

												{blockchain.errorMsg !== '' ? (
													<>
														<h2 class="text-center text-white mt-5 font-semibold font-Opensans">
															{blockchain.errorMsg}
														</h2>
													</>
												) : null}
											</div>
										) : (
											<div className="flex flex-col items-center justify-center w-full">
												<h2 className="text-white font-Boston text-base md:text-2xl">
													{feedback}
												</h2>

												<div className="flex items-center space-x-10 mt-16">
													<button
														className="bg-secondary w-32 h-16 text-white font-Boston text-xl rounded-lg"
														disabled={claimingNft ? 1 : 0}
														onClick={(e) => {
															e.preventDefault();
															claimNFTs();
															getData();
														}}
													>
														{claimingNft ? 'Pending' : 'Mint'}
													</button>
													<button
														className="bg-secondary  w-16 h-16 text-white font-semibold text-2xl rounded-lg"
														disabled={claimingNft ? 1 : 0}
														onClick={(e) => {
															e.preventDefault();
															decrementMintAmount();
														}}
													>
														-
													</button>

													<h2 className="text-white md:text-xl font-semibold text-2xl">
														{mintAmount}
													</h2>

													<button
														className="bg-secondary h-16 w-16 text-white font-semibold text-2xl rounded-lg"
														disabled={claimingNft ? 1 : 0}
														onClick={(e) => {
															e.preventDefault();
															incrementMintAmount();
														}}
													>
														+
													</button>
												</div>

												<div className="flex justify-center mt-10">
													<div class="flex items-center font-Boston text-white tracking-wider md:font-semibold md:mt-6 md:space-x-20 md:text-xl">
														<span>
															only {CONFIG.MAX_SUPPLY - data.totalSupply} Left !
														</span>
														<span> Max 8</span>
													</div>
												</div>
											</div>
										)}
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Mint;
