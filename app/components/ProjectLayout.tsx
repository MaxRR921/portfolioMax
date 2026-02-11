import { ReactNode } from "react";

type ProjectLayoutProps = {
  title: ReactNode;
  children: ReactNode;
  media?: ReactNode;
};

export default function ProjectLayout({ title, children, media }: ProjectLayoutProps) {
  return (
    <article className="page-stack">
      <section className="surface-card">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          {title}
        </h1>
      </section>

      <section className="surface-card content-block">{children}</section>

      {media ? <section className="surface-card">{media}</section> : null}
    </article>
  );
}
