import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
        <a>  Welcome to ArbiFlip!</a>
        </h1>

        <p className={styles.description}>
         
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.grid}>
          <a href="https://portal.arbitrum.io/" className={styles.card}>
            <h2>Portal &rarr;</h2>
            <p>
              Arbitrum One Portal
            </p>
          </a>

          <a href="https://chain.link/vrf" className={styles.card}>
            <h2>Play &rarr;</h2>
            <p>
             Start flipping and winning!
            </p>
          </a>

          <a
            href="https://nftearth.exchange"
            className={styles.card}
          >
            <h2>NFTEarth Metaverse &rarr;</h2>
            <p>
            Discover the blossoming ecosystem of NFTs on Layer2 at NFTEarth
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
