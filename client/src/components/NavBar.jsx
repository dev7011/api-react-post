import {Routes, Route }from "react-router-dom";
import PostsList from "../features/post/PostsList";
import PostDetail from "../features/post/PostDetail";
import { useParams,
  Link,
} from "react-router-dom";

function NavBar(){
  return (
    <>
      {<Link to={"/post/new"}>add post</Link>}
      {" | "}
      {<Link to={"/posts"}>post list</Link>}
    </>
  )
}
export default NavBar