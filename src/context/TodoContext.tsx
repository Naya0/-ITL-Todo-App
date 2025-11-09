import { createContext, useContext } from "react";
import type { ITask, TEditTask } from "../types/taskTypes";

interface ITodoContext {
  tasksList: ITask[];
  setTasksList: (tasks: ITask[]) => void;
  handleDeleteTask: (id: string) => void;
  handleEditTask: TEditTask;
}

export const TodoContext = createContext<ITodoContext>({} as ITodoContext);

export const useTodo = () => useContext(TodoContext);