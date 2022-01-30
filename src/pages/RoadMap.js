import React from "react";
import roadmap from "../assets/img/Roadmap.png";

function RoadMap() {
  return (
    <section className="bg-primary" id="roadmap">
      <div className="px-8 md:px-40 py-10 mx-auto w-full">
        <h2 className="text-center font-Boston text-2xl md:text-4xl text-white">
          The RoadMap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-8 md:mt-16">
          <div>
            <h1 className="font-Boston text-xl md:text-2xl text-secondary">
              <span className="text-white">Phase 01 :</span> Dogface doctrine
            </h1>
            <ul className="text-white list-disc py-3 px-6 space-y-1 text-sm font-Opensans">
              <li>Develop roadmap & tokenomics</li>
              <li>Build character and refine the story</li>
              <li>Create the Dogface Army concept</li>
              <li>Secure digital assets</li>
            </ul>
          </div>

          <div>
            <h1 className="font-Boston text-xl md:text-2xl text-secondary">
              <span className="text-white">Phase 02 :</span>cover recruitment
            </h1>
            <ul className="text-white list-disc py-3 px-6 space-y-1 text-sm  font-Opensans">
              <li>1000 NFT giveaway program launch</li>
              <li>Connect to the community organically</li>
              <li>Probe twitter, reddit, discord promoters</li>
              <li>ID Special Forces Recruits</li>
            </ul>
          </div>
          <div>
            <h1 className="font-Boston text-xl md:text-2xl text-secondary">
              <span className="text-white">Phase 03 :</span>firm base
            </h1>
            <p className="text-white  py-3 text-sm font-Opensans">
              Release paid propaganda campaigns
            </p>
            <ul className="text-white list-disc  px-6 space-y-1 text-sm  font-Opensans">
              <li>NFT Exchange selected by white list poll</li>
              <li>Website 2.0 released NLT 8 Dec 2021</li>
              <li>Mint function with smart contract</li>
              <li>Mint Dogface YIELD Token - $AMMO</li>
              <li>Team KYC & Smart Contract Audit</li>
            </ul>
          </div>
          <div>
            <h1 className="font-Boston text-xl md:text-2xl text-secondary">
              <span className="text-white">Phase 04 :</span>operation freebird
            </h1>
            <p className="text-white  py-3 text-sm font-Opensans">
              DogDay: 6 JAN 2021 H-Hour: 1200 hrs EST
              <br />
              Prior to: Implement multisig anti rugpull plan
              <br />
              DogDay - Open mint function
            </p>
            <ul className="text-white list-disc px-6 space-y-1 text-sm font-Opensans">
              <li>Provide 24/7 discord support</li>
              <li>
                Deliver maximum effective marketing force with deliberate
                investment into high CPA marketing
              </li>
              <li>Pause mint at 4555 NFTs minted</li>
            </ul>
            {/* <p className="text-white text-base">
              24 HR PRE & POST LAUNCH YOUTUBE LIVE MARATHON
            </p> */}
          </div>
          <div className="hidden md:inline-block col-span-2">
            <figure>
              <img src={roadmap} alt="Roadmap image" className="w-full" />
            </figure>
          </div>
          <div>
            <h1 className="font-Boston text-xl md:text-2xl text-secondary">
              <span className="text-white">Phase 05 :</span>action 1000 nft
              giveaway
            </h1>
            <ul className="text-white list-disc py-3 px-6 space-y-1 text-sm font-Opensans">
              <li>At #4555 NFT sold</li>
              <li>Pay gas only</li>
              <li>72hr window to claim NFTs</li>
              <li>Unclaimed Free NFTs will go back into the open market</li>
            </ul>
          </div>
          <div>
            <h1 className="font-Boston text-xl md:text-2xl text-secondary">
              <span className="text-white">Phase 06 :</span>operation moonshot
            </h1>
            <ul className="text-white list-disc py-3 px-6 space-y-1 text-sm font-Opensans">
              <li>Recommence mint (#4556 - #5555)</li>
              <li>Run 1st Dogface Army Committee Meeting</li>
              <li>Decide on Dogface Army meta LOC via poll</li>
              <li>Purchase or build Dogface Clubhouse</li>
              <li>Commence distribution of AMMO token</li>
            </ul>
          </div>
          <div>
            <h1 className="font-Boston text-xl md:text-2xl text-secondary">
              <span className="text-white">Phase 07 :</span> dao birth
            </h1>
            Formalize DAO entity
            <ul className="text-white list-disc py-3 px-6 space-y-1 text-sm font-Opensans">
              <li> Formalize DAO entity</li>
              <li>DAO Snapshot Established</li>
              <li>Voting Mechanism Established</li>
              <li>Vote on Metaverse location - $SAND vs $MANA</li>
            </ul>
          </div>
          <div>
            <h1 className="font-Boston text-xl md:text-2xl text-secondary">
              <span className="text-white">Phase 08 :</span>DERIVATIVE 1 DELTA
            </h1>
            <ul className="text-white list-disc py-3 px-6 space-y-1 text-sm font-Opensans">
              <li> 50% DAO Derivative Project</li>
              <li>XENO / Dogface Enemy</li>
              <li>DeFi LaunchPad</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
