function SpeedFader({ rateValue, handlePlaybackRate }) {
  return (
    <>
      <input
        id="fader-input"
        type="range"
        value={rateValue}
        min={0.25}
        max={1.75}
        step={0.05}
        defaultValue={1}
        onChange={handlePlaybackRate}
      />
    </>
  );
}

export default SpeedFader;
