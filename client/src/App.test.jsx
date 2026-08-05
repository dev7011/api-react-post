import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import App, { total } from "./App.jsx";

describe("Testing all function", () => {
  test("Testing total function", () => {
    expect(total(1,2,3)).toBe(6)
  })
})

describe("Testing Link of routes", () => {
  test("post list", async () => {
    vi.stubGlobal("fetch", vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: async () => []
      })
    ));

    window.history.pushState({}, "", "/posts");

    render(<App />)

    expect(screen.getByRole("link", { name: /post list/i })).toBeInTheDocument();

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  })
})
