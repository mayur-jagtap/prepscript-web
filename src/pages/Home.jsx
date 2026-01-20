import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen w-full px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50 fade-in">
      {/* Blobs */}
      <div className="blob absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full"></div>
      <div className="blob absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full"></div>

      {/* Hero Badge */}
      <span className="mb-4 text-sm font-medium text-indigo-600 bg-indigo-100 px-4 py-1 rounded-full">
        Free & Open Learning Platform
      </span>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-3xl leading-tight">
        Learn Technical Concepts
        <span className="text-indigo-600"> Step by Step</span>
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-gray-600 max-w-2xl text-lg">
        Explore interview questions, detailed explanations, and structured
        roadmaps — all for free. Track your progress when you’re ready.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          to="/categories"
          className="bg-indigo-600 text-white text-sm font-semibold tracking-wide px-6 py-3 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105"
        >
          Start Learning for Free
        </Link>

        <Link
          to="/login"
          className="border border-indigo-600 text-indigo-600 text-sm font-semibold tracking-wide px-6 py-3 rounded-lg hover:bg-indigo-50 transition"
        >
          Get Started
        </Link>
      </div>

      {/* Footer Text */}
      <p className="mt-10 text-xs text-gray-500">
        No sign-up required to explore content
      </p>
    </div>
  );
}
