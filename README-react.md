
♦️STEP 1: React-Dependencies hinzufügen
    nano package.json

    "dependencies": {
    "@hotwired/stimulus": "^3.2.2",
    "@hotwired/turbo-rails": "^8.0.23",
    "dayjs": "^1.11.21",
    "react": "^18.2.0",           // ← NEU
    "react-dom": "^18.2.0"        // ← NEU
    }
   
    
♦️ STEP 2: React-Komponente erstellen
      
    touch app/javascript/components/Counter.jsx
    nano app/javascript/components/Counter.jsx

        import React, { useState } from 'react'

        export default function Counter() {
        const [count, setCount] = useState(0)
        
        return (
        <div className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-10 shadow-lg text-white">
        <h1 className="text-4xl font-bold mb-6">React Counter Beispiel</h1>
        
              <div className="bg-white bg-opacity-20 rounded-lg p-8 mb-6 text-center">
                <p className="text-6xl font-bold">{count}</p>
              </div>
              
              <div className="flex gap-4">
                <button onClick={() => setCount(count - 1)} className="bg-red-500 hover:bg-red-600 ...">
                  - Verringern
                </button>
                <button onClick={() => setCount(0)} className="bg-gray-300 hover:bg-gray-400 ...">
                  ↻ Zurücksetzen
                </button>
                <button onClick={() => setCount(count + 1)} className="bg-green-500 hover:bg-green-600 ...">
                  + Erhöhen
                </button>
              </div>
            </div>
        )
        }

♦️ STEP 3: React-App Einstiegspunkt erstellen

    touch app/javascript/react_app.jsx

    import React from 'react'
    import { createRoot } from 'react-dom/client'
    import Counter from './components/Counter'
    
    document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('react-app')
        if (container) {
            const root = createRoot(container)
            root.render(<Counter />)
        }
    })    

    

♦️ STEP 4:  Rails-View home/index aktualisieren
       
    nano app/views/home/index.html.erb

    <div class="w-full">
      <div id="react-app"></div>
    </div>

♦️ STEP 5: javascriptz/packs/application.js
    
    nano app/javascript/application.js
    import "./react_app"

♦️ STEP 6: esbuild für JSX konfigurieren
    nano package.json

    "scripts": {
        "build": "esbuild app/javascript/*.* app/javascript/**/*.* --bundle --sourcemap --format=esm --outdir=app/assets/builds --public-path=/assets --loader:.js=jsx"
    }

♦️ STEP 7: RUN TEST
    npm install
    npm run build
        👉 Output: JavaScript-Bundles werden generiert    
        app/assets/builds/react_app.js - Main React Bundle
        app/assets/builds/application.js - Stimulus Bundle
        app/assets/builds/components/Counter.js - Counter-Komponente

    bin/dev