import { afterEach, describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { resizeWindow } from "@/tests/helpers/resizeWindow";
import userEvent from "@testing-library/user-event";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

afterEach(() => {
  cleanup();
});

describe("Menu interactions", () => {
  it("toggle menu button focused and enabled", async () => {
    resizeWindow(390);
    render(<MobileMenu />);

    const user = userEvent.setup();

    const toggleButton = screen.getByRole("button", {
      name: /toggle menu/i,
    });

    expect(toggleButton).toBeInTheDocument();
    await user.tab();
    expect(toggleButton).toHaveFocus();
    expect(toggleButton).toBeEnabled();
  });

  it("toggles mobile menu visibility on click", async () => {
    resizeWindow(390);
    render(<MobileMenu />);

    const user = userEvent.setup();
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
  });

  it("closes menu when overlay is clicked", async () => {
    resizeWindow(390);
    render(<MobileMenu />);

    const user = userEvent.setup();
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");

    const overlay = screen.getByTestId("overlay");
    await user.click(overlay);

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
  });

  it("menu links have correct href on desktop", async () => {
    resizeWindow(1280);
    render(<Menu />);

    const home = screen.getByRole("link", {
      name: /home/i,
    });
    const careers = screen.getByRole("link", {
      name: /careers/i,
    });
    const about = screen.getByRole("link", {
      name: /about/i,
    });
    const security = screen.getByRole("link", {
      name: /security/i,
    });

    expect(home).toBeInTheDocument();
    expect(home).toHaveAttribute("href", "/");

    expect(careers).toBeInTheDocument();
    expect(careers).toHaveAttribute("href", "/careers");

    expect(about).toBeInTheDocument();
    expect(about).toHaveAttribute("href", "/about");

    expect(security).toBeInTheDocument();
    expect(security).toHaveAttribute("href", "/security");
  });
});
