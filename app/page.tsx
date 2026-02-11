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
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Computer Science @ Chapman University
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <Link key={label} href={href} className="pill-link" target="_blank">
              <Icon size={16} />
              <span>{label}</span>
              <ArrowUpRight size={14} />
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
