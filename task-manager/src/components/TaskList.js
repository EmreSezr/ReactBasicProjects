import TaskShow from "./TaskShow";

function TaskList({ tasksList , onDelete , onUpdate}) {
  return (
    <div className="task-list">
      {tasksList.map((task, index) => {
        return <TaskShow onDelete={onDelete} key={index} task={task} onUpdate={onUpdate} />;
      })}
    </div>
  );
}

export default TaskList;
