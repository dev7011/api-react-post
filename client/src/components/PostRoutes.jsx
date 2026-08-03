import PostsList from "../features/post/PostsList.jsx"
import PostNew from "../features/post/PostNew.jsx"
import PostEdit from "../features/post/PostEdit.jsx"

import {
  Routes,
  Route } from "react-router-dom"
function PostRoutes(){
  return(
    <Routes>
      <Route path="/posts" element={<PostsList />} />
      <Route path="/post/new" element={<PostNew />} />
      <Route path="/post/edit/:id" element={<PostEdit />} />
    </Routes>
  )
}

export default PostRoutes