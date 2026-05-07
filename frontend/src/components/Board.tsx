import { useEffect, useState } from "react";

import type Task from "../types/task";

import mockTasks from "../data/mockTasks";
import Column from "./Column";

export default function Board() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(mockTasks);
  }, []);

  const todoTasks: Task[] = tasks.filter((task) => task.status === "todo");
  const doingTasks: Task[] = tasks.filter((task) => task.status === "doing");
  const doneTasks: Task[] = tasks.filter((task) => task.status === "done");

  return (
    <div>
      <Column title="Pendentes" tasks={todoTasks} />
      <Column title="Em Andamento" tasks={doingTasks} />
      <Column title="Concluídas" tasks={doneTasks} />
    </div>
  );
}
