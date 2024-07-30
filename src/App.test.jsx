import {render, screen} from '@testing-library/react';
import App from './App';

test("App contains correct heading", () => {

  render(<App />);
  const heading = screen.getByRole("heading",{ name: /Color Confirmer/i });
  expect(heading).toBeInTheDocument();
});
