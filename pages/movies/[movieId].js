import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../index.module.scss"

const SingleMovie = () => {
    const {query} = useRouter();
    return (
        <>
          <nav>
              <Link href="/">
                  <a>Home</a>
              </Link>
              <Link href="/about">
                  <a>About Us</a>
              </Link>
          </nav>
          <div>
              <h1 className={styles.mainHeader}>movielister</h1>
              <h2>'{query.movieId}' Results:</h2>
              <h4>0 results</h4>
          </div>
        </>
    );
}

export default SingleMovie