import {API_BASE_URL, API_POST_URL} from "../constants.js";

function getUrl(id, action){
  return action ? `${API_POST_URL}/${id}/${action}`: `${API_POST_URL}/${id}`
}
async function fetchAllPosts() {
    const response = await fetch(API_POST_URL);

    if (!response.ok) {
      throw new error("failed Fetched posts:");
    }

    return response.json();
}

async function updatePost(postData,  id) {
  const response = await fetch( getUrl(id), {
    headers: {"Content-Type": "application/json"},
    method: "PUT",
    body: JSON.stringify(postData)
  })

  if (!response.ok) {
    throw new Error("failed update")
  }
}

async function createPost(dataPost){
  const response = await fetch(API_POST_URL, {
    headers: {"Content-Type": "application/json"},
    method: "POST",
    body: JSON.stringify(dataPost)
  })

  if (!response.ok) {
    throw new Error("failed create post")
  }

  return response.json()
}
async function fetchPost(id) {
  const response = await fetch(getUrl(id, "edit"))
  if (!response.ok) {
    throw new Error("failed to fetch post")
  }

  return response.json()
}


export {
  fetchAllPosts,
  createPost,
  updatePost,
  fetchPost}