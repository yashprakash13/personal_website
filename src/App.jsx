import { useEffect } from "react"
import "./App.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/homepage"
import Newsletter from "./pages/Newsletter"

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
    <>
      <RouterProvider router={router} />{" "}
    </>
  )
}

export default App
