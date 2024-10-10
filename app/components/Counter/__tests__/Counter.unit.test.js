import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '..';

describe('Counter Component', () => {
  test('renders initial count', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading', { level: 1 });
    expect(countElement).toHaveTextContent('0');
  });

  test('increments count when the + button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    const countElement = screen.getByRole('heading', { level: 1 });
    expect(countElement).toHaveTextContent('1');
  });
});
