import type { ITask } from "../types/taskTypes";
import TodoItem from "./TodoItem";

interface Props {
  tasksList: ITask[];
}

const TodoList = ({ tasksList }: Props) => {
  return (
    <div className="task-list">
      {tasksList.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TodoList;
