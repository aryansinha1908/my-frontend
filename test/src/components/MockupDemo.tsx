"use client";

import { motion } from "framer-motion";

export default function MockupDemo() {
  return (
    // The background container with a subtle CSS grid pattern
    <section className="relative w-full min-h-screen py-32 flex items-center justify-center overflow-hidden bg-slate-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      {/* Wrapper to handle the slide-up animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-[1000px] mx-4"
      >
        {/* ========================================= */}
        {/* LAYER 1: THE MAIN APP DASHBOARD MOCKUP      */}
        {/* ========================================= */}
        <div className="bg-white w-full rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[650px]">
          {/* Top Navbar of the Mockup */}
          <div className="h-14 border-b border-slate-100 flex items-center justify-between px-4 bg-white shrink-0">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-blue-600 font-bold">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span>MatchMaker</span>
              </div>
              <div className="hidden md:flex items-center gap-4 text-xs font-medium text-slate-500">
                <span className="bg-slate-100 text-slate-800 px-2.5 py-1.5 rounded-md">
                  🚀 Projects
                </span>
                <span className="hover:bg-slate-50 px-2.5 py-1.5 rounded-md cursor-pointer">
                  🏆 Hackathons
                </span>
                <span className="hover:bg-slate-50 px-2.5 py-1.5 rounded-md cursor-pointer">
                  👥 Talent
                </span>
              </div>
            </div>

            {/* Fake Search & Action Button */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-md px-3 py-1.5 text-xs text-slate-400 w-48">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span>Search developers...</span>
              </div>
              <button className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm flex items-center gap-1.5">
                <span>✨ Ask AI</span>
              </button>
            </div>
          </div>

          {/* Main Body of the Mockup (Sidebar + Content) */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-60 border-r border-slate-100 bg-white p-4 hidden md:flex flex-col gap-6 overflow-y-auto shrink-0">
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Getting Started
                </div>
                <div className="text-sm font-medium text-slate-800 bg-slate-100 px-3 py-2 rounded-lg flex items-center gap-2">
                  👋 Welcome to MatchMaker
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Discover
                </div>
                <div className="flex flex-col gap-1 text-sm text-slate-500 font-medium">
                  {[
                    "Open Source",
                    "Upcoming Hackathons",
                    "Research Groups",
                    "Top Developers",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 hover:bg-slate-50 rounded-lg cursor-pointer flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full border border-current opacity-50"></span>{" "}
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-8 bg-white overflow-y-auto">
              <div className="text-xs font-medium text-slate-400 mb-2">
                Dashboard / Welcome
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Find your next project
              </h1>
              <p className="text-slate-500 text-sm mb-8">
                Connect with top developers and build something amazing this
                weekend.
              </p>

              {/* Fake Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="border border-slate-200 rounded-xl p-5 hover:border-blue-400 transition-colors cursor-pointer shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    🚀
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">
                    Post a Project
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Looking for a frontend dev for a Web3 hackathon? Create a
                    listing here.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-5 hover:border-purple-400 transition-colors cursor-pointer shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                    🔍
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">
                    Browse Hackathons
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Join active teams looking for your specific skill set right
                    now.
                  </p>
                </div>
              </div>

              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Recent Matches
              </h2>
              <div className="space-y-3">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-3 border border-slate-100 rounded-lg"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-slate-800 bg-slate-200 w-24 h-4 rounded mb-1.5"></div>
                      <div className="text-xs text-slate-400 bg-slate-100 w-48 h-3 rounded"></div>
                    </div>
                    <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      Matched
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* LAYER 2: THE FLOATING AI ASSISTANT OVERLAP*/}
        {/* ========================================= */}
        {/* Absolute positioning breaks it out of the normal document flow and lets it overlap the parent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }} // Delays slightly after the main window appears
          className="hidden lg:flex absolute -right-16 -bottom-12 w-80 bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 flex-col z-20 overflow-hidden"
        >
          {/* Assistant Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-white">
            <div className="flex items-center gap-2">
              <span className="text-lg">✨</span>
              <span className="text-sm font-bold text-slate-800">Match AI</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              {/* Fake Window Controls */}
              <svg
                className="w-4 h-4 hover:text-slate-600 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 flex flex-col gap-4 bg-slate-50/50 min-h-[250px]">
            {/* User Message */}
            <div className="self-end bg-slate-100 text-slate-700 text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
              I need a UI/UX designer for my ETHGlobal hackathon team.
            </div>

            {/* Bot Message */}
            <div className="self-start bg-white border border-slate-100 text-slate-700 text-sm px-4 py-3 rounded-2xl rounded-tl-sm max-w-[95%] shadow-sm leading-relaxed">
              I found 3 designers looking for a team for ETHGlobal!
              <br />
              <br />
              Check out{" "}
              <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                Alex's Profile
              </span>{" "}
              – they specialize in Web3 interfaces.
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="flex items-center bg-slate-50 border border-slate-200 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Ask anything..."
                className="flex-1 bg-transparent text-sm outline-none text-slate-700 placeholder-slate-400"
                readOnly
              />
              <div className="text-slate-400 hover:text-blue-600 cursor-pointer">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
