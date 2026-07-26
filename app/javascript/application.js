// Entrypoint for the JS bundler (esbuild). We now use npm/jsbundling-rails instead of importmap.
import "@hotwired/turbo-rails"
import "./controllers"
import dayjs from "dayjs"

// Example usage: log current time using dayjs
console.log("dayjs loaded:", dayjs().format())
