import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function Layout() {
  return (
    <div className="animated-bg bg-gradient-to-br min-h-screen w-full from-indigo-50 via-white to-purple-50">
      <Navbar />
      <main className="flex-1 w-full fade-in">
        <Outlet />
      </main>
    </div>
  )
}
