import { useRef, useState } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import { MdOutlineFileUpload } from "react-icons/md";
import RadialDial from "./RadialDial";

function WaveSurferComponent() {
  const waveSurferRef = useRef();
  const inputRef = useRef();

  const [rateValue, setRateValue] = useState(undefined);
  const [bypass, setBypass] = useState(false);

  const handleUpload = (e) => {
    e.preventDefault();
    const file = inputRef.current.files[0];

    const reader = new FileReader();

    reader.onload = function (evt) {
      // Create a Blob providing as first argument a typed array with the file buffer
      let blob = new window.Blob([new Uint8Array(evt.target.result)], {
        type: "audio/wav",
      });

      // Load the blob into Wavesurfer
      wavesurfer.loadBlob(blob);

      // console.log(wavesurfer);
    };

    // Read File as an ArrayBuffer
    reader.readAsArrayBuffer(file);
  };

  const { wavesurfer, isPlaying } = useWavesurfer({
    container: waveSurferRef,
    height: "auto",
    waveColor: "rgb(0, 0, 0)",
    progressColor: "rgb(0, 0, 100)",
    barHeight: ".5",
    cursorWidth: "2",
  });

  const onPlayPause = () => {
    wavesurfer.playPause();
  };

  const handlePlaybackRate = () => {
    wavesurfer.setPlaybackRate(rateValue, false);
  };

  const handleBypass = () => {
    setBypass(!bypass);
    bypass
      ? wavesurfer.setPlaybackRate(1, false)
      : wavesurfer.setPlaybackRate(rateValue, false);
  };

  return (
    <>
      <header className="header-wrapper">
        <a href="">
          <MdOutlineFileUpload id="fileupload-icon" />
          <input
            type="file"
            accept=".mp3,.wav"
            ref={inputRef}
            onChange={(e) => handleUpload(e)}
          />
        </a>
      </header>
      <section className="waveform-wrapper">
        <div className="waveform" ref={waveSurferRef}></div>
      </section>
      <section className="controls-wrapper">
        <button id="play-pause-btn" onClick={onPlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button id="bypass-btn" onClick={handleBypass}>
          bypass
        </button>
      </section>
      {rateValue}
      <section
        className="knob-wrapper"
        onPointerDown={handlePlaybackRate}
        onPointerUp={handlePlaybackRate}>
        <RadialDial setRateValue={setRateValue} />
      </section>
    </>
  );
}

export default WaveSurferComponent;
