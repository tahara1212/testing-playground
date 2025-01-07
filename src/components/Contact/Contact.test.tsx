import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react"

import * as stories from './Contact.stories';

const { Base } = composeStories(stories);

describe("お問い合わせフォームのテスト", () => {
  it("全てのフォーム要素が表示されていること", () => {
    // Arrange
    render(<Base />);
    const nameElement = screen.getByRole("textbox", {
      name: "お名前",
    });
    const emailElement = screen.getByRole("textbox", {
      name: "メールアドレス",
    });
    const questionsElement = screen.getByRole("combobox");
    const termsElement = screen.getByRole("checkbox");
    const submitButtonElement = screen.getByRole("button");

    // Assert
    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(questionsElement).toBeInTheDocument();
    expect(termsElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
  })
})
