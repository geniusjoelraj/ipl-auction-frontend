export default function BatsmenStats({ stats }) {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-br from-[#181832] to-[#212147] p-10 rounded-2xl shadow-2xl text-nowrap">
        <p className="text-3xl font-bold text-[#fcd814]">Career Stats</p>
        <div className="text-3xl grid grid-cols-2 p-5 gap-5">
          <div className="bg-[#2B2C5C] p-3 rounded-md shadow-2xl">
            <div className="rounded-md px-3 pb-0 py-2 font-black bg-gradient-to-r from-[#A54203] to-[#9A7B01] bg-clip-text text-transparent">{stats.battingAvg}<br /><span className="text-xs font-medium text-gray-400">AVERAGE</span></div>
          </div>
          <div className="bg-[#2B2C5C] p-3 rounded-md shadow-2xl">
            <div className="rounded-md px-3 pb-0 py-2 font-black bg-gradient-to-r from-[#A54203] to-[#9A7B01] bg-clip-text text-transparent">{stats.matches}<br /><span className="text-xs font-medium text-gray-400">MATCHES</span></div>
          </div>
          <div className="bg-[#2B2C5C] p-3 rounded-md shadow-2xl">
            <div className="rounded-md px-3 pb-0 py-2 font-black bg-gradient-to-r from-[#A54203] to-[#9A7B01] bg-clip-text text-transparent">{stats.runs}<br /><span className="text-xs font-medium text-gray-400">RUNS</span></div>
          </div>
          <div className="bg-[#2B2C5C] p-3 rounded-md shadow-2xl">
            <div className="rounded-md px-3 pb-0 py-2 font-black bg-gradient-to-r from-[#A54203] to-[#9A7B01] bg-clip-text text-transparent">{stats.strikeRate}<br /><span className="text-xs font-medium text-gray-400">STRIKE RATE</span></div>
          </div>
        </div>
      </div>
    </>
  )
}
