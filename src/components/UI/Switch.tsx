import type { FC } from "react";
import "../../styles/switch.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
  values: [string, string];
}

const Switch: FC<Props> = ({ value, onChange, values }) => {
  const isRight = value === values[1];

  const handleToggle = () => {
    const nextValue = isRight ? values[0] : values[1];
    onChange(nextValue);
  };

  return (
    <div className={`switch ${isRight ? "right" : ""}`}>
      <div className="switch-label" >
        <span>{isRight ? values[0] : values[1]}</span>
      </div>
      <input
        type="checkbox"
        id="switch"
        checked={isRight}
        onChange={handleToggle}
      />
      <label  className="switch-label_disable" htmlFor="switch">
        {value}
      </label>
    </div>
  );
};

export default Switch;
