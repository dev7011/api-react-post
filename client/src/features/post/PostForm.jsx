
import { useState } from "react";

function PostForm({ post, headerText, onSubmit, onCancel }) {

  const [formData, setFormData] = useState(
    post || {
      title: "",
      body: "",
    }
  );

  function handleOnSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
  }

  function handleOnCancel() {
    setFormData({
      title: "",
      body: "",
    });
    onCancel();
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="mb-8 border-b border-slate-200 pb-5">
          <h2 className="text-3xl font-bold text-slate-800">
            {headerText}
          </h2>
          <p className="text-slate-500 mt-2">
            Create and manage your blog posts.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleOnSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Title
            </label>

            <input
              type="text"
              placeholder="Enter post title..."
              required
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
              className="w-full px-4 py-3 border border-slate-300 rounded-xl
              outline-none transition-all duration-300
              focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
            />
          </div>

          {/* Body */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Body
            </label>

            <textarea
              placeholder="Write your post here..."
              required
              rows="6"
              value={formData.body}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  body: e.target.value,
                })
              }
              className="w-full px-4 py-3 border border-slate-300 rounded-xl
              outline-none resize-none transition-all duration-300
              focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={handleOnCancel}
              className="px-6 py-3 rounded-xl font-semibold
              text-slate-600 bg-slate-100
              hover:bg-slate-200 transition-all duration-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-7 py-3 rounded-xl font-semibold
              text-white bg-amber-500 shadow-md
              hover:bg-amber-600 hover:-translate-y-0.5
              transition-all duration-300"
            >
              Save Post
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default PostForm;
