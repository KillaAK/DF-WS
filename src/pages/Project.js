import community1 from "../assets/img/community1.png";
import communityMobile from "../assets/img/commob.png";
import community2 from "../assets/img/community-2.png";
import community3 from "../assets/img/community-3.png";
import community4 from "../assets/img/community-4.png";
import community5 from "../assets/img/community-5.png";
import community6 from "../assets/img/community-6.png";
import knief from "../assets/img/knief.png";
import sticker from "../assets/img/sticker.png";
import etherum from "../assets/img/etherum.png";
import paint from "../assets/img/paint.png";

function Project() {
  // const [isState, setIsstate] = useState(false);

  return (
    <section className="bg-primary" id="project">
      <div className="px-8 md:px-40 py-10 mx-auto w-full space-y-10">
        <h2 className="text-center font-Boston text-2xl md:text-4xl text-white">
          The Project
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="flex flex-col items-center space-y-3">
            <img src={knief} alt="" />
            <h2 className="font-Boston tex-lg md:text-xl text-white">
              the colonel
            </h2>
            <p className="text-white text-xs md:text-sm text-center font-Opensans">
              Chris Wagstaff is an Army Veteran with an Operational Tour under
              his belt. He is a qualified teacher, fitness coach and self taught
              artist. He has self published a 70,000 word fantasy novel and
              draws for 7-10 hours daily. His goal is to become a full time NFT
              artist, comic creator and author.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <img src={paint} alt="" />
            <h2 className="font-Boston tex-lg md:text-xl text-white">
              the art
            </h2>
            <p className="text-white text-xs md:text-sm text-center font-Opensans">
              Every single Dogface Soldier and army trait has been hand-drawn
              with immaculate attention to detail. All of the art is drawn in
              Chris's home studio using a wacom tablet. No Dogface Soldier or
              trait has been outsourced or produced with the help of AI or
              computers.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <img src={etherum} alt="" />
            <h2 className="font-Boston tex-lg md:text-xl text-white">
              the community
            </h2>
            <p className="text-white text-xs md:text-sm text-center font-Opensans">
              The launch of the{" "}
              <a
                href="https://discord.gg/TEYKDKCS4D"
                target="_blank"
                className="text-secondary underline"
              >
                Dogface Discord
              </a>{" "}
              has seen the community grow and come together as a powerful force.
              The community has already contributed to traits, the minting
              platform, marketing strategies, the story and many other aspects
              of the project.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img src={sticker} alt="" />
            <h2 className="font-Boston tex-lg md:text-xl text-white">
              full transparency
            </h2>
            <p className="text-white text-xs md:text-sm text-center font-Opensans">
              Dogface Army founder Mark Tulloch has created a{" "}
              <a
                href="https://www.youtube.com/c/fleececrypto"
                target="_blank"
                className="text-secondary underline"
              >
                YouTube Playlist
              </a>{" "}
              that documents the development of the Dogface NFT project from Day
              1. The daily brief is a tell all where you will see the intense
              dedication to the community and project from the fully doxxed HQ
              team.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <figure className="hidden md:block">
          <img src={community1} className="w-full" alt="" />
        </figure>

        <figure className="block md:hidden">
          <img src={communityMobile} className="w-full" alt="" />
        </figure>
      </div>
    </section>
  );
}

export default Project;
