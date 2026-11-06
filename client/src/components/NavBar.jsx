
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/posts"
          className="text-2xl font-bold text-white tracking-wide"
        >
          <span className="text-cyan-400">✦</span> MyBlog
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-3">

          <NavLink
            to="/posts"
            end
            className={({ isActive }) =>
              `px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive
                  ? "bg-slate-700 text-cyan-400"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Post List
          </NavLink>

          <NavLink
            to="/posts/new"
            className={({ isActive }) =>
              `px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-cyan-600 text-white"
                  : "bg-cyan-500 text-white hover:bg-cyan-600 hover:-translate-y-0.5 shadow-md"
              }`
            }
          >
            + Add Post
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default NavBar;
