import { Project } from "@/entity/Projects";
import ar from "@/locales/ar";
import { Container, Stack } from "@/uikit/Primitives";

export const ProjectsPage = ({ projects }: { projects: Project[] }) => {
  return (
    <Container>
      <h1 className="page-title">{ar.nav.projects}</h1>
      <Stack gap={4}>
        {projects.map((project) => (
          <div key={project.name}>
            <a href={project.url} target="_blank" rel="noreferrer">
              {project.name}
            </a>
          </div>
        ))}
      </Stack>
    </Container>
  );
};
