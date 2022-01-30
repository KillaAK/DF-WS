import ammo from "../assets/img/Ammo.png";

function Ammo() {
  return (
		<section className="bg-primary">
			<div className="px-8 md:px-40 py-4 mx-auto w-full">
				<h2 className="text-center font-Boston text-2xl md:text-4xl text-white">
					Tokenomics
				</h2>
				<figure className="space-y-4 mt-16">
					<div className="flex items-center space-x-3">
						<img src={ammo} alt="Ammo figure" />
						<h2 className="text-2xl md:text-4xl font-Boston text-white">
							load your <span className="text-secondary">ammo</span>
						</h2>
					</div>
					<p className="text-lg text-white font-Opensans text-justify">
						<span className="text-secondary">$AMMO </span>
						is the key to Dogface Army life. As the Dogface Army and derivative
						NFT collections are released,{' '}
						<span className="text-secondary">$AMMO </span> will drive the entire
						ecosystem. We aim to give true utility, governance value to our DAO
						community. Dogface Army is about military appreciation, community
						and the utility of <span className="text-secondary">$AMMO</span>.
					</p>
				</figure>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 py-20">
					{/* =====DAO====== */}
					<div className="bg-footer border-2 border-secondary rounded-md px-5 py-10">
						<h2
							className="font-Boston text-secondary text-3xl text-center 
            "
						>
							dao
						</h2>
						<hr className="border-secondary mt-6" />
						<ul className="text-white space-y-3 text-sm space-y-7 list-disc px-3 py-4 font-Opensans">
							<li>
								20% of profits will go to the DAO fund (this will be 76 ETH if
								all NFTs sell out)
							</li>
							<li>
								Airdrop of <span className="text-secondary">$AMMO </span> token
								to all NFT holders
							</li>
							<li>
								Ability to stake <span className="text-secondary">$AMMO</span>
								/earn passive income
							</li>
							<li>
								Voting rights to NFT holders (first vote is to decide if we
								build our club in decentraland or sandbox).
							</li>
							<li>Membership benefits in Merch store and Dogface garrison</li>
							<li>
								All NFT sales on the secondary market generate income and 20% of
								every sale goes to the DAO fund
							</li>
							<li>
								DAO will vote on which charities DogFace Army will support - an
								additional 10% of all profits will go to charity - that's 30% of
								all profits going to the DAO and charity.
							</li>
						</ul>
					</div>

					{/* ======AMMO======= */}
					<div className="md:h-5/6 bg-footer border-2 border-secondary rounded-md px-5 py-10">
						<h2
							className="font-Boston text-secondary text-3xl text-center 
            "
						>
							<span className="font-Know text-secondary">$</span>
							Ammo
						</h2>
						<hr className="border-secondary mt-6" />
						<div className="space-y-7 md:space-y-14 mt-10">
							<div>
								<h3 className="font-Boston text-white text-xl">Yield</h3>
								<p className="text-sm text-white font-Opensans">
									<span className="text-secondary">+ 30 $AMMO</span>
									Every 1st DOGFACE DIVISION NFT yields{' '}
									<span className="text-secondary">30 $AMMO</span> a day. All a
									soldier needs to get by is $AMMO.
								</p>
							</div>
							<div>
								<h3 className="font-Boston text-white text-xl">derivative</h3>
								<p className="text-sm text-white font-Opensans">
									The Dogface Army derivative projects are already in
									development. Owning a Dogface Army NFT will give you automatic
									whitelist to any derivative projects.
								</p>
							</div>
							<div>
								<h3 className="font-Boston text-white text-xl">
									Voting Rights
								</h3>
								<p className="text-sm text-white font-Opensans">
									Our DAO comprises 1st DIVISION NFT collection holders. These
									people will have important voting rights.
								</p>
							</div>
						</div>
					</div>
					{/* ======SUPPLY===== */}
					<div className="md:h-4/6 bg-footer border-2 border-secondary rounded-md px-5 py-10">
						<h2
							className="font-Boston text-secondary text-3xl text-center 
            "
						>
							supply
						</h2>
						<hr className="border-secondary mt-6" />
						<div className="mt-10 space-y-10 md:space-y-16">
							<div className="space-y-10">
								<div className="space-y-2">
									<h2 className="font-Boston text-base text-white">
										<span className="font-Know text-secondary">$</span>
										<span className="text-secondary">ammo </span>
										Supply
									</h2>
									<p className="text-sm text-white font-Opensans">TBC</p>
								</div>
								<div className="space-y-2">
									<h2 className="font-Boston text-base text-white">
										<span className="font-Know text-secondary">$</span>
										<span className="text-secondary">ammo </span>Smart contract
									</h2>
									<p className="text-xs text-white font-Opensans">
										0xBFcB983a6C3E392CbDdECa228854c51fBc29220a
									</p>
								</div>
							</div>
							<p className="text-sm text-white font-Opensans">
								<span className="text-secondary">$AMMO </span>
								is the utility token that fuels the DogFace Army ecosystem. It
								is NOT an investment and has no economic value
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Ammo;
