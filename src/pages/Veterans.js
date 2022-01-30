import veteran from '../assets/img/Army.png';
import rarity from '../assets/img/rarity-types.png';

function Veterans() {
	return (
		<section className="bg-primary" id="veteran">
			<div className="px-8 md:px-40 py-14 mx-auto w-full">
				<h2 className="text-center font-Boston text-2xl md:text-4xl text-white">
					Veterans
				</h2>
				<div className="grid  grid-cols-1 md:grid-cols-2 gap-5 mt-10">
					<figure className="hidden md:inline-block">
						<img src={veteran} alt="" className="h-full" />
					</figure>
					<div className="space-y-5">
						<h2 className="text-secondary text-2xl font-Boston tracking-wider">
							Dogface Army Our Pledge
						</h2>
						<p className="text-sm text-white font-Opensans">
							Both Mark Tulloch and Chris Wagstaff are retired Army Veterans. We
							also have a number of other Vets involved in the project as well
							as a team of dedicated civilians.{' '}
						</p>
						<p className="text-sm text-white font-Opensans">
							For this reason, it is our pledge to donate 10% of all minting
							revenue & trading residuals to VETERAN CAUSES.
						</p>
						<p className="text-sm text-white font-Opensans">
							In unison with this pledge, we will work with the DAO to make
							decisions around where the pledge goes.
						</p>
						<p className="text-sm text-white font-Opensans">
							Our promise is to provide complete transparency on all charity
							funds & donations.
						</p>
					</div>
				</div>
				<div className="px-8 md:px-40 py-14 mx-auto w-full">
					{/* <h2 className="text-center font-Boston text-2xl md:text-4xl text-white">
						RARITY TYPES
					</h2> */}
					<figure className="hidden md:inline-block">
						<img src={rarity} alt="" className="h-full w-full" />
					</figure>
				</div>
			</div>
		</section>
	);
}

export default Veterans;
