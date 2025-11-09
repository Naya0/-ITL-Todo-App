export type TaskStatus = "current" | "completed";

export interface ITask {
  id: string;
  description: string;
  status: TaskStatus;
}

export type TEditTask = (
  id: string,
  property: "status" | "description",
  description?: string
) => void;

export interface IListProps {
  tasksList: ITask[];
  editTask: TEditTask;
  deleteTask: (id: string) => void;
}
