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
    <div className="page-stack">
      <section className="surface-card">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:h-40 sm:w-40">
            <Image
              src="/mrichter_photo.jpeg"
              alt="Headshot of Maxwell Richter"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 640px) 9rem, 10rem"
            />
          </div>
          <div>
            <h1 className="collidable text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              Maxwell Richter
            </h1>
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
          </div>
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
