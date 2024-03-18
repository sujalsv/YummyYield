import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page tEST cASES", () => {
  test("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load button component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("should check if the no. of input boxes are correct or not", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });

  it("should load input name inside contact component", () => {
    render(<Contact />);

    //quering
    const inputName = screen.getByPlaceholderText("name");

    //assertion
    expect(inputName).toBeInTheDocument();
    console.log(inputName);
  });

  //when u console log of what is written above it will return jsx which is nothing but the react element which is nothing but the object.
});

//this testing is called unit testing
