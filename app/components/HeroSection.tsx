"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [selectedStack, setSelectedStack] = useState<
    "frontend" | "backend" | "devops" | null
  >(null);
  const [skillsData, setSkillsData] = useState<[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setSkillsData(data.skills));
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden py-20 lg:py-0">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-24 md:pt-32 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16 max-w-5xl mx-auto"
        >
          <div className="space-y-6 md:space-y-8 mb-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 animate-gradient-x">
                Sabin Chacko
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-100 tracking-wide">
              Senior Full Stack Engineer & Solutions Architect
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Designing scalable enterprise ecosystems and robust API
              integrations. Expert in delivering end-to-end solutions across{" "}
              <span className="text-gray-100 font-medium">Laravel</span>,{" "}
              <span className="text-gray-100 font-medium">AWS/Azure</span>, and{" "}
              <span className="text-gray-100 font-medium">Docker</span> environments.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-base md:text-lg text-gray-400">
              <span className="md:hidden w-full mb-2 text-sm uppercase tracking-widest text-gray-600 font-semibold">
                Previous Experience
              </span>
              <span>
                Ex-Tech Lead at{" "}
                <span className="text-blue-400 font-medium">DeliveryZone</span>
              </span>
              <span className="hidden md:inline text-gray-600">•</span>
              <span>
                Ex-Lead Web Dev at{" "}
                <span className="text-purple-400 font-medium">
                  Ducon Industries
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
            {skillsData.map((skill: { name: string }) => {
              let colorClasses = "bg-gray-800 text-gray-300 border-gray-700";
              if (/php|laravel|sql|rest api/i.test(skill.name)) {
                colorClasses =
                  "bg-teal-500/10 text-teal-300 border-teal-500/20 shadow-[0_0_10px_rgba(20,184,166,0.1)]";
              } else if (/react|next\.js|javascript/i.test(skill.name)) {
                colorClasses =
                  "bg-purple-500/10 text-purple-300 border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.1)]";
              } else {
                colorClasses =
                  "bg-blue-500/10 text-blue-300 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]";
              }
              return (
                <span
                  key={skill.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${colorClasses} transition-all hover:scale-105`}
                >
                  {skill.name}
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* Interactive Architecture Cards */}
        <div className="w-full max-w-7xl mx-auto relative px-2 md:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-gray-950/60 backdrop-blur-xl rounded-2xl border border-gray-800/50 p-6 md:p-8 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Frontend Card */}
              <div
                className={`group p-6 rounded-xl transition-all duration-300 border ${selectedStack === "frontend"
                  ? "bg-blue-950/30 border-blue-500/50 shadow-lg shadow-blue-500/10 transform -translate-y-1"
                  : "bg-gray-900/40 border-gray-800 hover:border-gray-700 hover:bg-gray-900/60"
                  }`}
                onMouseEnter={() => setSelectedStack("frontend")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                  Architecture & Design
                </h3>
                <ul className="space-y-3 text-sm text-gray-400 group-hover:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>Enterprise Systems Integration (SAP/Salesforce)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>Robust API Design (REST & SOAP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>High-Performance Database Architectures</span>
                  </li>
                </ul>
              </div>

              {/* Backend Card */}
              <div
                className={`group p-6 rounded-xl transition-all duration-300 border ${selectedStack === "backend"
                  ? "bg-purple-950/30 border-purple-500/50 shadow-lg shadow-purple-500/10 transform -translate-y-1"
                  : "bg-gray-900/40 border-gray-800 hover:border-gray-700 hover:bg-gray-900/60"
                  }`}
                onMouseEnter={() => setSelectedStack("backend")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400 group-hover:text-purple-300 transition-colors">
                  Full-Stack Leadership
                </h3>
                <ul className="space-y-3 text-sm text-gray-400 group-hover:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                    <span>PHP/Laravel Backends & Real-Time Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                    <span>Modern Frontend Architecture (React & Next.js)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                    <span>End-to-End Workflow Ownership</span>
                  </li>
                </ul>
              </div>

              {/* DevOps Card */}
              <div
                className={`group p-6 rounded-xl transition-all duration-300 border ${selectedStack === "devops"
                  ? "bg-teal-950/30 border-teal-500/50 shadow-lg shadow-teal-500/10 transform -translate-y-1"
                  : "bg-gray-900/40 border-gray-800 hover:border-gray-700 hover:bg-gray-900/60"
                  }`}
                onMouseEnter={() => setSelectedStack("devops")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-xl font-bold mb-4 text-teal-400 group-hover:text-teal-300 transition-colors">
                  Cloud & Scalability
                </h3>
                <ul className="space-y-3 text-sm text-gray-400 group-hover:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>Scalable Cloud Infrastructure (AWS & Azure)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>CI/CD Automation & Docker Deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>Performance Optimization & Security</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
