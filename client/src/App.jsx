import { useState } from 'react'
import './App.css'
import PostPage from './features/post/PostPage'
import {BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className={"App-container"}>
        <PostPage />

      </div>
    </BrowserRouter>
  )
}

export default App
