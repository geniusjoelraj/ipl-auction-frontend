import { useState } from "react"

export default function Dashboard() {
  const [budget, setBudget] = useState(1000000000)
  return (
    <>
      <div className="bg-[#0E0F20] h-screen w-lvw relative">
        <div className="flex flex-row w-full p-10 gap-10 absolute bottom-0 left-0 h-max">
          <div className="bg-amber-500 flex-1/10" ></div> <div className="bg-amber-500 flex-1/10 h-20"></div>
          <div className="bg-amber-500 flex-1/10 h-20"></div>
          <div className="bg-amber-500 flex-1/10 h-20"></div>
          <div className="bg-amber-500 flex-1/10 h-20"></div>
          <div className="bg-amber-500 flex-1/10 h-20"></div>
          <div className="bg-amber-500 flex-1/10 h-20"></div>
          <div className="bg-amber-500 flex-1/10 h-20"></div>
          <div className="bg-amber-500 flex-1/10 h-20"></div>
          <div className="bg-amber-500 flex-1/10 h-20"></div>

        </div>

      </div>


    </>
  )
}
