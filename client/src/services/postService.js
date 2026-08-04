import {API_POST_URL} from "../constants.js";

function getUrl(id, action){
  return action ? `${API_POST_URL}/${id}/${action}`: `${API_POST_URL}/${id}`
}

async function fetchAllPosts() {
  const response = await fetch(API_POST_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

async function updatePost(postData, id) {
  const response = await fetch(getUrl(id), {
    headers: {"Content-Type": "application/json"},
    method: "PUT",
    body: JSON.stringify(postData)
  })

  if (!response.ok) {
    throw new Error("Failed to update post")
  }

  return response.json()
}

async function createPost(dataPost){
  const response = await fetch(API_POST_URL, {
    headers: {"Content-Type": "application/json"},
    method: "POST",
    body: JSON.stringify(dataPost)
  })

  if (!response.ok) {
    throw new Error("Failed to create post")
  }

  return response.json()
}

async function fetchPost(id) {
  const response = await fetch(getUrl(id, "edit"))

  if (!response.ok) {
    throw new Error("Failed to fetch post")
  }

  return response.json()
}

async function deletePost(id) {
  const response = await fetch(getUrl(id), {
    headers: {"Content-Type": "application/json"},
    method: "DELETE"
  })

  if (!response.ok) {
    throw new Error("Failed to delete post")
  }

  return response.json()
}

export {
  fetchAllPosts,
  createPost,
  updatePost,
  deletePost,
  fetchPost
}
