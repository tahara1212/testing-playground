import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

it("挨拶が正常にレンダリングされる", () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})