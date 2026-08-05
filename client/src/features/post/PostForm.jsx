import {useEffect, useState} from "react";

function PostForm({ post , headerText, onSubmit, onCancel }) {

  const [formData, setFormData] = useState(
    post || {
      title: "",
      body: "",
    }
  );

  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  function handleOnSubmit(event) {
    event.preventDefault()

    onSubmit( formData )
  }

  function handleOnCancel() {
    setFormData({
      title: "",
      body: "",
    });
    onCancel()
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <h2 className={"row-component"}> {headerText} </h2>
        <div className={"row-component bg-red-700"}>
          <label>Title</label>
          <input
            className={"posts-title"}
            value={formData.title}
            onChange={(e) => {
              setFormData({
                ...formData,
                title: e.target.value})
            }}
          />
        </div>

        <div className={"row-component"} >
          <label>Body</label>
          <textarea
            className={"posts-body"}
            value={formData.body}
            onChange={(e) => {
              setFormData({
                ...formData,
                body: e.target.value})
            }}
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
