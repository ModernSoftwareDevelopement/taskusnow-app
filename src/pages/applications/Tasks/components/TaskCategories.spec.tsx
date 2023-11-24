import { render, screen, fireEvent } from '@testing-library/react';
import TaskCategories from './TaskCategories';

const mockOnSelectCategory = jest.fn();

describe('TaskCategories', () => {
  it('calls OnSelectCategory when a category is selected', () => {
    render(<TaskCategories OnSelectCategory={mockOnSelectCategory} />);

    const selectElement = screen.getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: 'Computers and IT' } });

    expect(mockOnSelectCategory).toHaveBeenCalledWith('Computers and IT');
  });

  it('calls OnSelectCategory with an empty string when "All Categories" is selected', () => {
    render(<TaskCategories OnSelectCategory={mockOnSelectCategory} />);

    const selectElement = screen.getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: '' } });

    expect(mockOnSelectCategory).toHaveBeenCalledWith('');
  });
});
