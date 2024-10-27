import { Project } from "@/entity/Projects";

type Props = {
    projects: Project[];
}

export function ProjectsPage({ projects }: Props) {
    return (
      <>
        <div className="container">
          <h1 className="page-title">المشروعات</h1>
          <p>هنا بعض المشروعات التي عملت عليها مؤخرًا:</p>
        </div>
  
        {projects.map((project) => (
          <section key={project.name} className={`py-12 bg-[${project.color}]`}>
            <div className="container">
              <ProjectCard project={project} />
            </div>
          </section>
        ))}
      </>
    );
  }

  const ProjectCard = ({ project }: { project: Project }) => {
    return (
      <div className="flex flex-row gap-6 pt-12">
        <img
          src={project.screenshot}
          className="aspect-square h-40"
          alt="favicon"
        />
        <div className="flex flex-col">
          <a
            href={project.url}
            className="dark:text-white text-lg flex"
            target="_blank"
            rel="noreferrer"
            title={`${project.name} url`}
          >
            <h2 className="text-2xl">{project.name}</h2>
            <span className="flex-1" />
          </a>
          <p className="text-neutral-400 text-sm mt-4">{project.description}</p>
          <span className="flex-1" />
          <p>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm"
            >
              {project.url.replace("https://", "")}
            </a>
          </p>
          <p className="text-sm dark:text-neutral-600">{project.startDate}</p>
        </div>
      </div>
    );
  };
  