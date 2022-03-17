import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../index.module.scss";

function SingleMovie() {
  const { query } = useRouter();
  return (
    <>
      <nav>
        <Link href="/" passHref>
          <p>Home</p>
        </Link>
        <Link href="/about" passHref>
          <p>About Us</p>
        </Link>
      </nav>
      <div>
        <h1 className={styles.mainHeader}>movielister</h1>
        <h2>&apos{query.movieId}&apos Results:</h2>
        <h4>0 results</h4>
      </div>
    </>
  );
}

export default SingleMovie;
