import { useEffect, useState } from "react";
import { API_POST_URL } from "../constants.js";

export function getPostUrl(id, action = "") {
  return action ? `${API_POST_URL}/${id}/${action}` : `${API_POST_URL}/${id}`;
}

export async function fetchPost(id, action ) {
  const response = await fetch(getPostUrl(id, action));

  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.statusText}`);
  }
  return response.json();
}

function usePost(id) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!id) {
      setPost(null);
      return;
    }
    const loadPost = async () => {
      try {
        setPost(await fetchPost(id, "edit"));
      } catch (err) {
        console.error(err);
      }
    };
    loadPost();

  }, [id]);

  return post;
}

export default usePost;