import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete , onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(true);
  };

  const handleSubmit = (id,updatedTitle,updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id,updatedTitle,updatedTaskDesc);

  };

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Görev</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Açıklama</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button onClick={handleDeleteClick} className="task-delete">
              Sil
            </button>
            <button onClick={handleEditClick} className="task-edit">
              Düzenle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
