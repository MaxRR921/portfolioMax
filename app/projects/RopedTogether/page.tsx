import Body from "./Body.mdx";
import Body2 from "./Body2.mdx";
import Title from "./Title.mdx";
import ProjectLayout from "../../components/ProjectLayout";

export default function Page() {
  return (
    <ProjectLayout
      title={<Title />}
      media={
        <iframe
          width="100%"
          height="420"
          src="https://www.youtube.com/embed/cZ8O7uAnTFI"
          title="Roped Together video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full rounded-xl border border-slate-200 dark:border-slate-800"
        />
      }
    >
      <Body />
      <Body2 />
    </ProjectLayout>
  );
}
