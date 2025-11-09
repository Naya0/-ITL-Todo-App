import { useState, useMemo } from "react";
import TodoList from "./TodoList";
import Icon from "./Icon";
import { useTodo } from "../context/TodoContext";

const TodoLists = () => {
  const { tasksList } = useTodo();
  const [isOpenSectionCompleted, setIsOpenSectionCompleted] = useState(false);

  if (tasksList.length === 0) return <p>В списке нет задач</p>;

  const { currentList, completedList } = useMemo(() => {
    const current = tasksList.filter((item) => item.status === "current");
    const completed = tasksList.filter((item) => item.status === "completed");

    return { currentList: current, completedList: completed };
  }, [tasksList]);

  return (
    <>
      <TodoList tasksList={currentList} />

      <div className="todo-list_completed__section">
        <div
          className="todo-list_completed__title flex"
          onClick={() => setIsOpenSectionCompleted((prev) => !prev)}
        >
          <h3>Завершенные</h3>
          <Icon name="arrow" width={35} height={20} />
        </div>

        {isOpenSectionCompleted && (
          <div className="todo-list_completed__content open">
            <TodoList tasksList={completedList} />
          </div>
        )}
      </div>
    </>
  );
};

export default TodoLists;
