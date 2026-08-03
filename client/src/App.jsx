import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import PostsList from "./features/post/PostsList.jsx";
import PostNew from "./features/post/PostNew.jsx";
import PostRoutes from "./components/PostRoutes.jsx";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className={"App-container"}>
        <NavBar />
        <PostRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
