import { useState, useEffect } from "react"
import axios from "axios"
import PlayerSelect from "./PlayerSelect"
import Stats from "./Stats"

function App() {
  const [pos, setPos] = useState(1)
  const [go, setGo] = useState(1)
  const [stats, setStats] = useState({})
  const [purchase, setPurchase] = useState(null)
  const [selected, setSelected] = useState(purchase?.team_name || null);

  useEffect(() => {
    axios.get(`http://localhost:8080/batsmen/${pos}`)
      .then((res) => {
        setStats(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [pos])

  useEffect(() => {


    axios.post("http://localhost:8080/purchase", purchase)
      .then((res) => {
        console.log(res)
      })
  }, [purchase])
  const handleSelect = (team) => {
    console.log(team)
    setPurchase({
      "p_id": pos,
      "p_name": stats.name,
      "team_id": pos,
      "team_name": team
    })


  };
  return (
    <>
      <div className="p-10 h-screen bg-gradient-to-br from-[#0D0C1C] to-[#131931] text-white relative">
        <div className="absolute top-15 text-lg font-inter left-15 z-10">{stats.id}/100</div>
        <div className="rounded-md font-inter backdrop-blur-md text-center pt-10 flex flex-col justify-center items-center gap-5 h-[100%]">
          <div className="flex items-center gap-10 m-10 roun">
            <div className="p-10 bg-gradient-to-br from-[#181832] to-[#212147] rounded-2xl flex flex-col gap-2 shadow-2xl">
              <img className="object-center bg-[#292A57] object-cover h-[300px] rounded-2xl mb-2" alt="player pic" src={stats.imageLink} />
              <h1 className="text-3xl bg-gradient-to-r from-[#A54203] to-[#9C6B01] bg-clip-text text-transparent  font-bold text-shadow">
                {stats.name ? stats.name : "Player"}
              </h1>
              <p className="text-gray-400">Batsman <span className="font-black">&middot;</span> {stats.association}</p>
            </div>
            <Stats stats={stats} />
            <PlayerSelect onSelect={handleSelect} selected={selected} setSelected={setSelected} />
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
              <div className="font-inter font-bold text-5xl flex justify-center items-center gap-5">
                <div className="">₹{stats.price}</div>
              </div>
              <button
                className="bg-[#DE701A] px-8 py-2 rounded-full hover:bg-[#DE701A]/80 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setPos(p => Number(pos) + 1)
                  setSelected(null)
                }}
              >
                Next &rarr;
              </button>
            </div>
            {/* <div className="relative"> */}
            {/*   <input className="bg-white text-black ml-3 w-20 text-sm h-8 p-3" placeholder="Pos" value={go} onChange={(e) => setGo(e.target.value)} type="number" /> */}
            {/*   <button className="bg-[#DE701A] px-3 py-2 rounded-md m-3 hover:bg-[#DE701A]/80 transition-all duration-300 cursor-pointer" onClick={() => { setPos(go) }}>Go</button> */}
            {/* </div> */}

          </div>
        </div>

      </div>
    </>
  )
}

export default App
