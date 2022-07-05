import Head from "next/head";
import styles from "../styles/Home.module.css";
import Quotes from "../components/MainQuotes";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elden Summary</title>
        <meta name="An Elden Ring UnOfficial App" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Quotes />
      <hr />
      <p className={styles.ERdesc}>
        <i>
          Elden Ring is a 2022 action role-playing game developed by
          FromSoftware and published by Bandai Namco Entertainment. It was
          directed by Hidetaka Miyazaki and made in collaboration with the
          fantasy novelist George R. R. Martin, who provided material for the
          setting. It was released for PlayStation 4, PlayStation 5, Windows,
          Xbox One, and Xbox Series X/S on February 25. Elden Ring is presented
          through a third-person perspective, with players freely roaming its
          interactive open world. Gameplay elements include combat featuring
          several types of weapons and magic spells, horseback riding, summons,
          and crafting. The game received critical acclaim, with praise for its
          open world and evolution of the Souls games, a related series by
          FromSoftware sharing the same core gameplay. Elden Ring sold more than
          13.4 million copies within five weeks of its release.
        </i>
      </p>
      <hr />
      <iframe
        className={styles.trailer}
        width="900"
        height="850"
        src="https://www.youtube.com/embed/AKXiKBnzpBQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
