import { useRef, useState } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";

import RadialDial from "./RadialDial";

function WaveSurferComponent() {
  const waveSurferRef = useRef();
  const inputRef = useRef();

  const [rateValue, setRateValue] = useState(1);
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
      setRateValue(1);

      // console.log(wavesurfer);
    };

    // Read File as an ArrayBuffer
    reader.readAsArrayBuffer(file);
  };

  const { wavesurfer, isPlaying } = useWavesurfer({
    container: waveSurferRef,
    height: "auto",
    waveColor: "hsl(0, 0%, 88%)",
    progressColor: "hsl(196, 99%, 49%)",
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
    setBypass((prev) => !prev);
    bypass
      ? wavesurfer.setPlaybackRate(rateValue, false)
      : wavesurfer.setPlaybackRate(1, false);
  };

  return (
    <>
      <section className="header-wrapper">
        <input
          type="file"
          id="file-input"
          name="file"
          accept=".mp3,.wav"
          ref={inputRef}
          onChange={(e) => handleUpload(e)}
        />
        <label
          htmlFor="file"
          onClick={() => {
            inputRef.current.click();
          }}>
          <MdOutlineFileUpload id="fileupload-icon" />
        </label>
      </section>
      <section className="waveform-wrapper">
        <div
          className="waveform"
          aria-label="waveform"
          ref={waveSurferRef}></div>
      </section>
      <section
        className="knob-wrapper"
        onPointerDown={handlePlaybackRate}
        onPointerUp={handlePlaybackRate}>
        <RadialDial setRateValue={setRateValue} />
      </section>
      <button
        id="play-pause-btn"
        aria-label="play-pause-button"
        className={isPlaying ? "playing-on" : "playing-off"}
        onClick={onPlayPause}>
        <FaPlay />
      </button>
      <button
        id="bypass-btn"
        aria-label="bypass-button"
        className={bypass ? "bypass-on" : "bypass-off"}
        onClick={handleBypass}>
        <FaPowerOff />
      </button>
    </>
  );
}

export default WaveSurferComponent;
