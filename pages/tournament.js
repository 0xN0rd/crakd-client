import { ethers } from 'ethers';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav/Nav';
import Leaderboard from '../components/Leaderboard';
import { CONTRACT_ADDRESS } from '../constants';
import crakd from '../utils/CrakdTournament.json';
import styles from '../styles/Home.module.css';

import TournamentPage from '../components/Tournament/Tournament';
import Footer from '../components/Footer/Footer';

export default function Tournament() {
    return (
        <>
            <Nav />
            <TournamentPage />
            <Footer />
        </>
    )
};

{/*
export default function Tournament() {
    const [contract, setContract] = useState(null);
    const [entrants, setEntrants] = useState([]);

    useEffect(() => {
        const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                CONTRACT_ADDRESS,
                crakd.abi,
                signer
            );

            setContract(contract);
        } else {
            console.log('Ethereum object not found.');
        }
    }, []);

    useEffect(() => {
        const getEntrants = async () => {
            try {
                if (contract) {
                    let currentEpoch = 0;
    
                    const getEntrantsTxn = await contract.getEntrants(currentEpoch);
                    
                    console.log(getEntrantsTxn);
                    setEntrants(getEntrantsTxn);
                }
            } catch (error) {
                console.error('Something went wrong fetching entrants:', error);
            }
        };

        if (contract) {
            getEntrants();
        }
    }, [contract]);

    const renderEntrants = () => {
        return entrants.map((entrant) => (
            <div key={entrant}>
                <strong>{entrant}</strong>
            </div>
        ));
    };

    console.log(entrants);

    return (
        <>
            <Nav />
            <div className={styles.container}>
                <Head>
                    <title>🕹 Crakd</title>
                    <meta name="description" content="Welcome to the gaming revolution!" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main}>
                    <h1 className={styles.title}>
                        LoL Tournament
                    </h1>

                    <h2 className={styles.title}>
                        <span>Competitors</span>
                    </h2>

                    <br />

                    <div className="enter-tournament-container">
                        {renderEntrants()}
                    </div>

                    <br />

                    <Leaderboard />
                </main>
            </div>
        </>
    )
}
*/}