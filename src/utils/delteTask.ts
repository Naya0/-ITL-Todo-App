import type { ITask } from "../types/taskTypes";

export function deleteTask(
  tasksList: ITask[],
  setTasksList: (tasks: ITask[]) => void,
  id: string
) {
  let newTaskList = tasksList.filter((item) => item.id !== id);

  setTasksList([
    ...newTaskList
  ]);
}
