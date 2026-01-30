import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#0b0b10] text-white">
      <div className="fade-in">
        <span className="mb-4 inline-block text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
          Free & Open Learning Platform
        </span>

        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
          Learn Technical Concepts{" "}
          <span className="text-indigo-400">Step by Step</span>
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl text-lg">
          Explore interview questions, detailed explanations, and structured
          roadmaps — all for free. Track your progress when you’re ready.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/learning"
            className="btn-primary text-white text-sm font-medium px-6 py-3 rounded-lg"
          >
            Start Learning for Free
          </Link>

          <Link
            to="/login"
            className="btn-secondary text-sm font-medium px-6 py-3 rounded-lg"
          >
            Get Started
          </Link>
        </div>

        <p className="mt-10 text-xs text-gray-500">
          No sign-up required to explore content
        </p>
      </div>
    </section>
  );
}
