import Image from "next/image";
import Link from "next/link";
import styles from "../index.module.scss";

function About() {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
      <div>
        <h1 className={styles.mainHeader}>movielister</h1>
        <h1>about us</h1>
        <Image src="/peepo.gif" alt="Dancing peepo" width={60} height={60} />
      </div>
    </>
  );
}
export default About;
