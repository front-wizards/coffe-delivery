import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("renders a button with an icon and title", () => {
    const { getByRole, getByTestId } = render(
      <Button iconName="purpleCart" title="Add to cart" />
    );

    const button = getByRole("button");
    const icon = getByTestId("purpleCart-icon");

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(button).toHaveTextContent("Add to cart");
  });
});
