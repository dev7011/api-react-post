
♦️STEP 1
    gem "jsbundling-rails"
    bundle install
    
    nano config/importmap.rb  
        #pin "dayjs", to: "https://ga.jspm.io/npm:dayjs@1.11.7/dayjs.min.js"
        ♦️ hier nicht benutzt und wurde die datei gelöscht
    
♦️ STEP 2: layout/application.html.erb

    <!%= javascript_importmap_tags %>
    <%= javascript_include_tag "application", "data-turbo-track": "reload", defer: true %>

♦️ STEP 3: Rails-Installer

    rails javascript:install:esbuild
    rm -rf .yarn .pnp.cjs yarn.lock 
    npm install

    nano app/javascript/controllers/index.js

        import { application } from "./application"
        import HelloController from "./hello_controller"
        application.register("hello", HelloController)

   nano Procfile.dev
        
        web: bin/rails server
        css: bin/rails tailwindcss:watch
        js: npm run build -- --watch

♦️ STEP 4: Install Stimulus, Turbo and Dayjs
        npm install @hotwired/stimulus @hotwired/turbo-rails dayjs --save

♦️ STEP 5: RUN TEST
    npm run build

🏀  FIX bin/dev
    pkill -f "bin/rails server"  # alte Prozesse killen
    rm -f tmp/pids/server.pid     # alte PID löschen
    bin/dev   

🏀 Nach dem GIT Clone

    bundle install && npm install && npm run build && bin/dev