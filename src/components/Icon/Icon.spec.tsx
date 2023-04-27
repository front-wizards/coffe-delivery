import React from "react";
import { render, screen } from "@testing-library/react";
import { Icon } from "./Icon";

describe("Icon", () => {
  it('renders the correct icon when `name` is "purpleCart"', () => {
    const {getByTestId, queryAllByTestId} = render(<Icon name="purpleCart" />);
    // const icon = screen.getByTestId("purpleCart-icon");
    // expect(icon).toBeInTheDocument();
    expect(queryAllByTestId('purpleCart-icon')).toBeVisible();

  });

  it('renders the correct icon when `name` is "yellowCart"', () => {
    render(<Icon name="yellowCart" />);
    const icon = screen.getByTestId("yellowCart-icon");
    expect(icon).toBeInTheDocument();
  });

  it('renders the correct icon when `name` is "plus"', () => {
    render(<Icon name="plus" />);
    const icon = screen.getByTestId("plus-icon");
    expect(icon).toBeInTheDocument();
  });

  it('renders the correct icon when `name` is "minus"', () => {
    render(<Icon name="minus" />);
    const icon = screen.getByTestId("minus-icon");
    expect(icon).toBeInTheDocument();
  });

  it('renders the correct icon when `name` is "remove"', () => {
    render(<Icon name="remove" />);
    const icon = screen.getByTestId("remove-icon");
    expect(icon).toBeInTheDocument();
  });

  it('renders nothing when `name` is not provided', () => {
    render(<Icon />);
    const icon = screen.queryByTestId("icon");
    expect(icon).not.toBeInTheDocument();
  });
});
