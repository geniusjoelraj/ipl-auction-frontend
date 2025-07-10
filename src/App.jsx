import { useState, useEffect } from "react"

function App() {
  const [name, setName] = useState(null)
  const [pos, setPos] = useState(2)
  const [go, setGo] = useState(1)
  const [stats, setStats] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(`http://localhost:6969/batsmenJSON/${pos}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        setName(data.player)
        setStats(data)
        console.log(data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setError(err.message)
        setLoading(false)
      })
  }, [pos])

  return (
    <>
      <div className="bg-primary min-h-screen text-white font-inter text-center pt-10 flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl font-bold text-shadow">
          {name}({pos})
        </h1>
        <img className="" alt="player pic" src="https://placehold.co/200x250/png" />
        <div className="text-2xl grid grid-cols-5">
          <div className="rounded-md px-3 py-2 font-semibold"><span className="text-sm font-medium">Average</span> <br />{stats.average}</div>
          <div className="rounded-md px-3 py-2 font-semibold"><span className="text-sm font-medium">Centuries</span> <br />{stats.centuries}</div>
          <div className="rounded-md px-3 py-2 font-semibold"><span className="text-sm font-medium">Half Centuries</span> <br />{stats.half_centuries}</div>
          <div className="rounded-md px-3 py-2 font-semibold"><span className="text-sm font-medium">Fours</span> <br />{stats.fours}</div>
          <div className="rounded-md px-3 py-2 font-semibold"><span className="text-sm font-medium">Sixes</span> <br />{stats.sixes}</div>
          <div className="rounded-md px-3 py-2 font-semibold"><span className="text-sm font-medium">BF</span> <br />{stats.bf}</div>
          <div className="rounded-md px-3 py-2 font-semibold"><span className="text-sm font-medium">Mat</span> <br />{stats.mat}</div>
          <div className="rounded-md px-3 py-2 font-semibold"><span className="text-sm font-medium">Not Out</span> <br />{stats.notout}</div>
          <div className="rounded-md px-3 py-2 font-semibold"><span className="text-sm font-medium">Runs</span> <br />{stats.runs}</div>
          <div className="rounded-md px-3 py-2 font-semibold"><span className="text-sm font-medium">SR</span> <br />{stats.sr}</div>
        </div>

        <div>
          <button
            className="bg-secondary px-3 py-2 rounded-md m-3 hover:bg-secondary/80 transition-all hover:text-white/80 duration-300"
            onClick={() => setPos(p => Math.max(1, p - 1))}
            disabled={loading || pos <= 1}
          >
            Prev
          </button>
          <button
            className="bg-secondary px-3 py-2 rounded-md m-3 hover:bg-secondary/80 transition-all hover:text-white/80 duration-300"
            onClick={() => setPos(p => Number(pos) + 1)}
            disabled={loading}
          >
            Next
          </button>
          <input className="bg-white text-black ml-3 w-20 text-sm h-8 p-3" placeholder="Pos" value={go} onChange={(e) => setGo(e.target.value)} type="number" />
          <button className="bg-secondary px-3 py-2 rounded-md m-3 hover:bg-secondary/80 transition-all hover:text-white/80 duration-300" onClick={() => { setPos(go) }}>Go</button>
        </div>
      </div>
    </>
  )
}

export default App
