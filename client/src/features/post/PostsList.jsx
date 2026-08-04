import {useEffect, useState} from "react"
import {NavLink} from "react-router-dom";
import {fetchAllPosts, deletePost} from "../../services/postService.js";


function PostsList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadAllPosts() {
      try {
        const postsData = await fetchAllPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    loadAllPosts();

  }, []);

  const handleDeletePost = async (postId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    }

    try {
      await deletePost(postId)
      setPosts((prev) => prev.filter((post) => post.id !== postId))
    } catch (error) {
      console.error("Error deleting post:", error)
    }
  }

  return (
    <>
      <h1>Posts List</h1>
      <p>List of posts will be displayed here.</p>

      { posts.map((post) => (
        <div key={post.id} className={"post-item"}>
          <h2> {post.id}. {post.title}</h2>
          <p>{post.body}</p>

          <div className={"footer-actions row-component"}>
            <button className={"btn btn-primary"}>
              <NavLink className={"btn btn-primary"}
                to={`/post/edit/${post.id}`}
              >
                Edit
              </NavLink>
            </button>

            <button
              className={"btn btn-danger"}
              onClick={() => handleDeletePost(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
        ))
      }
    </>
  )
}

export default PostsList
