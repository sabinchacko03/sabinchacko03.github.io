"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Skill = { name: string; category?: "integration" | "stack" | "cloud" };

export default function HeroSection() {
  const [selectedStack, setSelectedStack] = useState<
    "frontend" | "backend" | "devops" | null
  >(null);
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

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

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-12 md:pt-32">
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
            <h2 className="text-xl md:text-4xl font-bold text-white">
              Lead Software Engineer | Solutions Architect | Enterprise Systems
              Integration
            </h2>
            <p className="text-normal md:text-xl text-gray-400 max-w-2xl mx-auto">
              13+ years designing and scaling high-availability enterprise
              platforms across the UAE. Expert in bi-directional integration
              hubs (SAP, Salesforce), resilient NestJS API gateways (idempotent
              ingestion, transactional outbox, queue-backed retry) and
              cloud-native delivery on Azure/AWS.
            </p>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
              Currently Lead Software Engineer at{" "}
              <span className="text-teal-400">
                Ittihad International Investment
              </span>
              . Previously Tech Lead at{" "}
              <span className="text-blue-400">Delivery Zone</span> and Lead Web
              Developer at{" "}
              <span className="text-purple-400">Ducon Industries</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-6 md:mb-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-400">
                13+
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-purple-400">
                AED 550K+
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                Saved Annually (2.7 FTEs)
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-teal-400">
                100%
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                Audit Compliance
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
            {skillsData.map((skill) => {
              let colorClass = "bg-blue-500/10 text-blue-400";
              if (skill.category === "stack") {
                colorClass = "bg-purple-500/10 text-purple-400";
              } else if (skill.category === "cloud") {
                colorClass = "bg-teal-500/10 text-teal-400";
              }
              return (
                <span
                  key={skill.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${colorClass} transition-all hover:scale-105`}
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
                className={`group p-6 rounded-xl transition-all duration-300 border ${
                  selectedStack === "frontend"
                    ? "bg-blue-950/30 border-blue-500/50 shadow-lg shadow-blue-500/10 transform -translate-y-1"
                    : "bg-gray-900/40 border-gray-800 hover:border-gray-700 hover:bg-gray-900/60"
                }`}
                onMouseEnter={() => setSelectedStack("frontend")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                  Architecture & Design
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    {/* <div className="w-3 h-2 bg-blue-500 rounded-full" /> */}
                    - Bi-Directional Integration Hubs (SAP ↔ Salesforce)
                  </li>
                  <li className="flex items-center gap-2">
                    {/* <div className="w-3 h-2 bg-blue-500 rounded-full" /> */}
                    - Resilient NestJS API Gateways (idempotent ingestion,
                    transactional outbox, dead-letter retry)
                  </li>
                  <li className="flex items-center gap-2">
                    {/* <div className="w-3 h-2 bg-blue-500 rounded-full" /> */}
                    - Contract-First API Design (OpenAPI, REST & SOAP)
                  </li>
                </ul>
              </div>

              {/* Backend Card */}
              <div
                className={`group p-6 rounded-xl transition-all duration-300 border ${
                  selectedStack === "backend"
                    ? "bg-purple-950/30 border-purple-500/50 shadow-lg shadow-purple-500/10 transform -translate-y-1"
                    : "bg-gray-900/40 border-gray-800 hover:border-gray-700 hover:bg-gray-900/60"
                }`}
                onMouseEnter={() => setSelectedStack("backend")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400 group-hover:text-purple-300 transition-colors">
                  Full-Stack Leadership
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    {/* <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> */}
                    - Leading PHP/Laravel & NestJS/TypeScript Backends
                  </li>
                  <li className="flex items-center gap-2">
                    {/* <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> */}
                    - Modern Frontend Architectures (React, React Native)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                    <span>End-to-End Workflow Ownership</span>
                  </li>
                </ul>
              </div>

              {/* DevOps Card */}
              <div
                className={`group p-6 rounded-xl transition-all duration-300 border ${
                  selectedStack === "devops"
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
                  <li className="flex items-center gap-2">
                    {/* <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" /> */}
                    - High-Availability Design with Observability (Logging,
                    Correlation IDs, Alerting)
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
