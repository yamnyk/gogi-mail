import React from "react";
import { render } from "@testing-library/react";
import userEvent  from "@testing-library/user-event";
import { Footer } from "./Footer";

const {click} = userEvent;

describe("Unit testing Footer", () => {
  test("smoke test Footer", () => {
    render(<Footer />);
  });
  test("footer has correct text when user is NOT logged in", () => {
    const { getByTestId } = render(<Footer />);
    const personCopy = getByTestId("person-copy");

    expect(personCopy.textContent).toBe("You");
  });
  test("footer has correct text when user is logged in", () => {
    const { getByTestId } = render(<Footer user={{ name: "Gogi" }} />);
    const personCopy = getByTestId("person-copy");

    expect(personCopy.textContent).toBe("Gogi");
  });
  test("footer container has inline styles", () => {
    const { getByTestId } = render(<Footer />);
    const footerContainer = getByTestId("footer-container");

    expect(footerContainer).toHaveStyle("font-size: 10px; text-align: right;");
  });
  test('Footer toggling user info works', () => {
    const toggler = jest.fn();
    const {getByTestId} = render(<Footer toggleUserCopy={toggler}/>);

    expect(toggler).not.toBeCalled();

    click(
      getByTestId('toggler')
    );

    expect(toggler).toBeCalled();
  });
});
