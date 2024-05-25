# snotify_zaliczenie
zaliczenie - aplikacja snotify

Wymagania:
Docker Desktop (uruchomiony)

sposób uruchamiania:

      git clone https://github.com/MakaryBardowski/snotify_zaliczenie.git
      cd <sciezka_do_folderu_z_plikiem_compose.yaml>
      docker compose up

należy odczekać aż logi przestaną się pojawiać (aplikacja zbuduje się w pełni)

Aplikacja składa się z 3 kontenerów:
1) frontend
2) backend
3) baza danych

opis projektu jest dostępny z poziomu podstrony loginu:

     localhost:3000

Po wyszukaniu danego adresu z poziomu przeglądarki nastąpi automatyczne przekierowanie na localhost:3000/login

"login" przyjmuje dowolną nazwę użytkownika i dowolne hasło. 
Po "zalogowaniu" metodą POST wysyłana jest nazwa użytkownika, a backend zapisuje tę nazwę oraz datę zalogowania do bazy danych

Aplikacja jest zabezpieczona  (wybiórczo, frontend + backend).

dostępne endpointy

      http://localhost:8080/albums/remote/<id_albumu_z_jsonplaceholder> --- GET (backend wysyła requesta do jsonplaceholder i zwraca wynik)

      http://localhost:8080/albums/<id_albumu_z_bazy_danych_backendu> --- GET (pokazuje album o wybranym id z bazy danych, mamy 12 albumow)

      http://localhost:8080/albums/all --- GET (pokazuje wszystkie albumy z bazy danych)

      http://localhost:8080/utility/author --- GET (zwraca imie i nazwisko autora)

      http://localhost:8080/utility/eventHistory --- GET (zwraca historie logowania)

      http://localhost:8080/utility/saveLogin --- POST (zapisuje login, wyciągając nazwę użytkownika z ciała requesta. Data brana jest po stronie backendu w momencie alokacji pamieci dla zapisywanego obiektu)
