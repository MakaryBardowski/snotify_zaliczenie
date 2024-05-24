import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import logoRed from './logoRed.png';

import './Details.css';
import { useNavigate } from 'react-router-dom';






function App() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const backToLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };



  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <img id="logo" 
          src={isHovered ? logoRed : logo}
          draggable='false'
          />
        </header>



        <main className="main-content">
          <p className="whitetext" 
          oncopy="return false"
          style={{ visibility: isHovered ? 'hidden' : 'visible' }}

          >Na tej stronie użyto następujących zabezpieczeń (z poziomu frontendu + backendu): <br />
            1. Logo strony jest niezaznaczalne oraz nieprzeciągalne. Ten tekst również.<br />
            (css: user-select: none, atrybut html draggable = 'false') <br />
            2. Albumów otrzymanych z endpointu <span className='redTextSpan'>/albums</span> nie można zaznaczyć ani otworzyc menu contextowego <br />
            (handlery eventów, m.in onContextMenu = {<span className='redTextSpan'>funkcja_wyswietlajaca_ostrzeżenie_i_blokująca_menu</span>}) <br />
            3. Różne elementy mają różne poziomy zabezpieczeń (np. logo jest niezaznaczalne, ale pozwala otworzyc menu contextowe) <br />
            4. <span className='redTextSpan'>Po najechaniu na przycisk ten tekst zniknie, a logo strony zmieni się.</span> <br/>
            <br/>
             Możliwe jest dalsze rozbudowanie zabezpieczeń z poziomu frontendu<br/>
             Np czyszczenie schowka, ukrywanie js poprzez inne przedstawienie znaków etc. <br/>
             Należy zaznaczyć, że ochrona backendu jest równie istotna - z tego tytułu <br/>
             wprowadzono zabezpieczenia również na poziomie backendu.
            <br />
            <br />
            <br />
            <br />
            <span className='redTextSpan'>
              Projekt wykorzystuje dockera (stawia bazę danych, później backend i na końcu frontend). <br />
              Skonteneryzowany backend zapewnia względne bezpieczeństwo dla maszyny hosta <br />
              (kontenery mają wyzanczone grupy kontrolne i przestrzenie nazw określające dostępne zasoby). <br />
              Zabezpieczenie backendu można złamać nieumiejętnie używając bindowania ścieżek.<br />
              Backend zabezpieczony jest przed SQL injection (wykorzystane natywne mechanizmy ORM Hibernate) <br />
              Backend posiada także własną walidację danych (z tego tytułu ochrona frontendu nie jest aż tak istotna) <br />
              <br/>
              <br/>
              <br/>
              Dodatkowo, porty kontenera backendu i bazy danych powinny być wystawiane jedynie <br/>
              dla sieci dockerowej a nie dla hosta - co uniemożliwiłoby bezpośredni dostęp do endpointów <br/>
              backendu, co dałoby nam kontrolę nad tym w jaki sposób nasze API jest konsumowane. <br/>
              Niezastosowanie tego zabezpieczenia jest świadomym zabiegiem - pozwala nam przetestować <br/>
              endpointy za pomocą narzędzi (np. postman) bez konieczności znania dockera, aby odpalić shella <br/>w kontenerze.
              
            </span>
          </p>
          <button type="button" className="okbutton" onClick={backToLogin}
            onMouseEnter={() => setIsHovered(true)}
          >Rozumiem</button>

        </main>


        <footer className="footer">Zaliczenie Makary Bardowski 215 IC </footer>
      </div>
    </div>
  );
}

export default App;
