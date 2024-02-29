import { useState } from "react";
import "./App.css";
import RadialDial from "./RadialDial";
import { MdOutlineFileUpload } from "react-icons/md";

function App() {
  const [dialValue, setDialValue] = useState(50);

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
          <RadialDial />
          <input
            type="range"
            name="range"
            id="hidden-range"
            min={-100}
            max={100}
            step={1}
            value={dialValue}
            onChange={(e) => {
              setDialValue(e.target.value);
              console.log(dialValue);
            }}
          />
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
