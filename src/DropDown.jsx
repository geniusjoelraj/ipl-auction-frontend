
import { useState, useRef, useEffect } from "react";

const iplTeams = [
  "Chennai Super Kings",
  "Mumbai Indians",
  "Royal Challengers Bangalore",
  "Kolkata Knight Riders",
  "Delhi Capitals",
  "Sunrisers Hyderabad",
  "Rajasthan Royals",
  "Punjab Kings",
  "Lucknow Super Giants",
  "Gujarat Titans",
];

export default function IplTeamDropdown({ onSelect }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex justify-center w-full rounded-md bg-secondary px-4 py-2 text-sm font-medium text-white hover:bg-secondary/80 focus:outline-none"
      >
        Select Team
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <ul className="py-1 text-sm text-gray-700">
            {iplTeams.map((team) => (
              <li key={team}>
                <button
                  onClick={() => {
                    setOpen(false);
                    onSelect?.(team);
                  }}
                  className="w-full text-left block px-4 py-2 hover:bg-gray-100"
                >
                  {team}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
