import "./App.css";
import FooterTitle from "./components/FooterTitle";
import WaveSurferComponent from "./components/WaveSurferComponent";

function App() {
  return (
    <main>
      <a href="https://soundcloud.com/envimusic">
        <img
          src="./src/assets/soundcloud-logo.png"
          alt=""
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
