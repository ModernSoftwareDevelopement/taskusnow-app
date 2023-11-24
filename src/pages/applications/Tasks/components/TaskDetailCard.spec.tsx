import { render, screen } from '@testing-library/react';
import TaskDetailCard from './TaskDetailCard';
import { TaskInterface } from '../../../../entities/Task';
import { SchedulingOption } from '../../../../entities/Task';
import '@testing-library/jest-dom/extend-expect';

describe('TaskDetailCard', () => {
  const mockTask: TaskInterface = {
    title: 'Sample Task',
    description: 'This is a sample description.',
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
    createdAt: new Date('2023-11-24'),
  };

  it('renders TaskDetailCard component with provided task details', () => {
    render(<TaskDetailCard Task={mockTask} />);

    expect(screen.getByText(/Location/)).toBeInTheDocument();
    expect(
      screen.getByText(/This is a sample description/),
    ).toBeInTheDocument();
  });

  it('renders nothing when Task is undefined', () => {
    render(<TaskDetailCard Task={undefined} />);

    expect(screen.queryByText(/Sample Task/)).toBeNull();
    expect(screen.queryByText(/This is a sample description/)).toBeNull();
  });
});
