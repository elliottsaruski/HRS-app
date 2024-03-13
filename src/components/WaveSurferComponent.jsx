import { useRef, useState } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";

import RadialDial from "./RadialDial";

function WaveSurferComponent() {
  const waveSurferRef = useRef(null);
  const inputRef = useRef(null);

  const [resetRotateValue, setResetRotateValue] = useState(false); // Add state to trigger reset

  const [rateValue, setRateValue] = useState(1);
  const [bypass, setBypass] = useState(false);

  const { wavesurfer, isPlaying } = useWavesurfer({
    container: waveSurferRef,
    height: "auto",
    waveColor: "hsl(0, 0%, 88%)",
    progressColor: "hsl(196, 99%, 49%)",
    barHeight: ".8",
    barWidth: 3,
    cursorWidth: "3",
    barGap: 1,
    dragToSeek: true,
    audioRate: 1,
  });

  const handleUpload = (e) => {
    e.preventDefault();
    // e.stopPropagation();

    const file = inputRef.current.files[0];
    const reader = new FileReader();

    if (file) {
      // Read File as an ArrayBuffer
      reader.readAsArrayBuffer(file);
    }

    reader.onload = (evt) => {
      // Create a Blob providing as first argument a typed array with the file buffer
      let blob = new window.Blob([new Uint8Array(evt.target.result)], {
        type: "audio/wav",
      });

      // Load the blob into Wavesurfer
      wavesurfer.loadBlob(blob);
      setBypass(false);
      setRateValue(1);
      setResetRotateValue(true); // Trigger reset of dial rotation
    };

    reader.onerror = (evt) => {
      console.log("error loading file" + evt.target.result);
      reader.abort();
    };
  };

  const onPlayPause = () => {
    wavesurfer.playPause();
  };

  const handlePlaybackRate = () => {
    if (bypass === false) {
      setRateValue(rateValue);
      wavesurfer.setPlaybackRate(rateValue, false);
    }
  };

  const handleBypass = () => {
    const pbrate = wavesurfer.getPlaybackRate();
    if (pbrate !== 1 && isPlaying) {
      setBypass(!bypass);
      bypass
        ? wavesurfer.setPlaybackRate(rateValue, false)
        : wavesurfer.setPlaybackRate(1.000001, false);
    } else {
      return;
    }
  };

  const resetRotate = () => {
    setResetRotateValue(false);
  };

  return (
    <>
      <section
        className="header-wrapper"
        onClick={() => {
          inputRef.current.click();
        }}>
        <input
          aria-label="Upload Audio"
          type="file"
          id="file"
          name="file"
          accept=".wav"
          ref={inputRef}
          onChange={handleUpload}
        />
        <div id="file-label" htmlFor="file">
          <MdOutlineFileUpload id="fileupload-icon" />
        </div>
      </section>
      <section className="waveform-wrapper">
        <div
          tabIndex={0}
          className="waveform"
          aria-label="waveform"
          ref={waveSurferRef}></div>
      </section>
      <hr></hr>
      <button
        tabIndex={0}
        id="play-pause-btn"
        aria-label="play-pause-button"
        className={isPlaying ? "playing-on" : "playing-off"}
        onClick={onPlayPause}>
        <FaPlay />
        <span className="tooltip">{isPlaying ? "pause" : "play"}</span>
      </button>
      <button
        tabIndex={0}
        id="bypass-btn"
        aria-label="bypass-button"
        className={bypass ? "bypass-on" : "bypass-off"}
        onClick={handleBypass}>
        <FaPowerOff />
        <span className="tooltip">bypass</span>
      </button>
      <section
        tabIndex={0}
        className="knob-wrapper"
        onPointerDown={handlePlaybackRate}
        onPointerUp={handlePlaybackRate}>
        <RadialDial
          rateValue={rateValue}
          setRateValue={setRateValue}
          resetRotateValue={resetRotateValue}
          resetRotate={resetRotate}
        />
      </section>
    </>
  );
}

export default WaveSurferComponent;
