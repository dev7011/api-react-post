import React from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './components/Counter'

// Mount React App when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('react-app')
  if (container) {
    const root = createRoot(container)
    root.render(<Counter />)
  }
})

