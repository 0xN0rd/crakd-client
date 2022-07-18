import { ethers } from 'ethers';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer'
import EnterTournament from '../components/EnterTournament';
import styles from '../styles/Home.module.css'
import { CONTRACT_ADDRESS } from '../constants';

export default function Home() {
  const [currentAccount, setCurrentAccount] = useState(null);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const renderContent = () => {
    if (currentAccount) {
      return (
        <div className="connect-wallet-container">
          <button className="cta-button connect-wallet-button" onClick={connectWalletAction}>
            {currentAccount ? `Wallet ${currentAccount.substring(0, 6)}...${currentAccount.substring(currentAccount.length - 4)} is connected` : "Connect Wallet To Get Started"}
          </button>
        </div>
      );
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have MetaMask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);

        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account:", account);
          setCurrentAccount(account);
        } else {
          console.log("No authorized account found");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Head>
          <title>Crakd</title>
          <meta name="description" content="Welcome to the gaming revolution!" />
          <meta property="og:image" content="https://i.imgur.com/DgCanAu.png" />
          <meta property="og:url" content="https://crakd.gg" />
          <meta property="twitter:title" content="Crakd" />
          <meta property="twitter:description" content="Welcome to the gaming revolution!" />
          <meta property="twitter:image" content="https://i.imgur.com/DgCanAu.png" />
          <meta property="twitter:url" content="https://crakd.gg" />
          <link rel="icon" href="/favicon.ico" />
          <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
              rel="stylesheet"
          />
        </Head>

        <main>
          <Hero />

          <Features />

          <CTA />
        </main>

      </div>
      <Footer />
    </>
  )
}
