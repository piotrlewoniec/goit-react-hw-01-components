import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Użyj tego szablonu projektu React jako punktu wyjścia dla swojej aplikacji. https://github.com/goitacademy/react-homework-template#readme
// Utworzone zostało repozytorium goit-react-hw-01-components.
// Komponenty wszystkich zadań renderują się na jednej stronie, wewnątrz wspólnego kontenera – komponentu root <App>.
// W oddanym zadaniu domowym znajduje się odnośnik do repozytorium z kodem źródłowym projektu.
// W nagłówku repozytorium znajduje się odnośnik do rzeczywistej strony na GitHub pages.
// Po wejściu na stronę roboczą (GitHub pages) zadania, na konsoli nie ma błędów i ostrzeżeń.
// Dla każdego komponentu istnieje oddzielny folder z plikiem komponentu React i plikiem stylów.
// Dla wszystkich komponentów opisane są propTypes.
// Wszystko, czego komponent żąda w postaci propsów przekazywane jest do niego przy wywołaniu.
// Nazwy komponentów są zrozumiałe, opisowe.
// Kod JS jest czysty i zrozumiały, wykorzystany został Prettier.
// Stylizacja wykonana została CSS-modułami lub Styled Components, dlatego klasy w ostatecznym DOM będą różnić się od przykładów.
// Wystarczy bazowa stylizacja aplikacji. Powinna przede wszystkim działać, a dopiero później ładnie wyglądać. Przeznacz 20% czasu na CSS i 80% na JS.
