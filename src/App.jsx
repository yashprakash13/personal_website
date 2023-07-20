import { useEffect } from "react"
import "./App.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/homepage"
import Newsletter from "./pages/newsletter"

function App() {
  useEffect(() => {
    document.title = "Yash Prakash"
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/newsletter",
          element: <Newsletter />,
        },
      ],
    },
  ])
  return (
    <div className="container mx-auto py-3 h-screen bg-[url(assets/bg-grain.png)] bg-[#ffffff] bg-blend-multiply)]">
      <RouterProvider router={router} />{" "}
    </div>
  )
}

export default App
