import styles from "@/components/home/project.module.css";
import Balancer from "react-wrap-balancer";
import { ReactNode } from "react";
import { projectLinks, projectInterface, default as projectsInfo } from "@/lib/projects-info";
import {useProjectModal} from "@/components/home/project-modal"

export function Project({ project }: {project: projectInterface}) {
  const { ProjectModal, setShowProjectModal } = useProjectModal(project)
  const numberOfProjectLinks = projectLinks
    .map((e) => e.name)
    .filter((key) => key in project.links).length;

  return (<>
    <ProjectModal />
    <div
      className={`relative col-span-1 cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md hover:scale-[1.02] hover:transition ${styles.project}`}
      onClick={() => setShowProjectModal(true)}
    >
      <div className="mx-auto mt-3 flex items-center justify-center space-x-3">
        {projectLinks.map(({ name, title, shortTitle, image }) => {
          const link: string | undefined = project.links[name];
          if (link === undefined) {
            return;
          }
          let linkTitle: ReactNode;
          if (numberOfProjectLinks > 1) {
            linkTitle = (
              <>
                <p className="hidden xl:block">{title}</p>
                <p className="hidden min-[860px]:block xl:hidden">
                  {shortTitle}
                </p>
              </>
            );
          } else {
            linkTitle = (
              <>
                <p className="hidden md:block">{title}</p>
              </>
            );
          }
          return (
            <a
              key={name}
              className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-3 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {image}
              {linkTitle}
            </a>
          );
        })}
      </div>
      <div className="mx-auto max-w-md text-center">
        <h2 className="mt-6 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{project.name}</Balancer>
        </h2>
        <div className="prose-sm m-3 mt-2 leading-normal text-gray-500 md:prose">
          <Balancer className={styles.description}>{project.description}</Balancer>
        </div>
      </div>
    </div>
    </>);
}

export default function InsertMyProjects() {
  return (
    <>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="my-10 flex grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] auto-cols-max grid-cols-1 gap-5 px-5 md:grid-cols-3">
        {projectsInfo.map((project) => (
          <Project 
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </>
  );
}
