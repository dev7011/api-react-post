import { describe, expect, it, vi } from "vitest";
import { makeCoffee, customService } from "./mockService.js";

describe("coffee", () => {
  it("returns the given amount", () => {
    const make_coffee = makeCoffee(50);

    expect(make_coffee).toBe("50 Gramm");
  });
});

describe("customService", () => {
  const mockMakeCofee = vi.fn(() => {
    return "150 Gramm"
  })

  console.log("mockCofee", mockMakeCofee());

  it("returns Name und Menge", () => {
    expect(customService("Capuchino", 200, mockMakeCofee)).toBe("Capuchino 150 Gramm");
  });
});