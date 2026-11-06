
import { NavLink } from "react-router-dom";
import {useState} from "react";

function NavBar() {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/posts"
          className="text-2xl font-bold text-white tracking-wide"
        >
          <span className="text-amber-400">✦</span> Post-Blog
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-3">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive
                  ? "bg-slate-700 text-amber-400"
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
                  ? "bg-slate-700 text-amber-400"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
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
