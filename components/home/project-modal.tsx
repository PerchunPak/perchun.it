import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { projectInterface } from "@/lib/projects-info";

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
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <h3 className="font-display text-2xl font-bold">{project.name}</h3>
          <p className="text-sm text-gray-500">
            {project.longDescription.text}
            <br />
            <br />
            {project.longDescription.technologies !== undefined ? (
              <>
                <b>Technologies that I have used here:</b>{" "}
                {project.longDescription.technologies}
              </>
            ) : null}
          </p>
        </div>
      </div>
    </Modal>
  );
}

function parseTechnologiesFromProject(technologies: string[]) {
  var result = ""
  for (var i = 0; i < technologies.length; i++) {
    result + technologies[i]
  }
  return <><b>T</b></>
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
