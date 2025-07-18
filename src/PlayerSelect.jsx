import { useState } from "react";

const iplTeams = [
  {
    name: "Chennai Super Kings",
    short: "CSK",
    logo: "/assets/Logos/csk.png",
    bgColor: "bg-yellow-300",
    textColor: "text-blue-900",
  },
  {
    name: "Mumbai Indians",
    short: "MI",
    logo: "/assets/Logos/mi.png",
    bgColor: "bg-blue-500",
    textColor: "text-white",
  },
  {
    name: "Royal Challengers Bangalore",
    short: "RCB",
    logo: "/assets/Logos/rcb.png",
    bgColor: "bg-red-600",
    textColor: "text-yellow-100",
  },
  {
    name: "Kolkata Knight Riders",
    short: "KKR",
    logo: "/assets/Logos/kkr.png",
    bgColor: "bg-purple-800",
    textColor: "text-white",
  },
  {
    name: "Delhi Capitals",
    short: "DC",
    logo: "/assets/Logos/dc.png",
    bgColor: "bg-blue-400",
    textColor: "text-white",
  },
  {
    name: "Sunrisers Hyderabad",
    short: "SRH",
    logo: "/assets/Logos/srh.png",
    bgColor: "bg-orange-500",
    textColor: "text-white",
  },
  {
    name: "Rajasthan Royals",
    short: "RR",
    logo: "/assets/Logos/rr.png",
    bgColor: "bg-blue-700",
    textColor: "text-pink-100",
  },
  {
    name: "Punjab Kings",
    short: "PK",
    logo: "/assets/Logos/pk.png",
    bgColor: "bg-red-700",
    textColor: "text-white",
  },
  {
    name: "Lucknow Super Giants",
    short: "LSG",
    logo: "/assets/Logos/lcg.png",
    bgColor: "bg-sky-500",
    textColor: "text-green-200",
  },
  {
    name: "Gujarat Titans",
    short: "GT",
    logo: "/assets/Logos/gt.png",
    bgColor: "bg-blue-900",
    textColor: "text-yellow-300",
  },
];

export default function PlayerSelect({ onSelect, selected, setSelected }) {


  function toggle(teamName) {
    setSelected((prev) => {
      const next = prev === teamName ? null : teamName;
      onSelect(next);
      return next;
    });
  }

  return (
    <div className="flex-col font-semibold bg-gradient-to-br from-[#181832] to-[#212147] rounded-2xl p-15 scale-90 shadow-2xl">
      <h1 className="text-3xl font-bold text-[#fcd814] ">ipl Teams</h1>
      <div className="grid grid-cols-2 grid-rows-5 gap-2 ">
        {iplTeams.map((team) => {
          const isSelected = selected === team.name;
          const isGreyedOut = selected !== null && !isSelected;

          return (
            <div
              key={team.short}
              className={`flex flex-col items-center justify-center gap-1 p-3 m-2 rounded-md w-32 cursor-pointer 
              ${isSelected
                  ? "bg-green-400 text-white"
                  : isGreyedOut
                    ? "bg-gray-400 text-gray-100"
                    : `${team.bgColor} ${team.textColor}`
                }`}
              onClick={() => toggle(team.name)}
            >
              <img
                className="h-10 w-10 object-cover"
                src={team.logo}
                alt={team.short}
              />
              <p className="text-sm">{team.short}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
}

