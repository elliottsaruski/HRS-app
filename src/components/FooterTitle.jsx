import { MdInfoOutline } from "react-icons/md";

function FooterTitle() {
  return (
    <section className="title-wrapper">
      <h1 className="title-logo">HRS</h1>
      <h4 className="title-about">by envi</h4>
      <MdInfoOutline id="info-icon" />
      <span>Upload song, change speed, repeat</span>
    </section>
  );
}

export default FooterTitle;
