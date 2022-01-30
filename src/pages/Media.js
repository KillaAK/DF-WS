import nftcalender from '../assets/img/nftcalender.png';

function Media() {
	// const [isState, setIsstate] = useState(false);

	return (
		<section className="bg-primary" id="project">
			<div className="px-8 md:px-40 py-10 mx-auto w-full space-y-10">
				<h2 className="text-center font-Boston text-2xl md:text-4xl text-white">
					As Seen On
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
					<div className="flex flex-col items-center space-y-3">
						<figure>
							<a
								href="https://nftcalendar.io/event/dogface-army-public-sale/"
								target="_blank"
							>
								<img src={nftcalender} alt="" />
							</a>
						</figure>
						<h2 className="font-Boston tex-lg md:text-xl text-white">
							NFT Calender
						</h2>
					</div>

					{/* <div className="flex flex-col items-center space-y-3">
						<figure>
							<a href="https://non-fungi.com" target="_blank">
								<img
									src="https://whensquaremeetscircle.com/wp-content/uploads/2021/09/media_non-fungi-1-400x400.png"
									alt=""
								/>
							</a>
						</figure>
					</div>
					<div className="flex flex-col items-center space-y-3">
						<figure>
							<a href="https://nftschedule.co/" target="_blank">
								<img
									src="https://whensquaremeetscircle.com/wp-content/uploads/2021/09/media_nftschedule.jpg"
									alt=""
								/>
							</a>
						</figure>
					</div>
					<div className="flex flex-col items-center space-y-3">
						<figure>
							<a href="https://www.nftdroplist.co.uk/" target="_blank">
								<img
									src="https://whensquaremeetscircle.com/wp-content/uploads/2021/09/media_nftdroplist.png"
									alt=""
								/>
							</a>
						</figure>
					</div> */}
				</div>
			</div>
		</section>
	);
}

export default Media;