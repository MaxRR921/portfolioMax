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
    <div className="h-screen flex lg:justify-center justify-start">
      <div className="flex lg:w-5/12 items-start h-12">
        <div className="mx-5">
          <div className="bg-gray-400 bg-opacity-20 dark:bg-gray-500 dark:bg-opacity-20 px-6 py-4 rounded-md">
            <h1 className="collidable text-4xl">Maxwell Richter</h1>

            <div className="font-bold flex justify-start mt-2">
              <div>Computer Science @ Chapman University, Class of 2026</div>
            </div>

            <div className="flex justify-start mt-4 gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className="group inline-flex items-center gap-2 text-inherit
                            transition-transform duration-300 hover:scale-[1.06]
                            hover:text-stone-900 dark:hover:text-gray-100
                            px-2 py-1 rounded-md hover:bg-stone-700/40"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="font-medium">{label}</span>
                  <ArrowUpRight
                    className="h-4 w-4 opacity-0 -translate-y-0.5 -translate-x-1
                              transition-all duration-300 ease-out
                              group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-0"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gray-400 bg-opacity-20 dark:bg-gray-500 dark:bg-opacity-20 px-6 py-4 rounded-md mt-6">
            <HomeBody />
          </div>

          <div className="bg-gray-400 bg-opacity-20 dark:bg-gray-500 dark:bg-opacity-20 px-6 py-4 rounded-md mt-6">
            <TechnicalSkills />
          </div>
        </div>
      </div>
    </div>
  );
}
