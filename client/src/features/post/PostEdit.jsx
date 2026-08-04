import {useNavigate} from "react-router";
import PostForm from "./PostForm.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { updatePost, fetchPost } from "../../services/postService.js";

function PostEdit() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetchPost(id)
      .then((data) => setPost(data))
      .catch(console.error)
  }, [id])

  const handleUpdatePost = async (postData) => {
    try {
      await updatePost(postData, id)
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
        onSubmit={handleUpdatePost}
        onCancel={() => navigate("/posts")}
      />
    </>
  )
}

export default PostEdit
