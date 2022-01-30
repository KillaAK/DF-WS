import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { Link as LinkS, animateScroll as scroll } from 'react-scroll';

import { AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { links, social } from '../handler/navData';
import { fetchData, broadCastSupply } from '../redux/data/dataActions';
import Mint from '../Mint';
import store from '../redux/store';
import { useEffect } from 'react';
import { connect } from '../redux/blockchain/blockchainActions';

const mintButtonStyle = {
	backgroundColor: 'green',
}

function Header() {
	const [showLinks, setShowLinks] = useState(true);
	const [state, setState] = useState(true);
	// const [supply, setSupply] = useState(0);
	const [dropdown, setDropdown] = useState(false);
	const dispatch = useDispatch();
	// const blockchain = useSelector((state) => state.blockchain);
	// const data = useSelector((state) => state.data);

	// useEffect(() => {
		// dispatch(connect());
  //   setTimeout(() => {
  //     console.log('we get am : ', blockchain.account);
  //     getData(blockchain.account);
  //     setInterval(() => {
  //       let supply = data.totalSupply;
  //       console.log('supply : ', supply);
	// 			setSupply(supply);
  //     }, 5000);
  //   }, 10000);
	// }, []);

	// function getData() {
	// 	if (blockchain.account !== '' && blockchain.smartContract !== null) {
	// 		dispatch(fetchData(blockchain.account));
	// 	}
	// }

	return (
		<header className="bg-primary">
			<div className="px-8 md:px-40 md:py-4 mx-auto w-full nav-center">
				<div className="nav-header">
					<figure>
						<Link to="/">
							<img src={logo} alt="Site Logo" className="h-16 md:h-20" />
						</Link>
					</figure>
					<button onClick={() => setShowLinks(!showLinks)}>
						<AiOutlineMenu className="md:hidden text-secondary absolute top-8 right-8 text-3xl cursor-pointer" />
					</button>
				</div>

				<div
					className={`${
						showLinks ? 'links-container show-container' : 'show-container'
					}`}
				>
					<ul className="links  md:space-x-12 uppercase font-Boston text-white md:text-base">
						{/* <li className="cursor-pointer links">
              <a href="#project" className="" smooth={true} duration={1000}>
                Project
              </a>
            </li>
            <li className="cursor-pointer links">
              <a href="#collection" className="" smooth={true} duration={1000}>
                collection
              </a>
            </li>
            <li className="cursor-pointer links">
              <a href="#roadmap" className="" smooth={true} duration={1000}>
                roadmap
              </a>
            </li> */}

						<li className="cursor-pointer links">
							<a
								onClick={() => setDropdown(!dropdown)}
								smooth={true}
								duration={1000}
							>
								About
							</a>
							<ul
								className={`${dropdown ? 'show__dropdown' : 'hide__dropdown'}`}
							>
								<div className="space-y-5 ">
									<li>
										<a href="#project">THE PROJECT</a>
									</li>
									<li>
										<a href="#collection">THE COLLECTION</a>
									</li>
									<li>
										<a href="#community">LAUNCH DETAILS</a>
									</li>
									<li>
										<a href="#team">HEADQUARTERS</a>
									</li>
									<li>
										<a href="#veteran">VETERANS</a>
									</li>
									<li>
										<a href="#faq">FAQ</a>
									</li>
									<li>
										<a
											href="https://fleece.substack.com/"
											target="_blank"
											smooth={true}
											duration={1000}
										>
											WHITEPAPER
										</a>
									</li>
								</div>
							</ul>
						</li>
						<li className="cursor-pointer links">
							<a href="#roadmap">ROADMAP</a>
						</li>
						<li className="cursor-pointer links">
							<Link to="/story" smooth={true} duration={1000}>
								Story
							</Link>
						</li>
						{/* <li className="cursor-pointer links">
              <a href="#hq" className="" smooth={true} duration={1000}>
                hq
              </a>
            </li> */}
						<li className="cursor-pointer links">
							<Link to="/tokenomics" smooth={true} duration={1000}>
								Tokenomics
							</Link>
						</li>
						{/* <li className="cursor-pointer links">
              <a href="#veteran" className="" smooth={true} duration={1000}>
                veterans
              </a>
            </li> */}
						<li className="cursor-pointer links">
							<a
								// href="https://www.youtube.com/playlist?list=PLoN6mmiNWRCFL7z57DPrXrO89mCactl57"
								href="https://www.facebook.com/groups/nftweb"
								target="_blank"
								smooth={true}
								duration={1000}
							>
								nft academy
							</a>
						</li>
						{/* <li className="cursor-pointer links">
              <a href="#faqs" className="" smooth={true} duration={1000}>
                faqs
              </a>
            </li> */}

						<li
							className="cursor-pointer links rounded-md"
							style={mintButtonStyle}
						>
							<Link to="/mint" className="">
								Mint Now
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
