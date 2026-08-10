import {useEffect, useState} from "react"
import {fetchAllPosts, deletePost} from "../../services/postService.js";
import PostItem from "./PostItem.jsx";


function PostsList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    (async function loadPosts() {
      try {
        const postsData = await fetchAllPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    })() // IIE
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
        <PostItem
          key={post.id}
          post= { post }
          eventDeletePost = {handleDeletePost} />
        )
      )}
    </>
  )
}

export default PostsList
