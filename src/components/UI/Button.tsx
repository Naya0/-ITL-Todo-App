import React from "react";

type ButtonType = "button" | "submit" | "reset";

interface Props {
  typeButton?: ButtonType;
  title: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

const Button = ({
  typeButton = "button",
  title,
  width = 150,
  height = 30,
  onClick
}: Props) => {
  return (
    <button
      className="btn"
      type={typeButton}
      style={{ width: width, height: height }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
