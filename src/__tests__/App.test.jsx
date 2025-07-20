import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

test('renders todo input and add button', () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/add a todo/i)).toBeInTheDocument();
  expect(screen.getByText(/add/i)).toBeInTheDocument();
});

test('can add a todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/add a todo/i);
  const addButton = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: 'Learn React' } });
  fireEvent.click(addButton);

  expect(screen.getByText('Learn React')).toBeInTheDocument();
});

test('can delete a todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/add a todo/i);
  const addButton = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: 'Learn React' } });
  fireEvent.click(addButton);

  const deleteButton = screen.getByText(/delete/i);
  fireEvent.click(deleteButton);

  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});