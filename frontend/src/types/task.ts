type TaskStatus = "todo" | "doing" | "done";

export default interface Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
}
