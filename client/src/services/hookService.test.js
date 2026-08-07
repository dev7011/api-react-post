import {
  beforeEach,
  beforeAll,
  afterEach,
  afterAll,
  it,
  describe,
  expect
} from "vitest";


describe("hooks", () => {
  beforeAll(() => {
    console.log("1- run once before all test")
  })

  beforeEach(() => {
    console.log("2- run before each test")
  })

  it("first-Test", () => {
    console.log("first test")
  })

  it("second-Test", () => {
    console.log("second test")
  })

  it("third-Test", () => {
    console.log("third test")
  })

  afterEach(() => {
     console.log ("3- rum after each test")
  })

  afterAll(() => {
    console.log ("4- rum after each test")
  })
})



