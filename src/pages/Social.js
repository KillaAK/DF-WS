import React from "react";

function Social() {
  return (
    <section className="bg-secondary py-3">
      <div className="px-10 md:px-40 py-4 mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-44 items-center">
          <div className="flex flex-col space-y-2 items-center font-Boston text-lg">
            {/* <p className="text-white text-sm">12:00 EST</p> */}
            <h2>22 Feb 2022</h2>
            <p className="text-white">Public Launch</p>
          </div>
          <div className="flex flex-col space-y-2 items-center font-Boston text-lg">
            <h2> 4.05 k</h2>
            <p className="text-white">Twitter</p>
          </div>
          <div className="flex flex-col space-y-2 items-center font-Boston text-lg">
            <h2>12.5 k</h2>
            <p className="text-white">Instagram</p>
          </div>
          <div className="flex flex-col space-y-2 items-center font-Boston text-lg">
            <h2>11.5 k </h2>
            <p className="text-white">Discord</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Social;
