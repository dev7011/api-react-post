import {Link, NavLink} from "react-router-dom";

function PostItem(props){
  const { post, eventDeletePost } = props

  return  (
    <div
      className= {"bg-zinc-100 mb-2 py-4 px-2 rounded-b-sm"}>
      <Link to={`/posts/show/${post.id}`}>
        <h2 className= {"text-amber-600 hover:text-amber-700 font-bold py-2" }> {post.id}. {post.title}</h2>
      </Link>

      <p> {post.body}</p>

      <div className={"flex justify-end gap-1 text-amber-700 pe-2 hover:text-red-700"}>
        <NavLink to={`/posts/edit/${post.id}`}>
          <p className={"rounded-[5px] px-5 text-white font-bold bg-amber-500 hover:bg-amber-600"}> Edit </p>
        </NavLink>

        <button onClick={() => eventDeletePost(post.id)}>
          <p className={"rounded-[5px] px-5 text-white font-bold bg-amber-500 hover:bg-amber-600"}> Delete </p>
        </button>
      </div>
    </div>
  )
}

export default PostItem;
