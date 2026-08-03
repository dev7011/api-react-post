import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <>
      {<NavLink to={"/post/new"}>add post</NavLink>}
      {" | "}
      {<NavLink to={"/posts"}>post list</NavLink>}
    </>
  )
}
export default NavBar