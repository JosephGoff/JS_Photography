import { useParams } from "next/navigation";
import React from "react";
import appData from "../../app-data.json";

const ProjectSidebar = () => {
  const { link } = useParams();
  const project = appData.pages.projects.find((proj) => proj.link === link);
  const projectIndex = appData.pages.projects.findIndex(
    (proj) => proj.link === link
  );

  if (!project) {
    return <></>;
  }

  return (
    <div className="flex flex-col pl-[calc(18px+1vw)] pr-[calc(18px+1vw)] justify-end pb-[45px]">
      <div
        className="font-sans tracking-[1px] leading-[calc(14px+1.5vw)] mb-[28px]"
        style={{
          fontSize: "calc(10px + 1.5vw)",
          fontWeight: "300",
        }}
      >
        {project.name}
      </div>
      <div className="flex flex-col text-[16px] leading-[20px] gap-[15px]">
        <div>
          <div className="font-[300]">Project Date</div>
          <div className="font-[100]">{project.year}</div>
        </div>
        <div>
          <div className="font-[300]">Location</div>
          <div className="font-[100]">{project.location}</div>
        </div>
        <div>
          <div className="font-[300]">Description</div>
          <div className="font-[100]">I have a chair I have a chair</div>
        </div>
        <div>
          <div className="font-[300]">Creator</div>
          <div className="font-[100]">Jessica Shulman</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSidebar;
