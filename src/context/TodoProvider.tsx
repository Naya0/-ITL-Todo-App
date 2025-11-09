import { useLocalStorage } from "../hooks/useLocalStorage";
import { TodoContext } from "./TodoContext";
import { deleteTask } from "../utils/delteTask";
import { editTask } from "../utils/editTask";
import type { ITask, TEditTask } from "../types/taskTypes";
import { useMemo } from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const TodoProvider = ({ children }: Props) => {
  const [tasksList, setTasksList] = useLocalStorage<ITask[]>("tasks", []);

  const handleDeleteTask = (id: string) => {
    deleteTask(tasksList, setTasksList, id);
  };

  const handleEditTask: TEditTask = (id, property, description) => {
    editTask(tasksList, setTasksList, id, property, description);
  };

  const value = useMemo(
    () => ({ tasksList, setTasksList, handleDeleteTask, handleEditTask }),
    [tasksList]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
