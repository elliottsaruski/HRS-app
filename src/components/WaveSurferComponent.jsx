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
  // const [soundFile, setSoundFile] = useState({});

  const handleUpload = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // setRateValue(1);
    const file = inputRef.current.files[0];

    const reader = new FileReader();

    // Read File as an ArrayBuffer

    reader.onload = async function (evt) {
      // Create a Blob providing as first argument a typed array with the file buffer
      let blob = new window.Blob([new Uint8Array(evt.target.result)], {
        type: "audio/mp3",
      });

      // Load the blob into Wavesurfer
      await wavesurfer.loadBlob(blob);
    };
    reader.readAsArrayBuffer(file);
  };

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

  return (
    <>
      <section className="header-wrapper">
        <input
          aria-label="Upload Audio"
          type="file"
          id="file"
          name="file"
          accept=".mp3,.wav"
          ref={inputRef}
          onChange={(e) => handleUpload(e)}
        />
        <label id="file-label" htmlFor="file">
          <MdOutlineFileUpload
            onClick={() => {
              inputRef.current.click();
            }}
            id="fileupload-icon"
          />
        </label>
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
        <RadialDial setRateValue={setRateValue} />
      </section>
    </>
  );
}

export default WaveSurferComponent;
