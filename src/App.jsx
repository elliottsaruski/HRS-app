import "./App.css";
import Frame1 from "./assets/Frame 1.svg";
import { MdOutlineFileUpload } from "react-icons/md";

function App() {
  return (
    <main>
      <div className="app-wrapper">
        <header className="header-wrapper">
          <a href="">
            <MdOutlineFileUpload id="fileupload-icon" />
          </a>
        </header>
        <section className="waveform-wrapper">
          <canvas className="waveform"></canvas>
        </section>
        <section className="knob-wrapper">
          <img className="frame" src={Frame1} />
        </section>
        <section className="title-wrapper">
          <h1 className="title-logo">HRS</h1>
          <h4 className="title-about">by envi</h4>
        </section>
      </div>
    </main>
  );
}

export default App;
