import type { ITask } from "../types/taskTypes";

export function addTask(
  description: string,
  tasksList: ITask[],
  setTasksList: (tasks: ITask[]) => void
) {
  setTasksList([
    ...tasksList,
    {
      id: crypto.randomUUID(),
      description,
      status: "current",
    },
  ]);
}
