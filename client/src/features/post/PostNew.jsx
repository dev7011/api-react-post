import {useNavigate} from "react-router";
import PostForm from "./PostForm.jsx";
import {createPost} from "../../services/postService.js";

function PostNew() {
  const navigate = useNavigate()

  const handleCreatePost = async (postData) => {
    try {
      await createPost(postData)
      navigate("/posts")
    } catch (error) {
      console.error("Error creating post:", error)
    }
  }

  return (
    <>
      <PostForm
        headerText={"Add new post"}
        onSubmit={handleCreatePost}
        onCancel={() => navigate("/posts")}
      />
    </>
  )
}

export default PostNew
