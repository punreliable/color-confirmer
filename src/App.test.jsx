import {render, screen} from '@testing-library/react';
import {App} from './App';

test("App contains correct heading", () => {

  render(<App />);

  const heading = screen.getByText(/Color Confirmer/i);

});