import {API_POST_URL} from "../../constants.js";
import {useNavigate} from "react-router";
import PostForm from "./PostForm.jsx";

function PostNew() {
  const navigate = useNavigate()

  const savePost = async (postData) => {
    try {
      const response = await fetch(API_POST_URL, {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(postData)
      })

      if (!response.ok) {
        console.error("Post could not be created")
        return
      }

      navigate("/posts")
    } catch (error) {
      console.error("Error creating post:", error)
    }
  }

  return (
    <>
      <PostForm
        onSubmit={savePost}
        onCancel={() => navigate("/posts")}
      />
    </>
  )
}

export default PostNew
