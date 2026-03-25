import Link from "next/link";
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
    <div className="page-stack">
      <section className="surface-card">
        <h1 className="collidable text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Maxwell Richter
        </h1>
        <p className="mt-2 font-bold text-slate-700 dark:text-slate-200">
          Computer Science @ Chapman University, Class of 2026
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
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
      </section>

      <section className="surface-card content-block">
        <HomeBody />
      </section>

      <section className="surface-card content-block">
        <h2 className="section-title">Technical Skills</h2>
        <TechnicalSkills />
      </section>
    </div>
  );
}
