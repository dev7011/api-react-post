♦️installation tailwind 
    npm install tailwindcss @tailwindcss/vite
    👉 nano vite.config.js

        import tailwindcss from '@tailwindcss/vite'
        export default defineConfig({
          plugins: [
            react(),
            tailwindcss(),
          ],
        })          
    👉 nano src/index.css
          @import "tailwindcss";