import React, { FC } from "react";
import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={styles.Footer} data-testid="Footer">
    <footer
      style={{
        textAlign: "center",
        background: "#f1f1f1",
      }}
    >
      © Author: Santosh Kumar Vollala;
      <span style={{ marginLeft: "3rem" }}></span> Year: 2023;
      <span style={{ marginLeft: "3rem" }}></span>
      For Feedback: <a href="mailto:santhuvollala.js@gmail.com">Send Email</a>
      <br />
      <strong>Advisory:</strong> Information relates to the law prevailing in the year of
      publication/ as indicated . Viewers are advised to ascertain the correct
      position/prevailing law before relying upon any document.​​​
      <br />
      <strong>Disclaimer:</strong> The above calculator is only to enable public to have a quick
      and an easy access to basic tax calculation and does not purport to give
      correct tax calculation in all circumstances. It is advised that for
      filing of returns the exact calculation may be made as per the provisions
      contained in the relevant Acts, Rules etc.
    </footer>
  </div>
);

export default Footer;
