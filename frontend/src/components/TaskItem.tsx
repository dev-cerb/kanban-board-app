import type TaskItemProps from "../types/taskItemProps";

export default function TaskItem({ title, description }: TaskItemProps) {
  return (
    <div className="taskItem">
      <p>
        <strong>Título:</strong> {title}
      </p>
      <p>
        <strong>Descrição:</strong> {description}
      </p>
    </div>
  );
}
