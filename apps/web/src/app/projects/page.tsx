import type { Metadata } from "next";
import React from "react";

import { projects } from "@/config";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Meus Projetos",
};

export default function Projects() {
  return (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projetos</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div className="flex flex-col">
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group hover:opacity-80 transition-opacity duration-200"
            >
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {project.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {project.year}
                </span>
              </div>{" "}
            </a>
            <p className="prose prose-neutral dark:prose-invert pt-3">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
