import React, { FC } from 'react';
import styles from './Footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={styles.Footer} data-testid="Footer">
    <footer
        style={{
          textAlign: "center",
          fontWeight: "bold",
          background: "#f1f1f1",
        }}
      >
        © Author: Santosh Kumar Vollala;
        <span style={{ marginLeft: "3rem" }}></span> Year: 2023;
        <span style={{ marginLeft: "3rem" }}></span>
        For Feedback: <a href="mailto:santhuvollala.js@gmail.com">Send Email</a>
      </footer>
  </div>
);

export default Footer;
