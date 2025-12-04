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
    <section className="min-h-screen relative overflow-hidden py-24 md:py-0">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
              Sabin Chacko
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Senior Full Stack Engineer | Solutions Architect | Enterprise
              Integration Lead
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              12+ years specializing in designing and scaling robust web
              applications. I architect complex API Integrations (SAP,
              Salesforce) and lead end-to-end delivery across the Laravel,
              AWS/Azure, and Docker stack.
            </p>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
              Previously Tech Lead at{" "}
              <span className="text-blue-400">DeliveryZone</span> and Lead Web
              Developer at{" "}
              <span className="text-purple-400">Ducon Industries</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
            {skillsData.map((skill: { name: string }) => {
              // Map skill names to color classes
              let colorClass = "bg-blue-500/10 text-blue-400";
              if (/php|laravel|sql|rest api/i.test(skill.name)) {
                colorClass = "bg-teal-500/10 text-teal-400";
              } else if (/react|next\.js|javascript/i.test(skill.name)) {
                colorClass = "bg-purple-500/10 text-purple-400";
              }
              return (
                <span
                  key={skill.name}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm ${colorClass}`}
                >
                  {skill.name}
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* Interactive System Architecture */}
        <div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {/* Frontend Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === "frontend"
                    ? "bg-blue-500/20 border-blue-500/50"
                    : "bg-gray-800/50 hover:bg-gray-800/80 border-transparent"
                }`}
                onMouseEnter={() => setSelectedStack("frontend")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">
                  Solution Architecture & Design
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    {/* <div className="w-3 h-2 bg-blue-500 rounded-full" /> */}
                    - Enterprise Systems Integration (SAP/Salesforce)
                  </li>
                  <li className="flex items-center gap-2">
                    {/* <div className="w-3 h-2 bg-blue-500 rounded-full" /> */}
                    - Robust API Design (REST & SOAP Services)
                  </li>
                  <li className="flex items-center gap-2">
                    {/* <div className="w-3 h-2 bg-blue-500 rounded-full" /> */}
                    - High-Performance Database Architecture (MS SQL, SAP HANA)
                  </li>
                </ul>
              </div>

              {/* Backend Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === "backend"
                    ? "bg-purple-500/20 border-purple-500/50"
                    : "bg-gray-800/50 hover:bg-gray-800/80 border-transparent"
                }`}
                onMouseEnter={() => setSelectedStack("backend")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">
                  Full-Stack Application Leadership
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    {/* <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> */}
                    - Leading PHP/Laravel Backends & Real-Time Systems
                  </li>
                  <li className="flex items-center gap-2">
                    {/* <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> */}
                    - Modern Frontend Architectures (React & Vue)
                  </li>
                  <li className="flex items-center gap-2">
                    {/* <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> */}
                    - End-to-End Workflow & Delivery Ownership
                  </li>
                </ul>
              </div>

              {/* DevOps Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === "devops"
                    ? "bg-teal-500/20 border-teal-500/50"
                    : "bg-gray-800/50 hover:bg-gray-800/80 border-transparent"
                }`}
                onMouseEnter={() => setSelectedStack("devops")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">
                  Cloud Strategy & Scalability
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    {/* <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" /> */}
                    Architecting Scalable Cloud Infrastructure (AWS & Azure)
                  </li>
                  <li className="flex items-center gap-2">
                    {/* <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" /> */}
                    CI/CD Automation & Docker Deployment
                  </li>
                  <li className="flex items-center gap-2">
                    {/* <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" /> */}
                    Performance Optimization & Infrastructure Management
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
