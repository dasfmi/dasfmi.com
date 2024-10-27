import { ProjectsPage } from "@/theme";
import { projects } from "@/content/projects";

const title = "المشروعات | إسلام";
const desc = "مجموعة من آخر المشروعات التي عملت عليها";

export const metadata = {
  title: title,
  description: desc,
  openGraph: { title, description: desc },
};

export default async function Projects() {
  return <ProjectsPage projects={projects} />;
}
