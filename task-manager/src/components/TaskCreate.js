import { useState } from "react";

function TaskCreateComponent({ onCreate, task, taskformUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event2) => {
    setTaskDesc(event2.target.value);
  };

  const handleSubmit = (event3) => {
    event3.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }

    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskformUpdate ? (
        //EDIT-UPDATE
        <div className="task-update">
          <h3>Taskı Güncelleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Güncelleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Taskı Güncelleyiniz </label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
            />
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        //CREATE
        <div className="task-create">
          <h3>Task Ekleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz: </label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
            />
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreateComponent;
