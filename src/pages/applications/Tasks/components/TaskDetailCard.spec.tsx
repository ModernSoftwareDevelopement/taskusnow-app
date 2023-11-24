import { render, screen, fireEvent } from '@testing-library/react';
import TaskCategories from './TaskCategories';

describe('TaskCategories', () => {
  it('calls OnSelectCategory when a category is selected', () => {
    const mockOnSelectCategory = jest.fn();

    render(<TaskCategories OnSelectCategory={mockOnSelectCategory} />);

    const selectElement = screen.getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: 'Computers and IT' } });

    expect(mockOnSelectCategory).toHaveBeenCalledWith('Computers and IT');
  });

  it('calls OnSelectCategory with an empty string when "All Categories" is selected', () => {
    const mockOnSelectCategory = jest.fn();

    render(<TaskCategories OnSelectCategory={mockOnSelectCategory} />);

    const selectElement = screen.getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: '' } });

    expect(mockOnSelectCategory).toHaveBeenCalledWith('');
  });
});
