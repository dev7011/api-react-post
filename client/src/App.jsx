import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import PostsList from "./features/post/PostsList.jsx";
import PostCreate from "./features/post/PostCreate.jsx";
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
