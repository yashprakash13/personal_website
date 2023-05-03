import React, { useEffect } from "react"

const Newsletter = () => {
  useEffect(() => {
    window.location.replace("https://codecast.substack.com/")
  }, [])
  return <div className="flex flex-col justify-center items-center">...</div>
}

export default Newsletter
