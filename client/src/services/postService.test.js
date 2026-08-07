
import { afterEach, describe, expect, it, vi } from "vitest";
import { updatePost, createPost } from "./postService.js";

describe("updatePost", () => {
  afterEach(() => {
    console.log("afterEach: unstubAllGlobals");
    vi.unstubAllGlobals();
  });

  it("returns the updated post when the request succeeds", async () => {
    const postData = {title: "Updated title", body: "Updated body" };
    const updatedPost = { id: 42, ...postData };

    console.log("Test updateData")

    // const mockFetch = vi.fn( async () => ({
    //     ok: true,
    //     json: async () => updatedPost
    //   })
    // );

    // use promise.resolve() to return a resolved promise with the desired response object
    // json: async () => updatedPost instead json: vi.fn().mockReturnLValue(updatedPost) because we want to return a promise that resolves to the updatedPost object

    const mockFetch = vi.fn( () =>
      Promise.resolve({
        ok: true,
        //json: async () => updatedPost
        json: vi.fn().mockReturnValue({id: 42, ...postData})
      })
    )

    vi.stubGlobal("fetch", mockFetch);
    const result = await updatePost(postData);

    expect(result).toEqual(updatedPost);
  });

  it("Create a post", async () => {
      const postData = {title: "test post", body: "created post successful"} // Data return
      const createdPost = {title: "test post", body: "created post successful"} // Data expect

      // mock Function
      const mockFetchCreatePost = vi.fn(async () => ({
          ok: true,
          // kann auch
          //json: async () => postData
          json: vi.fn().mockResolvedValue(postData)
        })
      );

    vi.stubGlobal("fetch", mockFetchCreatePost);

    const result = await createPost(postData);

    console.log(result, createdPost)

    expect(result).toEqual(createdPost);
  })
});

