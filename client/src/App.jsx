import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import PostsList from "./features/post/PostsList.jsx";
import PostNew from "./features/post/PostNew.jsx";
import PostRoutes from "./components/PostRoutes.jsx";
import "./App.css"

function sum(a, b){
  return  a+b
}
export function total(a, b, c){
  return sum(sum(a, b), c)
}

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
