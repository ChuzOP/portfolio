import { useRef } from "react";
import { useState } from "react";

interface props {
  children: any;
  text: string;
  color: string;
  textColor?: string;
  href?: string;
  pdf?: boolean;
}

export default function IconButton({
  children,
  text,
  color,
  textColor,
  href = "https://www.google.com/",
  pdf = false,
  ...props
}: props) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  const handleClick = () => {
    if (pdf) {
      const link = document.createElement("a");
      link.href = "/docs/CV_Miguel García.pdf";
      link.download = "CV_Miguel García.pdf";
      link.click();
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        flex px-2 py-1 items-center justify-center rounded-lg
        ${textColor || "text-white"} ${color || "bg-gray-600"}
      `}
      {...props}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className="px-1.5">
          {text}
        </span>
      </div>
    </button>
  );
}
