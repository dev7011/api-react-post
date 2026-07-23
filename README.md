♦️1.  FONT-AWESOME-SASS INTEGRIEREN IN RAILS 7♦️

    gem "font-awesome-sass", "~> 6.5.1"
    bundle install

    👉  Datei app/assets/stylesheets/application.css in  app/assets/stylesheets/application.css.scss umbenennen 
        👉 und folgende Zeile hinzufügen:
            *= require_tree .
            *= require_self
            */
            @import "font-awesome";


🏀 FIX bei Fehlern beim Starten von Rails,
        
        rm -rf tmp/cache
        rm -rf public/assets
        bin/rails assets:clobber
        bin/rails tailwindcss:build 
        bin/dev ♦️ watch tailwindcss-rails