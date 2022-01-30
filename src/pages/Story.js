import { Link } from 'react-router-dom';
import CalltoAction from './CalltoAction';
import ReactPlayer from 'react-player/youtube';

const playerStyle = {
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center'
}

function Story() {  
	return (
		<section className="bg-primary">
			<div className="px-8 md:px-40 py-4 mx-auto">
				<div className="mt-5 md:mt-10">
					<h2 className="text-2xl md:text-4xl text-white font-Boston text-center">
						the dogface Army story
					</h2>
          <div style={playerStyle}>
            <ReactPlayer
							url="https://www.youtube.com/watch?v=ehJFjj5T1Iw"
							playing
							loop
            />
            </div>
					<p className="text-sm text-white text-justify mt-4  font-Opensans leading-7">
						The Xeno invaded Earth, destroying the planet’s military bases. An
						immediate counter attack failed, leaving the remaining survivors
						with no choice but to flee to the fringes of the globe in search of
						asylum. Cities became battlefields, jungles became hideouts, deserts
						became landing bays, and arctic regions became home to the
						resistance. The resistance gave birth to a community of ‘Dogface’
						soldiers - everyone in it to fight for a better future.
					</p>
					<p className="text-sm text-white text-justify mt-4  font-Opensans leading-7">
						The collective Dogface soldiers, out of desperation, had one last
						plan: a mission to fight back the Xeno and reclaim the lands and to
						bring aid to the retired veterans that had gotten us this far. It
						would involve the Dogface soldiers entering the ‘no man’s land’ to
						retrieve DNA of past war heroes from relics within the city. The DNA
						collected will be used to mass clone a new type of soldier, built
						for the war at hand, a Dogface army of 5,555 soldiers to fight in:
						urban, jungle, desert, and arctic regions. Each region has its own
						rarity.
					</p>
				</div>

				<div className="mt-14 space-y-14">
					<div>
						<h2 className="font-Boston text-lg md:text-2xl text-secondary">
							The Dogface resistance:
						</h2>

						<ol className="text-white text-sm mt-3 px-3 list-decimal leading-6 font-Opensans">
							<li> Created a battle plan.</li>
							<li>
								Fought in covert operations recruiting everyone they could to
								complete the mission, to find the relics and resources needed;
								and
							</li>
							<li>
								Established a strong hold for the operation to commence across
								the Opensea.
							</li>
							<p>It is now a matter of continuing the battle to:</p>
							<li>
								Commence Operation Freebird (Gather enough resources to
								establish a full-time team, deployed to NFT creations for
								future-proofing the success of the Dogface resistance).
							</li>
							<li>
								Give out 1000 Dogface NFT clones to the chosen who demonstrated
								valor.
							</li>
							<li>
								Then take the battle to the Xeno with Operation Moonshot (deploy
								the full collection to the Opensea to fight across terrain).
							</li>
							<li>
								To set up a residual DAO system to increase value over time for
								all operators of the Dogface NFT; and finally
							</li>
							<li>
								Commence the next wave of NFT clones to support the Dogface army
								with air drops, new collections, and establish a place within
								the metaverse.
							</li>
						</ol>
					</div>
					<div>
						<h2 className="font-Boston text-lg md:text-2xl text-secondary">
							The Dogface NFTs will not only deploy rarity across the six
							different sub-collections within the 5555 for (NFT collectors) but
							will also:
						</h2>

						<ul className="text-white text-sm mt-3 list-disc px-7 leading-6 font-Opensans">
							<li>
								Give out mass distribution of the $Ammo token (Dogface currency
								that can be exchanged for website merch).
							</li>
							<li>
								Give subscription to the Dogface Army to all current operators.
							</li>
							<li>
								Give direct connection to the inner-circle, the team of NFT
								creators.
							</li>
							<li>
								And give early, exclusive, and special giveaways of future
								projects including monthly airdrops (whitelisted to the Xeno
								collection).
							</li>
						</ul>
					</div>
					<div>
						<h2 className="font-Boston text-lg md:text-2xl text-secondary">
							This will be established by the three wave release of the Dogface
							NFTs. This is broken down into:
						</h2>
						<ul className="text-white text-sm mt-3 list-disc px-7 leading-6 font-Opensans">
							<li>Generation 1 - OG Battalion: The first 300</li>
							<li>Generation 1 Alpha: 301-2,444 in the collection</li>
							<li>Generation 1 Bravo: 2,445-5,555 in the collection</li>
						</ul>
					</div>
					<div>
						<h2 className="font-Boston text-lg md:text-2xl text-secondary">
							(NFT holders), holding a Generation 1(- OG Battalion 1-300) will
							receive:
						</h2>
						<ul className="text-white text-sm mt-3 px-3 list-decimal leading-6 font-Opensans">
							<li>
								Access into the inner circle: a direct communication line with
								the Dogface NFT team.
							</li>
							<li>1000 $Ammo tokens.</li>
							<li>A subscription to the DAO.</li>
							<li>A 1/300 rare NFT Air Drop.</li>
							<li>Exclusive Dogface Twitter Banner Airdrop.</li>
							<li>
								Exclusive and early access to future projects (whitelisted to
								Xeno NFT collection).
							</li>
						</ul>
					</div>
					<div>
						<h2 className="font-Boston text-lg md:text-2xl text-secondary">
							(NFT holders), holding a Generation 1 - Alpha (301-2444) will
							receive:
						</h2>
						<ul className="text-white text-sm mt-3 px-3 list-decimal leading-6 font-Opensans">
							<li>5000 $Ammo tokens.</li>
							<li>A subscription to the DAO.</li>
							<li>A 1/2144 Rare NFT Air Drop.</li>
							<li>Exclusive Dogface Twitter Banner Airdrop.</li>
							<li>
								Exclusive and early access to future projects (whitelisted to
								Xeno NFT collection).
							</li>
						</ul>
					</div>
					<div>
						<h2 className="font-Boston text-lg md:text-2xl text-secondary">
							(NFT holders), holding a Generation 1 - Bravo (2445-5555) will
							receive:
						</h2>
						<ul className="text-white text-sm mt-3 px-3 list-decimal leading-6 font-Opensans">
							<li>1000 $Ammo tokens.</li>
							<li>A subscription to the DAO.</li>
							<li>A 1/3111 Rare NFT Air Drop</li>
							<li>
								Exclusive and early access to future projects (whitelisted to
								Xeno NFT collection).
							</li>
						</ul>
					</div>
					<div>
						<h2 className="font-Boston text-lg md:text-2xl text-secondary">
							Become a Dogface operator and secure your future and the future of
							others.
						</h2>
						<ul className="text-white text-sm mt-3 list-disc px-7 leading-6 font-Opensans">
							<li>10% of all profits go to veteran causes</li>
							<li>20% of all profits go to the DAO</li>
							<li>The first wave will deploy on the 6st of January 2022.</li>
						</ul>
					</div>
				</div>
				<h2 className="text-secondary font-Boston md:text-2xl text-center pb-20 mt-16">
					Original Story by Chris Wagstaff and Mark Tulloch
				</h2>
			</div>
			<CalltoAction />
		</section>
	);
}

export default Story;
