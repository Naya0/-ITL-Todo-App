import React from "react";

interface IconProps {
  name: string;
  width?: number;
  height?: number;
  fill?: string;
}

const Icon = ({
  name,
  width = 15,
  height = 15,
  fill = "#9f9f9f",
}: IconProps) => {
  return (
    <svg className={`icon icon-${name}`} style={{ width, height, fill }}>
      <use xlinkHref={`./sprite.svg#${name}`}></use>
    </svg>
  );
};

export default Icon;
