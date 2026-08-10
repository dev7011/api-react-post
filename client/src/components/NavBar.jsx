import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <>
      {<NavLink
        className={"btn btn-primary"}
        to={"/posts/new"}>add post</NavLink>}

      {<NavLink
        className={"btn btn-primary"}
        to={"/posts"}>post list</NavLink>}
    </>
  )
}
export default NavBar