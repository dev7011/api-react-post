import {useEffect, useState} from "react"

function PostsList() {
  const [postsList] = useState([
    {
      id: 1,
      title: "title",
      body: "test test test test"
    }
  ])

  useEffect(() => {
    // Fetch posts from API and update state
    alert("112")
  }, []);

  return (
    <>
      <h1>Posts List</h1>
      <p>List of posts will be displayed here.</p>
      { postsList.map((post) => {
        <div key={post.id} className={"post-item inline-flex"}>
          <span> {`${post.title} body: ${post.body}`}</span>
        </div>
      })
      }
    </>
  )
}

export default PostsList
