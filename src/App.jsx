import "./App.css";
import FooterTitle from "./components/FooterTitle";
import WaveSurferComponent from "./components/WaveSurferComponent";

function App() {
  return (
    <main>
      <div className="app-wrapper">
        <WaveSurferComponent />
        <FooterTitle />
      </div>
    </main>
  );
}

export default App;
