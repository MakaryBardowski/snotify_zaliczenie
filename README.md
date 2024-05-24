# snotify_zaliczenie
zaliczenie - aplikacja snotify
Aplikacja używa POST-a do zapisywania historii przy "zalogowaniu"
Aplikacja jest zabezpieczona (frontend + backend)

Wymagania:
Docker Desktop (uruchomiony)

sposób odpalania
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
