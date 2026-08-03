import {useEffect, useState} from "react";

function PostForm({ mode = "create", title: initialTitle = "", body: initialBody = "", onSubmit, onCancel }) {

  const [title, setTitle] = useState(initialTitle)
  const [body, setBody] = useState(initialBody)
  const isEdit = mode === "edit";

  useEffect(() => {

  }, []);

  function handleOnSubmit(event) {
    event.preventDefault()
    onSubmit?.({ title, body })
  }

  function handleOnCancel() {
    setTitle(initialTitle)
    setBody(initialBody)
    onCancel?.()
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <h2 className={"row-component"}> {isEdit ? "Editing Post" : "Add new Post"} </h2>
        <div className={"row-component"}>
          <label>Title</label>
          <input
            className={"posts-title"}
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>

        <div className={"row-component"} >
          <label>Body</label>
          <input
            className={"posts-title"}
            value={body}
            onChange={(e) => { setBody(e.target.value) }}
          />
        </div>

        <button
          className={"btn btn-danger"}
          type={"button"}
          onClick={handleOnCancel}
        >
          abbrechen
        </button>
        <button
          className={"btn btn-primary"}
          type={"submit"}
        >
          save
        </button>

      </form>
    </>
  )
}

export default PostForm
