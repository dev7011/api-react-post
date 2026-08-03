import {useEffect, useState} from "react"
import {API_BASE_URL} from "../../constants.js";
import {NavLink} from "react-router-dom";

function PostsList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/posts`);
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched posts:", data);
          setPosts(data);

        } else {
          throw response;
        }

      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <h1>Posts List</h1>
      <p>List of posts will be displayed here.</p>

      { posts.map((post) => (
        <div key={post.id} className={"post-item"}>
          <h2> {post.id}. {post.title}</h2>
          <p>{post.body}</p>

          <div className={"footer-actions row-component"}>
            <NavLink
              className={"btn btn-primary"}
              to={`/post/edit/${post.id}`}>Edit
            </NavLink>
            <NavLink
              className={"btn btn-danger"}
              to={`/post/delete/${post.id}`}>Delete
            </NavLink>
          </div>
        </div>

        ))
      }
    </>
  )
}

export default PostsList
