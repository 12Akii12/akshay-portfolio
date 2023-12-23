import React from "react";

interface props {
  hrefLink: string;
  icon: React.ReactNode;
  text: string;
}

const WorkLink: React.FC<props> = ({ hrefLink, icon, text }) => {
  return (
    <a
      href={hrefLink}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
    >
      {icon}
      <p className="text-black">{text}</p>
    </a>
  );
};

export default WorkLink;
