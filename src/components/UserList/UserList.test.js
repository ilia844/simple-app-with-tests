import { getByText, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import { UserList } from "./UserList";

function renderComponent() {
  const users = [
    { name: "Ilya", email: "ilya@gmail.com" },
    { name: "Alex", email: "alex@gmail.com" },
  ];
  const view = render(<UserList users={users} />);

  return {
    ...view,
    users,
  };
}

describe("User List", () => {
  it("render one row per user", () => {
    const { container } = renderComponent();

    // eslint-disable-next-line
    const rows = container.querySelectorAll("tbody tr");

    expect(rows).toHaveLength(2);
  });

  it("render the email and name of each user", () => {
    const { users } = renderComponent();

    users.forEach((user) => {
      expect(screen.getByRole("cell", { name: user.name })).toBeInTheDocument();
      expect(
        screen.getByRole("cell", { name: user.email }),
      ).toBeInTheDocument();
    });
  });
});
