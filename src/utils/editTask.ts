import type { ITask } from "../types/taskTypes";

export function editTask(
  tasksList: ITask[],
  setTasksList: (tasks: ITask[]) => void,
  id: string,
  property: "description" | "status",
  description?: string
) {
  const targetObject = tasksList.find((item) => item.id === id);

  if (targetObject) {
    if (property === "status") {
      targetObject.status =
        targetObject.status === "completed" ? "current" : "completed";
    } else if (property === "description" && description) {
      targetObject.description = description;
    }
  }

  setTasksList([...tasksList]);
}
