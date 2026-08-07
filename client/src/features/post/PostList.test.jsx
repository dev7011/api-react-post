import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import PostsList from "./PostsList.jsx";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Routing Postlist", () => {
  test("link /posts", async () => {

    vi.stubGlobal("fetch", vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: async () => []
      })
    ));

    render(
      <MemoryRouter initialEntries={["/posts"]}>
        <PostsList />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /posts list/i })).toBeInTheDocument();

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
