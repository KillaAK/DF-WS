import React from "react";
import discord from "../assets/img/discord-btn.png";
import { Link } from "react-router-dom";

function Community() {
  return (
    <section className="bg-secondary" id="community">
      <div className="py-6 md:py-10">
        <div className="flex flex-col items-center justify-center space-y-10">
          <h2 className="font-Boston text-white text-2xl md:text-4xl">
            launch details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-16 md:gap-32">
            <div className="flex flex-col items-center">
              <h2 className="text-lg md:text-2xl font-Boston tracking-wider">
                0.05 ETH
              </h2>
              <p className="uppercase text-sm md:text-xl text-white font-semibold">
                Gen 1 og battalion
              </p>
              <p className="text-lg font-semibold font-Opensans">(#1 - #300)</p>
              <p className="text-base text-white font-Opensans text-center">
                Whitelist only - 24H <br /> Mint Bonus: 10,000 $AMMO
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-lg md:text-2xl font-Boston">0.08 ETH</h2>
              <p className="uppercase text-sm md:text-xl text-white font-semibold font-Opensans">
                Gen 1 alpha
              </p>
              <p className="text-lg font-semibold">(#301 - #2444)</p>
              <p className="text-base text-white font-Opensans">
                Whitelist + Public
              </p>
              <p className="text-base text-white font-Opensans">
                Mint Bonus: 5,000 $AMMO
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-lg md:text-2xl font-Boston">0.1 ETH</h2>
              <p className="uppercase text-sm md:text-xl text-white font-semibold font-Opensans">
                gen 1 bravo
              </p>
              <p className="text-lg font-semibold font-Opensans">
                (#2445 - #5555)
              </p>
              <p className="text-base text-white font-Opensans text-center">
                Public Sale <br /> Mint Bonus: 1,000 $AMMO
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <Link
              className="font-Boston bg-white px-5 py-2 text-secondary  tracking-widest text-center rounded-md
              "
              to="/mint"
            >
              Mint
            </Link>
            <p className="text-sm md:text-base text-white font-semibold font-Opensans">
              To guarantee a Dogface Army, whitelist now on discord
            </p>
            <div className="flex space-x-4">
              <a
                href="https://discord.gg/TEYKDKCS4D"
                target="_blank"
                className="font-Boston bg-white pl-5 pr-10 py-3 text-secondary tracking-widest rounded-md flex items-center space-x-2"
              >
                <img src={discord} alt="Discord" />
                <p> Join Discord</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
