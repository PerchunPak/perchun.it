import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { projectInterface } from "@/lib/projects-info";
import ReactMarkdown from "react-markdown";

function ProjectModal({
  showProjectModal,
  setShowProjectModal,
  project,
}: {
  showProjectModal: boolean;
  setShowProjectModal: Dispatch<SetStateAction<boolean>>;
  project: projectInterface;
}) {
  return (
    <Modal showModal={showProjectModal} setShowModal={setShowProjectModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 md:px-16">
          <h3 className="font-display text-2xl font-bold">{project.name}</h3>
          <div className="break-words text-justify text-sm text-gray-500 hyphens-auto whitespace-pre-wrap">
            <p>{project.longDescription.text}</p>
            {project.longDescription.technologies !== undefined
              ? parseTechnologiesFromProject(
                  project.longDescription.technologies,
                )
              : null}
            {project.longDescription.additional !== undefined
              ? <Markdown text={project.longDescription.additional} />
              : null}
          </div>
        </div>
      </div>
    </Modal>
  );
}

function parseTechnologiesFromProject(
  technologies: (
    | { name: string; description?: string; link?: string }
    | string
  )[],
) {
  let result = "";

  for (let i = 0; i < technologies.length; i++) {
    if (i !== 0 && i === technologies.length - 1) {
      result += " and ";
    } else if (i !== 0) {
      result += ", ";
    }

    let technology = technologies[i];
    if (typeof technology === "string") {
      result += technology;
    } else {
      let technologyName = `**${technology.name}**`;

      if (technology.link !== undefined) {
        result += `[${technologyName}](${technology.link})`;
      } else {
        result += technologyName;
      }

      if (technology.description !== undefined) {
        result += ` (${technology.description})`;
      }
    }
  }

  return (
    <div className="mt-1">
      <strong className="font-medium">
        Technologies that I have used here:
      </strong>{" "}
      <Markdown text={result + "."} />
    </div>
  );
}

function Markdown({text}: {text: string}) {
  return <ReactMarkdown
    components={{
      a: ({ node, ...props }) => (
        <a
          {...props}
          className="underline transition-colors hover:text-blue-800"
        />
      ),
      strong: ({ node, ...props }) => (
        <strong {...props} className="font-bold" />
      ),
    }}
  >
    {text}
  </ReactMarkdown>
}

export function useProjectModal(project: projectInterface) {
  const [showProjectModal, setShowProjectModal] = useState(false);

  const ProjectModalCallback = useCallback(() => {
    return (
      <ProjectModal
        showProjectModal={showProjectModal}
        setShowProjectModal={setShowProjectModal}
        project={project}
      />
    );
  }, [showProjectModal, setShowProjectModal, project]);

  return useMemo(
    () => ({
      setShowProjectModal,
      ProjectModal: ProjectModalCallback,
      projectName: project.name,
    }),
    [setShowProjectModal, ProjectModalCallback, project],
  );
}
