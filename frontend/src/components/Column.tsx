import type ColumnProps from "../types/columnProps";

import TaskItem from "./TaskItem";

export default function Column({ title, tasks }: ColumnProps) {
  return (
    <div className="columnBoard">
      <h2>{title}</h2>
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
