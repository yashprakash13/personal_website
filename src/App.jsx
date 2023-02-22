import { useEffect } from "react"
import "./App.css"

function App() {
  useEffect(() => {
    document.title = "Yash Prakash"
  }, [])

  return (
    <div className="App ">
      <div className="flex flex-col gap-10 mx-5 md:mx-auto my-5 items-center">
        <div className="flex gap-5 items-center text-lg font-bitter">
          <a
            className="underline"
            target="_blank"
            href="https://twitter.com/csandyash"
          >
            Twitter
          </a>
          <a
            className="underline"
            target="_blank"
            href="https://linkedin.com/in/yashprakash13"
          >
            LinkedIn
          </a>
          <a
            className="underline"
            target="_blank"
            href="https://ipom.medium.com"
          >
            Medium
          </a>
          <a
            className="underline"
            target="_blank"
            href="https://codecast.substack.com"
          >
            Newsletter
          </a>
        </div>
        <div className="font-bold text-7xl font-alegreya">Yash Prakash</div>
        <div className="text-xl font-bitter">
          This website is under contruction. Updates are being tracked on my
          blog.
        </div>
      </div>
    </div>
  )
}

export default App
