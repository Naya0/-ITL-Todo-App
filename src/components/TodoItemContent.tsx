import { useState } from "react";
import Icon from "./Icon";
import type { ITask } from "../types/taskTypes";
import { useTodo } from "../context/TodoContext";

interface TaskProps {
  task: ITask;
  changeItem: (item: string) => void;
}

const TodoItemContent = ({ task, changeItem }: TaskProps) => {
  const [isChecked, setIsChecked] = useState(task.status === "completed");
  const { handleDeleteTask, handleEditTask } = useTodo();

  const handleChecked = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div
      className={`task-list_item ${
        task.status === "completed" ? "task-list_item-complited " : ""
      }`}
      key={task.id}
      onClick={() => handleEditTask(task.id, "status")}
    >
      <div className="task-description">
        <input
          id={`task-content` + task.id}
          type="checkbox"
          checked={isChecked}
          onChange={handleChecked}
        />
        <label htmlFor={`task-content` + task.id}>{task.description}</label>
      </div>

      <div className="buttons">
        <button
          type="button"
          className="btn-icon"
          onClick={(e) => {
            e.stopPropagation();
            changeItem(task.id);
          }}
        >
          <Icon name="edit" />
        </button>

        <button
          type="button"
          className="btn-icon"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteTask(task.id);
          }}
        >
          <Icon name="delete" />
        </button>
      </div>
    </div>
  );
};

export default TodoItemContent;
