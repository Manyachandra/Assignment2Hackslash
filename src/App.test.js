import { render, screen } from '@testing-library/react';
import App from './App';

test('renders root App wrapper', () => {
  render(<App />);
  expect(screen.getByText(/Experience the Fusion/i)).toBeInTheDocument();
});

test('renders navbar component', () => {
  render(<App />);
  expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  expect(screen.getByText(/Events/i)).toBeInTheDocument();
  expect(screen.getByText(/Sponsors/i)).toBeInTheDocument();
});
