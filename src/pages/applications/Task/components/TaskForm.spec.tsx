import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extending Jest's expect functionality
import TaskForm from './TaskForm';

describe('TaskForm', () => {
  test('renders TaskForm component', () => {
    render(<TaskForm />);

    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });

  test('displays error message with invalid input', async () => {
    render(<TaskForm />);

    // Fill in the form with invalid input
    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: 'T' },
    });
    fireEvent.change(screen.getByLabelText(/description/i), {
      target: { value: 'D' },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/submit/i));

    // Assert that the error messages are displayed
    expect(
      await screen.findByText(/title must contain at least 3 characters/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /description must contain at least 10 characters/i,
      ),
    ).toBeInTheDocument();
  });
});
