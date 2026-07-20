import { render, screen } from '@testing-library/react';
import App from './App';

test('renders root App wrapper', () => {
  render(<App />);
  const root = document.querySelector('.App');
  expect(root).toBeInTheDocument();
});

test('renders navbar component', () => {
  render(<App />);
  const root = document.querySelector('.App');
  expect(root).toBeInTheDocument();
  expect(root.innerHTML).toContain('NIT Patna');
});
