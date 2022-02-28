import Image from "next/image";
import Link from "next/link";

function About() {
  return (
      <>
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
        </nav>
        <div>
            <h1>about us</h1>
            <Image src="/peepo.gif" alt="Dancing peepo" width={60} height={60} />
        </div>
      </>
  );
}
export default About;
