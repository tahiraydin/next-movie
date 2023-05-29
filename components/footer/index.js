import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="taydin" target="_blank">
        Tahir Aydın
      </Link>
    </footer>
  );
}

export default Footer;
