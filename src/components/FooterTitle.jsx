import { MdInfoOutline } from "react-icons/md";

function FooterTitle() {
  return (
    <section className="title-wrapper">
      <h1 className="title-logo">HRS</h1>
      <span className="title-about">
        by <strong>envi</strong>
      </span>
      <div className="tooltip-wrapper">
        <MdInfoOutline tabIndex={0} className="info-icon" />
        <ul className="tooltip">
          <li>1 - Upload track</li>
          <li>2 - Change speed</li>
          <li>3 - Repeat</li>
        </ul>
      </div>
    </section>
  );
}

export default FooterTitle;
