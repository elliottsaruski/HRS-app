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
          <li>
            <strong>1 </strong>- Upload audio
          </li>
          <li>
            <strong>2 </strong> - Change speed
          </li>
          <li>
            <strong>3 </strong> - Repeat
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FooterTitle;
