import './TaskForm.css';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { postTask } from '../../../../services/TaskAPI';
import { SchedulingOption } from '../../../../entities/Task';

const schema = z.object({
  title: z
    .string()
    .min(3, { message: 'Title must contain at least 3 characters!' }),
  description: z
    .string()
    .min(10, { message: 'Description must contain at least 10 characters!' }),
}); // creating zod schema for variable, data type, limit and error message

type TaskInterface = z.infer<typeof schema>; // to create shape of Task interface from zod base on schema

const TaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskInterface>({ resolver: zodResolver(schema) });

  console.log(errors);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const task = {
      title: data.title,
      description: data.description,
      user: {
        userId: 'user123',
        fullName: 'John Doe',
      },
      category: 'Sample Category',
      location: 'Sample Location',
      budget: 100,
      scheduling: SchedulingOption.FLEXIBLE,
      timeslot: {
        startTime: '10:00 AM',
        endTime: '12:00 PM',
      },
      createdAt: new Date(),
    };
    try {
      await postTask(task);
      alert('Task created!');
      reset();
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Failed to create task. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                {...register('title')}
                id="title"
                type="text"
                className="form-control"
              />
              {errors.title && (
                <p className="text-danger">{errors.title.message}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                {...register('description')}
                id="description"
                rows={5}
                className="form-control"
              ></textarea>
              {errors.description && (
                <p className="text-danger">{errors.description.message}</p>
              )}
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
