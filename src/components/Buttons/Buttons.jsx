import React from "react";
import styles from "./buttons.module.css";
import Link from "next/link";

export default function Buttons({ text, url }) {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
}
