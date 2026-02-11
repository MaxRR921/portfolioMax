import Body from "./Body.mdx";
import Title from "./Title.mdx";
import ProjectLayout from "../../components/ProjectLayout";

export default function Page() {
  return (
    <ProjectLayout title={<Title />}>
      <Body />
    </ProjectLayout>
  );
}
