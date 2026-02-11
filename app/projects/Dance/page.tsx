import Body from "./Body.mdx";
import Title from "./Title.mdx";
import ProjectLayout from "../../components/ProjectLayout";

export default function Page() {
  return (
    <ProjectLayout
      title={<Title />}
      media={
        <div className="grid gap-4">
          <iframe
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/odOtYnR6Ro4"
            title="Dance performance clip 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800"
          />
          <iframe
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/WUwyAt25tLQ"
            title="Dance performance clip 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800"
          />
        </div>
      }
    >
      <Body />
    </ProjectLayout>
  );
}
