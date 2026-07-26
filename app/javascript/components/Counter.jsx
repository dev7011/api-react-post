import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-10 shadow-lg text-white">
      <h1 className="text-4xl font-bold mb-6">React Counter Beispiel</h1>

      <div className="bg-gray-400 bg-opacity-20 rounded-lg p-8 mb-6 text-center backdrop-blur-sm">
        <p className="text-lg mb-4 text-red-600">Aktueller Zählerstand:</p>
        <p className="text-6xl font-bold text-blue-800">{count}</p>
      </div>

      <div className="flex gap-4 flex-wrap">
        <button
          onClick={decrement}
          className="flex-1 min-w-32 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
        >
          - Verringern
        </button>

        <button
          onClick={reset}
          className="flex-1 min-w-32 bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
        >
          ↻ Zurücksetzen
        </button>

        <button
          onClick={increment}
          className="flex-1 min-w-32 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
        >
          + Erhöhen
        </button>
      </div>

      <p className="text-sm mt-6 text-gray-100">
        Dies ist ein einfaches React-Komponenten-Beispiel mit useState Hooks
      </p>
    </div>
  )
}

