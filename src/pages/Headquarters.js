import React, { useState } from "react";
import teamIcon from "../assets/img/Team-icon.png";
import teamData from "../handler/teamData";

function Headquarters() {
  const [teams, setTeams] = useState(teamData);

  return (
    <section className="bg-primary" id="team">
      <div className="px-8 md:px-40 py-14 mx-auto w-full">
        <h2 className="text-center font-Boston text-2xl md:text-4xl text-white">
          Headquarters
        </h2>
        <div className="mt-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {teams.map((team) => (
              <figure key={team.id} className="flex flex-col items-center">
                <img src={team.image} alt="" />
                <h2 className="text-white font-Boston text-center text-lg md:text-2xl my-3">
                  {team.name}
                </h2>
                <div className="space-y-2">
                  <p className="text-center text-white font-semibold text-sm font-Opensans">
                    {team.post}
                  </p>
                  <p className="text-center uppercase text-sm  font-semibold text-secondary font-Opensans">
                    {team.role}
                  </p>
                </div>
                <a href={team.link} className="mt-2">
                  <img src={teamIcon} alt="Team Icon" />
                </a>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Headquarters;
