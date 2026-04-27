import Image from "next/image";
import HomeBody from "./homeBody.mdx";
import TechnicalSkills from "./technicalSkills.mdx";

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
            <h1 className="collidable max-w-xl text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              Maxwell Richter
            </h1>
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
