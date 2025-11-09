import "./styles/todoList.css";
import { useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";
import TodoListWithFilter from "./components/TodoListWithFilter";
import Switch from "./components/UI/Switch";
import { useTodo } from "./context/TodoContext";
import { TodoProvider } from "./context/TodoProvider";

type ViewMode = "filter" | "list";

const LIST_MODES: Record<ViewMode, string> = {
  filter: "фильтр",
  list: "список",
};

function AppContent() {
  const [viewMode, setViewMode] = useState<ViewMode>("filter");
  const { tasksList } = useTodo();

  const completedCount = tasksList.filter(
    (item) => item.status === "completed"
  ).length;

  const handleToggleView = (label: string) => {
    const mode = Object.keys(LIST_MODES).find(
      (key) => LIST_MODES[key as ViewMode] === label
    );

    if (mode) setViewMode(mode as ViewMode);
  };

  return (
    <div className="container">
      <div className="todo-list_container flex-col">
        <div className="title-todo-list flex">
          <h1>Задачи</h1>
          <span>
            {completedCount} / {tasksList.length}
          </span>
        </div>

        <Switch
          values={Object.values(LIST_MODES) as [string, string]}
          value={LIST_MODES[viewMode]}
          onChange={handleToggleView}
        />

        <TodoForm />
        <div className="w-full">
          <h2>
            {viewMode === "list"
              ? "Отображение с фильтром"
              : "Отображение в виде списков"}
          </h2>
          {viewMode === "filter" ? <TodoLists /> : <TodoListWithFilter />}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <TodoProvider>
      <AppContent />
    </TodoProvider>
  );
}
