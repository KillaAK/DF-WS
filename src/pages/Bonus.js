function Bonus() {
  return (
		<section className="bg-footer py-10" id="faqs">
			<div className="px-8 md:px-40 py-14 mx-auto w-full flex flex-col items-center">
				<h2 className="text-center font-Boston text-2xl md:text-4xl text-white">
					Minting Bonus
				</h2>
				{/* <h2 className="text-center font-Boston text-2xl md:text-4xl text-white">
          Minting Bonus
        </h2>
        <table class="table-auto text-white border-2 border-secondary w-full my-8">
          <thead className="text-sm md:text-bg text-semibold text-justify">
            <tr>
              <th>MINT</th>
              <th>Bonus AMMO</th>
              <th>1st 24 HR</th>
              <th>Dogface Twitter Banner</th>
              <th>Collector Airdrop</th>
            </tr>
          </thead>
          <tbody className="border border-secondary">
            <tr className="border border-secondary">
              <td>Gen 1 OG</td>
              <td>10,000</td>
              <td>OG POAP NFT</td>
              <td>Yes</td>
              <td>1 / 300 Airdrop</td>
            </tr>
            <tr className="border border-secondary">
              <td>Gen 1 A</td>
              <td>5,000</td>
              <td>POAP NFT 2</td>
              <td>Yes</td>
              <td>1/ 2144 Airdrop</td>
            </tr>
            <tr className="border border-secondary">
              <td>Gen 1 B</td>
              <td>1,000</td>
              <td>POAP NFT 3</td>
              <td>NO</td>
              <td>1 / 3111 Airdrop</td>
            </tr>
          </tbody>
        </table> */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 py-20">
					{/* ===== Gen 1 - OG Battalion====== */}
					<div className="bg-footer border-2 border-secondary rounded-md px-5 py-10">
						<h2
							className="font-Boston text-secondary text-xl text-center 
            "
						>
							Gen 1 - OG Battalion
						</h2>
						<p className="text-white text-center text-sm font-Opensans px-4 pt-4">
							NFTs #1 - #300
						</p>
						<hr className="border-secondary mt-6" />
						<div className="text-white text-sm font-Opensans px-4 pt-4">
							{/* <p className="text-secondary text-base">Jan 6 2022</p> */}
							{/* <p>NFTs #1 - #2144</p> */}
							<p>Membership Rewards:</p>
						</div>
						<ul className="text-white space-y-3 text-sm space-y-7 list-disc px-3 py-4 font-Opensans">
							<li>10,000 $AMMO</li>
							<li>OG Battalion 1/300 Airdrop NFT</li>
							<li>Metaverse Garrison Club Membership</li>
							<li>Hand signed digital DFA print posted to you.</li>
						</ul>
						<h3 className="text-base text-secondary font-semibold">
							1st 24 hour mint BONUS:
						</h3>
						<ul className="text-white space-y-3 text-sm space-y-7 list-disc px-3 py-4 font-Opensans">
							<li>DFA 1%er Badge Airdrop NFT</li>
							<li>Metaverse Garrison Club - OG upgrade</li>
						</ul>
					</div>

					{/* ======Generation 1 Alpha======= */}
					<div className=" bg-footer border-2 border-secondary rounded-md px-5 py-10">
						<h2
							className="font-Boston text-secondary text-xl text-center 
            "
						>
							<span className="font-Know text-secondary"></span>
							Gen 1 Alpha
						</h2>
						<p className="text-white text-center text-sm font-Opensans px-4 pt-4">
							NFTs #301 - #2444
						</p>
						<hr className="border-secondary mt-6" />
						<div className="text-white text-sm font-Opensans px-4 pt-4">
							{/* <p className="text-secondary text-base">Jan 7 2022</p> */}
							{/* <p>NFTs #301 - #2444</p> */}
							<p>Membership Rewards:</p>
						</div>
						<ul className="text-white space-y-3 text-sm space-y-7 list-disc px-3 py-4 font-Opensans">
							<li>5,000 $AMMO</li>
							<li>OG Battalion 1/2144 Airdrop NFT</li>
							<li>Metaverse Garrison Club Membership</li>
							<li> DFA 3D Challenge Coin NFT</li>
						</ul>
						<h3 className="text-base text-secondary font-semibold">
							1st 24 hour mint BONUS:
						</h3>
						<ul className="text-white space-y-3 text-sm space-y-7 list-disc px-3 py-4 font-Opensans">
							<li>Official DFA Dog Tags NFT</li>
							<li>Metaverse Garrison Club - VIP upgrade</li>
						</ul>
					</div>
					{/* ======Generation 1 Bravo===== */}
					<div className=" bg-footer border-2 border-secondary rounded-md px-5 py-10">
						<h2
							className="font-Boston text-secondary text-xl text-center 
            "
						>
							Gen 1 Bravo
						</h2>
						<p className="text-white text-center text-sm font-Opensans px-4 pt-4">
							NFTs #2445 - #5555
						</p>
						<hr className="border-secondary mt-6" />
						<div className="text-white text-sm font-Opensans px-4 pt-4">
							{/* <p className="text-secondary text-base">Feb 6 2022</p> */}
							{/* <p>NFTs #2445 - #5555</p> */}
							<p>Membership Rewards:</p>
						</div>
						<ul className="text-white space-y-3 text-sm space-y-7 list-disc px-3 py-4 font-Opensans">
							<li>1,000 $AMMO</li>
							<li>Metaverse Garrison Club Membership</li>
						</ul>
						<h3 className="text-base text-secondary font-semibold">
							1st 24 hour mint BONUS:
						</h3>
						<ul className="text-white space-y-3 text-sm space-y-7 list-disc px-3 py-4 font-Opensans">
							<li>Official DFA Twitter Banner</li>
							<li>Official DFA Gen 1 POAP NFT</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Bonus;
