import {useNavigate} from "react-router";
import PostForm from "./PostForm.jsx";
import { useParams } from "react-router-dom";
import usePost, { getPostUrl } from "../../services/usePost.js";

function PostEdit() {
  const navigate = useNavigate()
  const { id } = useParams()
  const post = usePost(id)

  const updatePost = async (postData) => {
    try {
      const url = getPostUrl(id)

      const response = await fetch(url, {
        headers: {"Content-Type": "application/json"},
        method: "PUT",
        body: JSON.stringify(postData)
      })

      if (!response.ok) {
        console.error("Post could not be updated")
        return
      }

      navigate("/posts")
    } catch (error) {
      console.error("Error updating post:", error)
    }
  }

  if (!post) return null

  return (
    <>
      <PostForm
        postId={post.id}
        title={post.title}
        body={post.body}
        onSubmit={updatePost}
        onCancel={() => navigate("/posts")}
      />
    </>
  )
}

export default PostEdit
