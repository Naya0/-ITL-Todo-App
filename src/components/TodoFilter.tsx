import { useState, type FC } from "react";

type CategoryName = "all" | "completed" | "current";

interface Props {
  changeList: (category: CategoryName) => void;
}

const buttons: { label: string; value: CategoryName }[] = [
  { label: "Все", value: "all" },
  { label: "Завершенные", value: "completed" },
  { label: "Активные", value: "current" },
];

const TodoFilter: FC<Props> = ({ changeList }) => {
  const [activeTab, setActiveTab] = useState<CategoryName>("all");

  const handleClick = (category: CategoryName) => {
    setActiveTab(category);
    changeList(category);
  };

  return (
    <div className="todo-buttons-filter">
      {buttons.map(({ label, value }) => (
        <button
          key={value}
          className={`btn ${activeTab === value ? "active" : ""}`}
          onClick={() => handleClick(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
