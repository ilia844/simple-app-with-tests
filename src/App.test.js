import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import App from "./App";

it("can receive a new user and show it on a list", async () => {
  const mockUser = { name: "Ilya", email: "ilya@gmail.com" };
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  await user.click(nameInput);
  await user.keyboard(mockUser.name);
  await user.click(emailInput);
  await user.keyboard(mockUser.email);

  await user.click(button);

  const name = screen.getByRole("cell", { name: mockUser.name });
  const email = screen.getByRole("cell", { name: mockUser.email });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
