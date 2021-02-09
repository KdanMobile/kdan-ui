import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";

import Checkbox from "./";

describe("Checkbox", () => {
  afterEach(cleanup);

  test("unchecked", () => {
    const { getByTestId } = render(<Checkbox />);

    expect((getByTestId("checkbox") as HTMLInputElement).checked).toEqual(
      false
    );
  });

  test("checked", () => {
    const { getByTestId } = render(<Checkbox checked />);

    expect((getByTestId("checkbox") as HTMLInputElement).checked).toEqual(true);
  });

  test("click checkbox", () => {
    const { getByTestId } = render(<Checkbox />);

    fireEvent.click(getByTestId("checkbox"));

    expect((getByTestId("checkbox") as HTMLInputElement).checked).toEqual(true);
  });
});
