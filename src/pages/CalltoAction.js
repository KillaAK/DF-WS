import { Link } from "react-router-dom";

function CalltoAction() {
  return (
    <section className="bg-secondary">
      <div className="px-8 md:px-40 py-14 mx-auto w-full flex flex-col items-center">
        <h2 className="text-white text-xl">
          Join the Dogface Army! Click here to mint your Dogface soldier.
        </h2>
        <Link
          className="font-Boston bg-white px-8 py-3 text-secondary tracking-widest rounded-md mt-5 inline-block
              "
          to="/mint"
        >
          Mint
        </Link>
      </div>
    </section>
  );
}

export default CalltoAction;
