import "./TaskForm.css";
import { FormEvent, useRef } from 'react';
import { postTask } from "../../../../services/TaskAPI";

const TaskForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const task = { title: '', description: '', userid: 123}

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if(titleRef.current !== null)
    task.title= titleRef.current.value;

    if(descriptionRef.current !== null)
    task.description = descriptionRef.current.value;
    
    console.log(task);

    try {
      await postTask(task);
      console.log('Task submitted successfully');
    } catch (error) {
      console.error('An error occurred on task submission:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input ref={titleRef} id="title" type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                ref={descriptionRef}
                id="description"
                rows={5}
                className="form-control"
              ></textarea>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
