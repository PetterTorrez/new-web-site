import logo_museum from '../src/assets/logo_museum.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="header-text">
          Harvard Museum
        </p>
      </header>

      <body className="App-body">
        <a
          className="App-link"
          href="https://drive.google.com/file/d/1GiEIQocqBMhKiEpP5vhH9PLNYk-VUlhV"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <img src={logo_museum} className="App-logo" alt="logo" />
        </a>

        <p className="text">
          Download the museum app in the image above.
        </p>
      </body>

      <footer className="App-footer">
        <p className="footer-text">
          Pedro Torres Mobile Developer
        </p>
        <a
          className="App-link"
          href="https://github.com/PetterTorrez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="footer-text">
            Personal Github
          </p>
        </a>

        <a
          className="App-link"
          href="https://github.com/PetterTorrez/HarvardMuseum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="footer-text">
            App repository
          </p>
        </a>
      </footer>
    </div>
  );
}

export default App;
