import { useState, useEffect } from "react"
import axios from "axios"
import PlayerSelect from "./PlayerSelect"

function App() {
  const [pos, setPos] = useState(1)
  const [go, setGo] = useState(1)
  const [stats, setStats] = useState({})
  const [purchase, setPurchase] = useState(null)
  const [selected, setSelected] = useState(purchase?.team_name || null);

  useEffect(() => {
    axios.get(`http://localhost:6969/batsmenJSON/${pos}`)
      .then((res) => {
        setStats(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [pos])

  useEffect(() => {


    axios.post("http://localhost:6969/purchase", purchase)
      .then((res) => {
        console.log(res)
      })
  }, [purchase])
  const handleSelect = (team) => {
    console.log(team)
    setPurchase({
      "p_id": pos,
      "p_name": stats.player,
      "team_id": pos,
      "team_name": team
    })


  };
  return (
    <>
      <div className="p-10 h-screen bg-[#77BEF0]">
        <div className="rounded-md bg-secondary font-inter backdrop-blur-md text-center pt-10 flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl font-bold text-shadow">
            {stats.player ? stats.player : "Player"}({pos})
          </h1>
          <div className="flex items-center gap-10">
            <img className="" alt="player pic" src="https://placehold.co/200x250/png" />
            <PlayerSelect onSelect={handleSelect} selected={selected} setSelected={setSelected} />
          </div>
          <div className="absolute bottom-1 flex w-[97%] justify-between mb-3">
            <button
              className="bg-red px-3 py-2 rounded-md hover:bg-red/80 transition-all duration-300 cursor-pointer"
              onClick={() => setPos(p => Math.max(1, p - 1))}
            >
              Prev
            </button>
            <button
              className="bg-red px-3 py-2 rounded-md hover:bg-red/80 transition-all hover:/80 duration-300 cursor-pointer"
              onClick={() => setPos(p => Number(pos) + 1)}
            >
              Next
            </button>
          </div>
          <div className="z-10 relative">
            <input className="bg-white text-black ml-3 w-20 text-sm h-8 p-3" placeholder="Pos" value={go} onChange={(e) => setGo(e.target.value)} type="number" />
            <button className="bg-red px-3 py-2 rounded-md m-3 hover:bg-red/80 transition-all duration-300 cursor-pointer" onClick={() => { setPos(go) }}>Go</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
