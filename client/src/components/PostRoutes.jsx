import PostsList from "../features/post/PostsList.jsx"
import PostNew from "../features/post/PostNew.jsx"

import {
  Routes,
  Route } from "react-router-dom"
function PostRoutes(){
  return(
    <Routes>
      <Route path="/posts" element={<PostsList />} />
      <Route path="/post/new" element={<PostNew />} />
    </Routes>
  )
}

export default PostRoutes