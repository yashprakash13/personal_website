import React from "react"

const LinkSingle = ({ text }) => {
  return (
    <div className="z-20 group  px-2 py-1 md:px-3 md:py-2 lg:px-5 lg:py-2 font-sans flex justify-between items-center gap-4 bg-white border-2 border-black opacity-30 hover:bg-transparent hover:border-white hover:opacity-90 transition-all duration-1000">
      <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-black group-hover:bg-transparent transition-all duration-1000"></div>
      <div className="text-xs md:text-sm lg:text-lg group-hover:scale-125 transition-all duration-1000">
        {text}
      </div>
      <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-black group-hover:bg-transparent transition-all duration-[700ms]"></div>
    </div>
  )
}

export default LinkSingle
