import PostsList from "../features/post/PostsList.jsx"
import PostNew from "../features/post/PostNew.jsx"
import PostEdit from "../features/post/PostEdit.jsx"
import PostDetail from "../features/post/PostDetail.jsx";

import {
  Routes,
  Route } from "react-router-dom"


function PostRoutes(){
  return(
    <Routes>
      <Route path="/posts" element={<PostsList />} />
      <Route path="/posts/new" element={<PostNew />} />
      <Route path="/posts/edit/:id" element={<PostEdit />} />
      <Route path="/posts/show/:id" element={<PostDetail />} />
    </Routes>
  )
}

export default PostRoutes