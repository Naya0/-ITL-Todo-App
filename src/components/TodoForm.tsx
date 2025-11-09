import { useState, type FormEvent } from "react";
import { addTask } from "../utils/addTask";
import "../styles/form.css";
import Button from "./UI/Button";
import { useTodo } from "../context/TodoContext";

const TodoForm = () => {
  const { tasksList, setTasksList } = useTodo();

  const [task, setTask] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateTask = (text: string): boolean => {
    const trimmed = text.trim();

    if (!trimmed) {
      setErrorMessage("Введите задачу");
      return false;
    }

    if (tasksList.some((t) => t.description === trimmed)) {
      setErrorMessage("Такая задача уже есть в списке!");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateTask(task)) return;

    addTask(task, tasksList, setTasksList);
    setTask("");
  };

  return (
    <div className="todo-form_container">
      <form onSubmit={handleSubmit} className="todo-form flex">
        <input
          type="text"
          placeholder="Введите задачу"
          className="input-text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <Button title="Добавить" typeButton="submit" />
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default TodoForm;
