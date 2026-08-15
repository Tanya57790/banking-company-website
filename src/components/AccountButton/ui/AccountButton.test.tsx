import { describe, afterEach, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import type { SessionData } from "@/shared/types";
import AccountButton from "./AccountButton";

const testSession: SessionData = {
  session: {
    id: "test-session-id",
    userId: "test-user-id",
    token: "test-token",
    expiresAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    ipAddress: "127.0.0.1",
    userAgent: "vitest",
  },
  user: {
    id: "test-user-id",
    email: "test@example.com",
    emailVerified: true,
    name: "Test User",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: null,
    firstName: "Test FN",
    lastName: "Test LN",
    role: null,
    balance: undefined,
  },
};

afterEach(() => {
  cleanup();
});

describe("AccountButton", () => {
  it('renders href="/account" when session is exists', () => {
    render(<AccountButton session={testSession} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/account");
  });

  it('renders href="/auth/register" when session is null', () => {
    render(<AccountButton session={null} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/auth/register");
  });
});
