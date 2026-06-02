import "./App.css";
import FooterTitle from "./components/FooterTitle";
import WaveSurferComponent from "./components/WaveSurferComponent";
import soundcloudLogo from "./assets/soundcloud-logo.png";

function App() {
  return (
    <main>
      <a href="https://soundcloud.com/envimusic">
        <img
          src={soundcloudLogo}
          alt="soundcloud logo"
          className="soundcloud-logo"
        />
      </a>
      <div className="app-wrapper">
        <WaveSurferComponent />
        <FooterTitle />
      </div>
    </main>
  );
}

export default App;
