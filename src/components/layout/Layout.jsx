import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-[var(--background)]">
      <Navbar />
      <main className="flex-1 w-full fade-in">
        <Outlet />
      </main>
    </div>
  )
}
