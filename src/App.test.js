import { render, screen } from '@testing-library/react';
import App from './App';

test('Ficha de Personagem - Cyberpunk', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ficha de Personagem - Cyberpunk/i);
  expect(linkElement).toBeInTheDocument();

});
