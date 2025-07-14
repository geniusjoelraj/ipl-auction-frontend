export default function Stats() {
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


}
