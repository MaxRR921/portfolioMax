import Link from "next/link";
import Image from "next/image";
import HomeBody from "./homeBody.mdx";
import TechnicalSkills from "./technicalSkills.mdx";
import { ArrowUpRight, Award, Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/maxwell-richter-0b8a671b9/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/MaxRR921",
    label: "GitHub",
    icon: Github,
  },
];

const recentAwards = [
  {
    title: "Best Early Career Researcher Award",
    detail: "Photonics West 2026 for fiber optic stress sensor research.",
    href: "/projects/stressSensor",
  },
  {
    title: "1st Place, Chapman GCI Award",
    detail: "AI hand-washing tool project recognized at the Fowler Engineering showcase.",
    href: "/projects/LayerJot",
  },
  {
    title: "FIRE Summer Research Grant",
    detail: "$7,000 awarded for each of the 2024 and 2025 summers.",
    href: "/projects/stressSensor",
  },
];

export default function Page() {
  return (
    <div className="relative page-stack">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-8 -z-10 h-72 rounded-full bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_65%)] blur-3xl"
      />

      <section className="surface-card overflow-hidden border-slate-200/80 dark:border-slate-800">
        <div className="grid gap-8 md:grid-cols-[auto,1fr] md:items-center">
          <div className="relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.12)] dark:border-slate-700 dark:bg-slate-800 md:mx-0 md:h-48 md:w-48">
            <Image
              src="/mrichter_photo.jpeg"
              alt="Headshot of Maxwell Richter"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 10rem, 12rem"
            />
          </div>

          <div className="space-y-5">
            <div className="space-y-3">
              <h1 className="collidable max-w-xl text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
                Maxwell Richter
              </h1>
              <div className="max-w-2xl">
                <HomeBody />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Link key={label} href={href} className="pill-link group">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{label}</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="surface-card overflow-hidden border-slate-200/80 dark:border-slate-800">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
          <Award className="h-4 w-4 text-amber-600 dark:text-amber-300" aria-hidden="true" />
          Recent awards
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {recentAwards.map((award) => (
            <Link
              key={award.title}
              href={award.href}
              className="group block rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950/40 dark:hover:border-slate-700"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {award.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {award.detail}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="surface-card content-block">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Selected work
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              Projects worth a closer look
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-900 dark:text-slate-300 dark:decoration-slate-600 dark:hover:text-white sm:inline"
          >
            Browse all projects
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/projects/stressSensor" className="project-tile group">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
              Research
            </span>
            <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
              Fiber Optic Stress Sensor
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Award-winning sensing research with real-time software and analysis.
            </p>
          </Link>
          <Link href="/projects/RopedTogether" className="project-tile group">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">
              Game dev
            </span>
            <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
              Roped Together
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Award-winning mountain climbing game.
            </p>
          </Link>
        </div>
      </section>

      <section className="surface-card content-block">
        <h2 className="section-title">Technical Skills</h2>
        <TechnicalSkills />
      </section>
    </div>
  );
}
