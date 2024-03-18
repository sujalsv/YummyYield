import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");
  // const loginButton = screen.getByRole("button",{name:"Login"});    when u have multiple buttons u can either do this or get by text to find the login button out of multiple buttons

  expect(loginButton).toBeInTheDocument();
});

it("should load header component with cart-items0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - (0 items)");

  expect(cartItems).toBeInTheDocument();
});

// go through what is rejex

it("should ahould change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");

  fireEvent.click(loginButton); // this will call the mock

  const logOutButton = screen.getByRole("button")
  expect(logOutButton).toBeInTheDocument();
});
