import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    href: "/projects/stressSensor",
    title: "Fiber Optic Stress Sensor",
    description:
      "Real-time Python software and hardware integration for a fiber optic sensing research platform.",
  },
  {
    href: "/projects/RopedTogether",
    title: "Roped Together",
    description:
      "3D mountain-climbing game that won the Judge's Choice Award at the Oregon Game Project Challenge 2023.",
  },
  {
    href: "/projects/RopeSim",
    title: "3D Rope Simulation",
    description:
      "Constraint-based rope simulation system built in Unity and C#.",
  },
  {
    href: "/projects/LayerJot",
    title: "AI Hand Washing Tool",
    description:
      "AI handwashing coaching tool built with OpenCV and PyTorch; First Place at the 2024 Fowler Engineering GCI Showcase.",
  },
  {
    href: "/projects/Dance",
    title: "Dance Performance 3D Procedural System",
    description:
      "Procedural camera movement, lighting, and animation workflow for performance production.",
  },
  {
    href: "/projects/HarmonicSeries",
    title: "Harmonic Series Teacher Website",
    description:
      "Educational music website focused on teaching harmonic series concepts.",
  },
];

export default function Page() {
  return (
    <div className="page-stack">
      <section className="surface-card">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Projects
        </h1>
      </section>

      <section className="grid gap-4">
        {projects.map((project) => (
          <Link key={project.href} href={project.href} className="project-card group">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {project.title}
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
            </div>
            <ArrowRight
              size={18}
              className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-700 dark:group-hover:text-slate-200"
            />
          </Link>
        ))}
      </section>
    </div>
  );
}
