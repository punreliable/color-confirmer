import {render, screen, fireEvent } from '@testing-library/react';
// import {logRoles} from "@testing-library/dom";
import App from './App';


// App renders Flow
// - Find the button
// - check the text
// - check the color

test("App contains correct heading", async () => {


  const heading = await screen.getByRole("heading", { name: /Color Confirmer/i });
  expect(heading).toBeInTheDocument();
});

// Button Click Flow
// - click the button
// - check the text
// - check the color

test("Button starts with correct text", async () => {

  render(<App />);
  const buttonElement = await screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");
});



test("Button starts with correct color", () => {});
test("Button has correct color after click", () => {});
test("Button has correct text after click", () => {});



// Checkbox Flow
// - Checkbox found
// - Checkbox checked by default?
// - Button found, checked color
// - Checkbox checked after click?
// - Button found, checked updated color

test("Checkbox flow...", () => {

  it('should find checkbox', () => {

    render(<App />);

    const buttonElement = screen.getByRole("button", { name: /blue/i });
    const checkboxElement = screen.getByRole("checkbox", { name: /disable button/i }); 
    
    expect(buttonElement).toBeEnabled();
    expect(checkboxElement).not.toBeChecked();

  });


});


  // render(<App />);
  // const checkboxElement = screen.getByRole("checkbox", { name: /disable-button-checkbox/i });
  // expect(checkboxElement).toBeInTheDocument();
  // expect(checkboxElement).not.toBeChecked();
  // const buttonElement = screen.getByRole("button", { name: /Change Color to blue/i });
  // fireEvent.click(checkboxElement);
  // expect(checkboxElement).toBeChecked();
  // expect(buttonElement).toHaveClass("blue");
