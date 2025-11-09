import { useState } from "react";
import type { ITask } from "../types/taskTypes";
import TodoItemContent from "./TodoItemContent";
import TodoItemEdit from "./TodoItemEdit";

interface Props {
  task: ITask;
}

const TodoItem = ({ task }: Props) => {
  const [editItem, setEditItem] = useState<string | null>(null);

  return editItem ? (
    <TodoItemEdit task={task} changeItem={setEditItem} />
  ) : (
    <TodoItemContent task={task} changeItem={setEditItem} />
  );
};

export default TodoItem;
