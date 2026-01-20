import { Link } from "react-router-dom"

export default function Navbar() {
  const isLoggedIn = false

  return (
    <nav className="sticky top-0 z-50 backdrop-blur w-full border-b bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <Link to="/" className="text-xl font-bold text-indigo-600">
          TechLearn
        </Link>

        <div className="flex items-center gap-4">
          {!isLoggedIn && (
            <Link
              to="/login"
              className="bg-indigo-600 text-white text-sm font-semibold tracking-wide px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
          )}
        </div>

      </div>
    </nav>
  )
}
