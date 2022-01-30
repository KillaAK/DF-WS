import React from "react";
import hero from "../assets/img/Hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
		<section>
			<figure>
				<img src={hero} alt="" className="w-full" />
				<div className="hidden md:block px-8 md:px-40 mx-auto w-full">
					<div className="max-w-sm absolute md:top-60">
						<h2 className="uppercase text-5xl font-Boston text-white">
							DOGFACE Army
						</h2>
						<p className="hidden md:inline-block text-sm text-white font-Opensans mt-2">
							Dogface Army is a community driven, utility based, NFT project
							that supports Veterans causes.
						</p>
						<p className="hidden md:inline-block text-sm text-white mt-4 font-Opensans mb-14">
							We are an investor army of 5,555 NFT soldiers who fight in: urban,
							jungle, desert, and arctic regions on the Ethereum Blockchain.
						</p>
						<a
							href="https://discord.gg/TEYKDKCS4D"
							target="_blank"
							className="tracking-wider font-Boston font-bold bg-white text-secondary px-7 text-lg py-5 rounded mt-5"
						>
							Join Discord
						</a>{' '}
						{}
						<a
							href="/mint"
							className="tracking-wider font-Boston font-bold bg-white text-secondary px-7 text-lg py-5 rounded mt-5"
						>
							Mint NOW
						</a>
					</div>
				</div>
			</figure>
		</section>
	);
}

export default Hero;
