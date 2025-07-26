import { useState, useEffect } from "react"
import axios from "axios"
import PlayerSelect from "./PlayerSelect"
import BatsmenStats from "./BatsmenStats.jsx"
import BowlerStats from "./BowlerStats"
import AllRounderStats from "./AllRounderStats"

function App() {
  const [pos, setPos] = useState(1)
  const [go, setGo] = useState(1)
  const [stats, setStats] = useState({})
  const [purchase, setPurchase] = useState(null)
  const [selected, setSelected] = useState(null); // Fixed: removed reference to undefined purchase
  const [type, setType] = useState("batsmen")
  const [price, setPrice] = useState(1000000000); // Fixed: set default value directly
  const [teamId, setTeamId] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:8080/${type}/${pos}`)
      .then((res) => {
        res.data.price = 100000;
        setStats(res.data)
        setPrice(res.data.price)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [pos, type])

  const typeLabel = {
    batsmen: "Batsman",
    bowlers: "Bowler",
    "all_rounders": "All Rounder"
  };
  const ptype = {
    batsmen: "batsman",
    bowlers: "bowler",
    "all_rounders": "all_rounder"
  }

  useEffect(() => {
    if (!purchase || !purchase.playerId || !purchase.teamId) return;

    axios.post("http://localhost:8080/purchase", purchase)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response?.data);
      });
  }, [purchase]);

  const handleSelect = (team) => {
    console.log(team)

    if (team) {
      const order = {
        "playerId": pos,
        "soldPrice": price,
        "teamId": teamId,
        "playerType": ptype[type]
      }
      setPurchase(order)
    } else {
      setPurchase(null)
    }
  };

  function formatToCrores(num) {
    if (typeof num !== 'number' || isNaN(num)) return '';

    if (num >= 10000000) {
      return `${(num / 10000000).toFixed(1).replace(/\.0$/, '')}cr`;
    } else if (num >= 100000) {
      return `${(num / 100000).toFixed(1).replace(/\.0$/, '')}L`;
    }

    return num.toLocaleString('en-IN');
  }

  return (
    <>
      <div className="overflow-hidden p-10 h-screen bg-gradient-to-br from-[#0D0C1C] to-[#131931] text-white relative">
        <nav className="justify-center items-center absolute left-[40%] top-10 z-10 flex gap-5 bg-[#191934]  rounded-full px-10 font-inter font-semibold" >
          <div className="cursor-pointer group py-3">
            <div className="hover:text-gray-400" >Player</div>
            <div className="pointer-events-none group-hover:pointer-events-auto mt-2 absolute flex-col group-hover:flex p-5 bg-[#2B2C5C] rounded-2xl translate-x-[-40px]  group-hover:translate-y-0 translate-y-10 duration-300 transition-all group-hover:opacity-100 opacity-0" >
              <div className="hover:text-gray-400" onClick={() => {
                setType('batsmen')
                setPos(1)
              }}>Batsmen</div>
              <div className="hover:text-gray-400" onClick={() => {
                setType('bowlers')
                setPos(1)
              }}>Bowlers</div>
              <div className="hover:text-gray-400" onClick={() => {
                setType('all_rounders')
                setPos(1)
              }}>All Rounders</div>
            </div>
          </div>
          <div className="cursor-pointer hover:text-gray-400">Dashboard</div>
          <div className="cursor-pointer hover:text-gray-400">Result</div>
        </nav>

        <div className="absolute top-15 text-lg font-inter left-15 z-10">{stats.id}/100</div>
        <div className="rounded-md font-inter backdrop-blur-md text-center pt-10 flex flex-col justify-center items-center gap-5 h-[100%]">
          <div className="flex items-center gap-10 m-10 roun">
            <div className="p-10 bg-gradient-to-br from-[#181832] to-[#212147] rounded-2xl flex flex-col gap-2 shadow-2xl">
              <img className="min-w-56 object-center bg-[#292A57] object-cover h-[300px] rounded-2xl mb-2" alt="player pic" src={stats.imageLink} />
              <h1 className="text-3xl bg-gradient-to-r from-[#A54203] to-[#9C6B01] bg-clip-text text-transparent  font-bold text-shadow">
                {stats.name ? stats.name : "Player"}
              </h1>
              <p className="text-gray-400">{typeLabel[type]} <span className="font-black">&middot;</span> {stats.association}</p>
            </div>
            {type === "batsmen" && <BatsmenStats stats={stats} />}
            {type === "bowlers" && <BowlerStats stats={stats} />}
            {type === "all_rounders" && <AllRounderStats stats={stats} />}
            <PlayerSelect setTeamId={setTeamId} onSelect={handleSelect} selected={selected} setSelected={setSelected} />
          </div>
          <div className="w-screen">
            <div className="absolute bottom-1 flex w-[100%] ml-10 px-5 justify-between mb-3">
              <button
                className="bg-[#DE701A] px-8 py-2 rounded-full hover:bg-[#DE701A]/80 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setPos(p => Math.max(1, p - 1))
                  setSelected(null)
                }}
              >
                &larr; Prev
              </button>
              <div className="font-inter font-bold text-5xl flex justify-center items-center gap-5 flex-col">
                <div className="">₹{formatToCrores(price)}</div>
              </div>
              <button
                className="bg-[#DE701A] px-8 py-2 rounded-full hover:bg-[#DE701A]/80 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setPos(p => p + 1)
                  setSelected(null)
                }}
              >
                Next &rarr;
              </button>
            </div>
            <div className="absolute z-10 top-0 right-[-20px] group">
              <button className="bg-[#2B2C5C] px-3 py-2 rounded-md m-3 hover:bg-[#2B2C5C]/80 transition-all duration-300 cursor-pointer" onClick={() => { setPos(Number(go)) }}> {/* Fixed: ensure go is converted to number */}
                Go
              </button>
              <input className="bg-[#2B2C5C] w-14 outline-none hidden group-hover:inline absolute top-13 left-0  text-white ml-3 text-sm h-8 p-3" placeholder="Pos" value={go} onChange={(e) => setGo(Number(e.target.value) || 1)} type="number" /> {/* Fixed: handle invalid input */}
            </div>

          </div>
        </div>

        <input type="number" className="outline-none w-30 bg-[#2B2C5C] text-lg h-8 absolute bottom-0 right-0" value={price} onChange={(e) => setPrice(Number(e.target.value) || 0)} /> {/* Fixed: handle invalid input */}
      </div>
    </>
  )
}

export default App
