import type ColumnProps from "../types/columnProps";

import TaskItem from "./TaskItem";

export default function Column({ title, tasks }: ColumnProps) {
  return (
    <div className="columnBoard w-full md:w-96 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-md flex flex-col gap-4 transition-colors">
      <h2 className="text-zinc-800 dark:text-zinc-100 font-bold text-xl mb-4 bord-b border-zinc-200 dark:border-zinc-700 pb-2">
        {title}
      </h2>
      {tasks.length === 0 ? (
        <p>Não há tarefas nesta categoria</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
          />
        ))
      )}
    </div>
  );
}
