import {Link, NavLink} from "react-router-dom";

function PostItem(props){
  const { post, eventDeletePost } = props

  return  (
    <div
      className={"post-item"}>

      <Link to={`/posts/show/${post.id}`}
            className={"post-link"}>
        <h2> {post.id}. {post.title}</h2>
      </Link>

      <p> {post.body}</p>

      <div className={"footer-actions row-component"}>
        <button className={"btn btn-primary"}>
          <NavLink className={"btn btn-primary"}
                   to={`/posts/edit/${post.id}`}
          >
            Edit
          </NavLink>
        </button>

        <button
          className={"btn btn-danger"}
          onClick={() => eventDeletePost(post.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default PostItem;
