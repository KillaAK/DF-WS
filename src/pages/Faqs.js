import { Link } from "react-router-dom";

function Faqs() {
  return (
		<section className="bg-primary py-10" id="faq">
			<div className="px-8 md:px-40 py-14 mx-auto w-full flex flex-col items-center">
				<h2 className="text-center font-Boston text-2xl md:text-4xl text-white">
					faqs
				</h2>
				<div className="mt-10">
					<div className="space-y-3 mt-10">
						<h2 className="font-Boston text-xl md:text-2xl text-secondary">
							q. When is the Launch?
						</h2>
						<div className="flex items-center space-x-4">
							<h3 className="text-xl md:text-2xl text-white font-Boston">A.</h3>
							<p className="text-white text-sm text-justify font-Opensans">
								22nd February 2022, 12:00 EST.
							</p>
						</div>
					</div>

					<div className="space-y-3 mt-10">
						<h2 className="font-Boston text-xl md:text-2xl text-secondary">
							q. How can I purchase Dogface Army NFTs?
						</h2>
						<div className="flex items-center space-x-4">
							<h3 className="text-xl md:text-2xl text-white font-Boston">A.</h3>
							<p className="text-white text-sm text-justify font-Opensans">
								You can purchase DogFace Army{' '}
								<Link to="/mint" className="text-secondary underline">
									{' '}
									Here
								</Link>
								.
							</p>
						</div>
					</div>

					<div className="space-y-3 mt-10">
						<h2 className="font-Boston text-xl md:text-2xl text-secondary">
							q. How do I learn more about Dogface Army?
						</h2>
						<div className="flex items-center space-x-4">
							<h3 className="text-xl md:text-2xl text-white font-Boston">A.</h3>
							<p className="text-white text-sm text-justify font-Opensans">
								Go to the community on{' '}
								<a
									href="https://discord.gg/TEYKDKCS4D"
									className="text-secondary underline"
								>
									Discord
								</a>
								.
							</p>
						</div>
					</div>

					<div className="space-y-3 mt-10">
						<h2 className="font-Boston text-xl md:text-2xl text-secondary">
							q. What is a dao ?
						</h2>
						<div className="flex space-x-10">
							<h3 className="text-xl md:text-2xl text-white font-Boston">A.</h3>
							<ul className="text-white text-sm list-disc font-Opensans">
								<li>
									Member-owned communities without centralized leadership.
								</li>
								<li> A safe way to collaborate with internet strangers.</li>
								<li>A safe place to commit funds to a specific cause.</li>
							</ul>
						</div>
					</div>

					<div className="space-y-3 mt-10">
						<h2 className="font-Boston text-xl md:text-2xl text-secondary">
							q. What is dogface army ?
						</h2>
						<div className="flex items-center space-x-4">
							<h3 className="text-xl md:text-2xl text-white font-Boston">A.</h3>
							<p className="text-white text-sm text-justify font-Opensans">
								The Dogface Army is member-owned place without centralized
								leadership where Dogface Army Staking NFT Holders can commit
								funds to the Dogface Army fund.
							</p>
						</div>
					</div>

					<div className="space-y-3 mt-10">
						<h2 className="font-Boston text-xl md:text-2xl text-secondary">
							q. Is there a whitepaper for the Dogface collection ?
						</h2>
						<div className="flex items-center space-x-4">
							<h3 className="text-xl md:text-2xl text-white font-Boston">A.</h3>
							<p className="text-white text-sm text-justify font-Opensans">
								The whitepaper can be found on the founders substack. {}
								<a
									href="https://fleece.substack.com/"
									target="_blank"
									smooth={true}
									duration={1000}
								>
									DFA Whitepaper
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Faqs;
