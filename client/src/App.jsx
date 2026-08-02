import { useState } from 'react'
import './App.css'
import PostPage from './features/post/PostPage'

function App() {

  return (
    <div className={"App-container"}>
      <h1>WELCOME TO REACT </h1>
      <p>npm create vite@latest"</p>
        <p>npm run dev"</p>

      <PostPage />

    </div>
  )
}

export default App
