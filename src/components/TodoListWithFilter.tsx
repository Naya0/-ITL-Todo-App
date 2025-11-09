import { useTodo } from "../context/TodoContext";
import { useMemo, useState } from "react";

import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

const TodoListWithFilter = () => {
  const { tasksList } = useTodo();

  const [activeCategory, setActiveCategory] = useState<
    "all" | "completed" | "current"
  >("all");

  const filteredList = useMemo(() => {
    if (activeCategory === "all") return tasksList;
    return tasksList.filter((item) => item.status === activeCategory);
  }, [activeCategory, tasksList]);

  return (
    <div className="w-full">
      <TodoFilter changeList={setActiveCategory} />
      <TodoList tasksList={filteredList} />
    </div>
  );
};

export default TodoListWithFilter;
