import { useState, type FC, type ChangeEvent, type FormEvent } from "react";
import type { ITask } from "../types/taskTypes";
import Button from "./UI/Button";
import { useTodo } from "../context/TodoContext";

interface Props {
  task: ITask;
  changeItem: (item: string | null) => void;
}

const TodoItemEdit: FC<Props> = ({ task, changeItem }) => {
  const [taskDescription, setTaskDescription] = useState(task.description);
  const [errorMessage, setErrorMessage] = useState("");
  const { tasksList, handleEditTask } = useTodo();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = taskDescription.trim();

    if (
      tasksList.find((item) => item.description === taskDescription) &&
      task.description.trim() !== trimmed
    ) {
      setErrorMessage("Такая задача уже есть в списке!");

      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
      return null;
    }
    setErrorMessage("");

    if (!trimmed) return;
    handleEditTask(task.id, "description", trimmed);
    changeItem(null);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(e.target.value);
  };

  return (
    <div className="w-full">
      <form className="task-list_item-edit" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-text"
          value={taskDescription}
          onChange={handleChange}
          autoFocus
        />
        <Button title="Сохранить" typeButton="submit" />
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default TodoItemEdit;
