import React from "react"
import { render, screen } from "@testing-library/react"
import { Hello } from "./Hello"

it('renders to hello world', () => {
    render(<Hello />);
    const myelement = screen.getByText("Hello World!");
    expect(myelement).toBeInTheDocument();
})