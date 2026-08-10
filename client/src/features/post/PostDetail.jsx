import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchPost} from "../../services/postService.js";

function PostDetail() {
  const {id}= useParams()

  const [post, setPost] = useState(null)

  useEffect(() => {
    ( async function eventShow(){
      try {
        const post = await fetchPost(id)
        setPost(post)

      } catch (error) {
        console.error("Error fetching post:", error)
      }
    })()
  }, [])


  return (
    post && <>
      <h1>Posts Detail</h1>
      <h2>{`${post.id}. ${post.title}`}</h2>
      <p>Body-text</p>
      <p>{post.body}</p>
    </>
  )
}

export default PostDetail
