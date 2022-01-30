import React from "react";
import { Link } from "react-router-dom";

function Collection() {
  return (
    <section className="bg-white py-10" id="collection">
      <div className="px-8 md:px-40 py-4 mx-auto w-full space-y-10">
        <h2 className="text-center font-Boston text-2xl md:text-4xl">
          The Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center space-y-3">
            <h2 className="font-Boston tex-lg md:text-xl text-secondary">
              veteran artist
            </h2>
            <p className="text-xs md:text-sm text-center font-Opensans font-semibold">
              Chris Wagstaff is the sole artist for Dogface Army. He has applied
              the same level of dedication as he did to his military career, to
              produce this amazing and unique NFT collection. This collection is
              100% hand drawn, truly unique and will become part of NFT and DAO
              folklore in years to come.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <h2 className="font-Boston text-lg md:text-xl text-secondary">
              Trading rarity
            </h2>
            <p className=" text-xs md:text-sm text-center font-Opensans font-semibold">
              Mark Tulloch has created a multi-faceted rarity system that merges
              6 sub-collections with the Generation 1 - OG Battalion,
              Generation 1- Alpha and Generation 1 - Bravo releases. Generation 1 - OG Battalion NFTs will gain VIP entrance to the Metaverse Garrison Club.

            </p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <h2 className="font-Boston text-lg md:text-xl text-secondary">
              dogface traits
            </h2>
            <p className="text-xs md:text-sm text-center font-Opensans font-semibold">
              Chris has amassed a vast amount of kick ass military accessories
              and traits for the Dogface Army project. The weapons, uniforms and
              traits to be released will blow everybody away. There are now 1
              Million+ possible NFTs with only 5,555 being produced in
              Generation 1 Dogface Army.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <h2 className="font-Boston text-lg md:text-xl text-secondary">
              Dogface daily breif
            </h2>
            <p className="text-xs md:text-sm text-center font-Opensans font-semibold">
              The Dogface Headquarters team lead by Maj Gen FLEECE have been
              documenting the entire process of the launch of the Dogface Army NFT
              project. This amazing catalogue of videos gives behind the scenes
              footage of the project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
