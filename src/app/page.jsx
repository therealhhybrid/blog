import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Buttons from "@/components/Buttons/Buttons";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          {" "}
          Better design for your digital products.{" "}
        </h1>
        <p className={styles.desc}>
          {" "}
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Buttons url="/portfolio" text="See Our works" />
      </div>

      <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.img} />
      </div>
    </div>
  );
}
