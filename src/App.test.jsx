import {render, screen, fireEvent } from '@testing-library/react';
import {logRoles} from "@testing-library/dom";
import App from './App';

test("App contains correct heading", () => {

  render(<App />);
  const heading = screen.getByRole("heading",{ name: /Color Confirmer/i });
  expect(heading).toBeInTheDocument();
});

test("Button starts with correct text", () => {

  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");
});

test("Button starts with correct color", () => {});
test("Button has correct color after click", () => {});
test("Button has correct text after click", () => {});


// App renders Flow
// - Find the button
// - check the text
// - check the color

// Button Click Flow
// - click the button
// - check the text
// - check the color