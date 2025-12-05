"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SimplifiArchitecture from "./svg/SimplifiArchitecture";
import RunRunArchitecture from "./svg/RunRunArchitecture";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  sections: {
    title: string;
    color: string;
    items: string[];
  }[];
  achievementsTitle: string;
  achievements: string[];
  architectureTitle: string;
  architectureSvg?: string;
  architectureImg?: string;
  showArchitecture?: boolean;
};

export default function ProjectsSection() {
  const [projectsData, setProjectsData] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjectsData(data.experience));
  }, []);

  return (
    <section className="py-8 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          Delivered Solutions & Projects
        </motion.h2>

        <div className="space-y-16">
          {projectsData.map((project: Project, idx: number) => {
            let ArchitectureComponent: React.FC | null = null;

            if (project.architectureSvg) {
              switch (project.architectureSvg) {
                case "SimplifiArchitecture":
                  ArchitectureComponent = SimplifiArchitecture;
                  break;
                case "RunRunArchitecture":
                  ArchitectureComponent = RunRunArchitecture;
                  break;
                default:
                  ArchitectureComponent = null;
              }
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
              >
                <div className="p-8">
                  <div
                    className={`grid gap-8 ${
                      project.showArchitecture !== false &&
                      (project.architectureSvg || project.architectureImg)
                        ? "grid-cols-1 lg:grid-cols-2"
                        : "grid-cols-1"
                    }`}
                  >
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-400">{project.description}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.sections.map((section, sidx) => (
                          <div key={sidx}>
                            <h4
                              className={`text-sm font-semibold ${section.color} mb-3`}
                            >
                              {section.title}
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                              {section.items.map((item, iidx) => (
                                <li key={iidx}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    {project.showArchitecture !== false &&
                      (project.architectureSvg || project.architectureImg) && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-4">
                            {project.architectureTitle}
                          </h4>
                          <div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
                            {/* You can render SVG or image here using project.architectureSvg or project.architectureImg */}
                            {project.architectureSvg &&
                              ArchitectureComponent && (
                                <ArchitectureComponent />
                              )}
                            {project.architectureImg && (
                              <Image
                                src={project.architectureImg}
                                alt="System Architecture"
                                className="w-full h-full object-contain"
                              />
                            )}
                          </div>
                        </div>
                      )}
                  </div>
                  <div className="space-y-3 mt-2">
                    <h4 className="text-sm font-semibold text-teal-400">
                      {project.achievementsTitle}
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      {project.achievements.map((ach, aidx) => (
                        <li key={aidx}>• {ach}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
