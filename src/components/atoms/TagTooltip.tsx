import React, { useState } from "react";
import CSSIcon from "../../icons/CSS.tsx";
import HtmlIcon from "../../icons/HtmlIcon.tsx";
import JavascriptIcon from '../../icons/JavascriptIcon.tsx';
import NodeIcon from "../../icons/NodeIcon.tsx";
import ReactIcon from "../../icons/ReactIcon.tsx";
import NextIcon from "../../icons/NextIcon.tsx";
import MysqlIcon from "../../icons/MysqlIcon.tsx";
import TailwindIcon from '../../icons/TailwindIcon';
import TypescriptIcon from "../../icons/TypescriptIcon.tsx";

const TagTooltip = ({ tag }: any) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const tagInfo: any = {
    1: { name: "CSS", icon: <CSSIcon /> },
    2: { name: "HTML", icon: <HtmlIcon /> },
    3: { name: "Javascript", icon: <JavascriptIcon /> },
    4: { name: "NodeJS", icon: <NodeIcon /> },
    5: { name: "ReactJS", icon: <ReactIcon /> },
    6: { name: "NextJS", icon: <NextIcon /> },
    7: { name: "MySQL", icon: <MysqlIcon /> },
    8: { name: "Tailwind", icon: <TailwindIcon /> },
    9: { name: "Typescript", icon: <TypescriptIcon /> },
  };

  const info = tagInfo[tag];

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        className="inline-block"
      >
        {info.icon}
      </div>
      {isTooltipVisible && info && (
        <div className="absolute z-10 bg-white text-black py-1 px-2 text-sm rounded-md shadow-md bottom-10 left-1/2 transform -translate-x-1/2 ">
          {info.name}
        </div>
      )}
    </div>
  );
};

export default TagTooltip;
