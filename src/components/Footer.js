import React from "react";
import logo from "../assets/img/logo.png";
import twitter from "../assets/img/twitter.png";
import discord from "../assets/img/discord.png";
import reddit from "../assets/img/reddit.png";
import youtube from "../assets/img/youtube.png";
import opensea from "../assets/img/opensea.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
		<footer className="bg-footer py-10">
			<div className="px-10 flex flex-col items-center space-y-7">
				<figure>
					<img src={logo} alt="" />
				</figure>
				<h2 className="text-center font-Boston text-2xl md:text-4xl text-white">
					Join our community
				</h2>
				<div className="flex items-center space-x-3 md:space-x-7">
					<figure>
						<a href="">
							<img src={opensea} alt="Twitter" />
						</a>
					</figure>
					<figure>
						<a href="https://www.twitter.com/dogfaceNFT" target="_blank">
							<img src={twitter} alt="Twitter" />
						</a>
					</figure>
					<figure>
						<a href="https://discord.gg/TEYKDKCS4D" target="_blank">
							<img src={discord} alt="Discord" />
						</a>
					</figure>

					<figure>
						<a href="https://www.youtube.com/c/fleececrypto" target="_blank">
							<img src={youtube} alt="Youtube" />
						</a>
					</figure>
					<figure>
						<a href="https://www.reddit.com/r/DogfaceDAOnft/">
							<img src={reddit} alt="Reddit" />
						</a>
					</figure>
				</div>
				<p className="text-sm text-center text-white font-Opensans">
					©2021 DogFace Army. All rights reserved.
				</p>
				<ul className="text-sm text-white text-center font-Opensans flex items-center space-x-4">
					<li>
						<Link to="/terms">Dogface Terms & Conditions</Link>
					</li>
					<li>
						<Link to="/privacy">Privacy Policy</Link>
					</li>
					{/* <li>
            <a href="#" target="_blank">
              
              Smart Contract
            </a>
          </li> */}
					<li>
						<a
							href="https://etherscan.io/address/0xBFcB983a6C3E392CbDdECa228854c51fBc29220a"
							target="_blank"
							smooth={true}
							duration={1000}
						>
							Smart Contract
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
