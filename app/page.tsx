import Link from "next/link";
import Image from "next/image";
import HomeBody from "./homeBody.mdx";
import TechnicalSkills from "./technicalSkills.mdx";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

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
              <p className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-900/60 dark:bg-sky-950/50 dark:text-sky-300">
                Software Developer
              </p>
              <h1 className="collidable max-w-xl text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
                Maxwell Richter
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                I build software for research, interactive systems, and creative
                technology, with a focus on real-time experiences and thoughtful
                product work.
              </p>
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

      <section className="surface-card content-block">
        <p className="mb-5 max-w-2xl text-sm font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          About
        </p>
        <HomeBody />
      </section>

      <section className="surface-card content-block">
        <h2 className="section-title">Technical Skills</h2>
        <TechnicalSkills />
      </section>
    </div>
  );
}
