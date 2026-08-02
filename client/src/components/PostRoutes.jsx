import PostsList from "../features/post/PostsList"
import Create from "../features/post/Create"

import {
  Routes,
  Route } from "react-router-dom"
function PostRoutes(){
  return(
   <Routes>
     <Route path={"/post/new"} element={<Create />} />
     <Route path={"/posts"} element={<PostsList />} />
   </Routes>
  )
}

export default PostRoutes