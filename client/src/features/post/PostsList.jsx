import {useEffect, useState} from "react"
import {NavLink} from "react-router-dom";
import {fetchAllPosts} from "../../services/postService.js";

function PostsList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts() {
      try {
        const postsData = await fetchAllPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    loadPosts();

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
