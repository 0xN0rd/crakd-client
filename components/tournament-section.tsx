import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useContract } from 'wagmi';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { Tournament } from '../lib/types';
import { CONTRACT_ADDRESS, TWITTER_USER_NAME } from '../lib/constants'
import styles from './tournament-section.module.css';
import styleUtils from './utils.module.css';
import styleModal from './modal.module.css';
import dailyCashGame from '../utils/DailyCashGame.json';

type Props = {
    tournament: Tournament;
};

const USERS = [
    {
        gamertag: 'NortheastBread',
        score: 69,
    },
    {
        gamertag: 'DoubleLift',
        score: 54,
    },
    {
        gamertag: 'TheOddOne',
        score: 53,
    },
    {
        gamertag: 'Xerxe',
        score: 49,
    },
    {
        gamertag: 'Kikis',
        score: 45,
    },
    {
        gamertag: 'Dyrus',
        score: 40,
    },
    {
        gamertag: 'Sneaky',
        score: 39,
    },
    {
        gamertag: 'Faker',
        score: 38,
    },
]

export default function TournamentSection({ tournament }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [contract, setContract] = useState(null);
    const [entrants, setEntrants] = useState([]);

    const enterTournament = async () => {
        try {
            if (contract) {
                console.log("Entering tournament...");

                let amount = {value: ethers.utils.parseEther('0.01')};
                let currentEpoch = 0;
                
                const enterTournamentTxn = await contract.enterTournament(
                    currentEpoch,
                    inputValue,
                    amount
                );
                await enterTournamentTxn.wait();
                console.log(enterTournamentTxn);
            } else {
                console.log("Ethereum object does not not exist.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onInputChange = (event: any) => {
        const { value }  = event.target;
        setInputValue(value);
        setEntrants(value);
    };

    useEffect(() => {
        const { ethereum }: any = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contract: any = new ethers.Contract(
                tournament.contract,
                dailyCashGame.abi,
                signer
            );

            setContract(contract);
        } else {
            console.log('Ethereum object not found.');
        }
    }, []);

    const renderModal = () => {
        return (
            <>
                <div className={styleModal['dark-bg']} onClick={() => setIsOpen(false)} />
                <div className={styleModal.centered}>
                    <div className={styleModal.modal}>
                        <div className={styleModal['modal-header']}>
                            <h5 className={styleModal.heading}>Submit Entry</h5>
                        </div>
                        <button className={styleModal['close-btn']} onClick={() => setIsOpen(false)}>X</button>
                        <div className={styleModal['modal-content']}>
                            <span className={styleModal['modal-content-explainer']}>
                                Enter your League of Legends gamertag below:
                            </span>
                            <input
                                type="text"
                                placeholder="Enter Gamertag"
                                value={inputValue}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className={styleModal['modal-actions']}>
                            <div className={styleModal['actions-container']}>
                                <button className={styleModal['submit-btn']} onClick={() => enterTournament() && setIsOpen(false)}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <Link href='/tournaments'>
                <a className={styles.backlink}>
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        shapeRendering="geometricPrecision"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Back to tournaments
                </a>
            </Link>
            <div className={styles.layout}>
                <iframe
                    className={cn(styles.video, styleUtils.appear, styleUtils['appear-first'])}
                    allow="picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                    height="100%"
                    src={`https://www.youtube.com/embed/0vtawxVVH-Q`}
                    title='Top Kek'
                    width="100%"
                />
                <div className={styles.container}>
                    <div className={styles['name-and-logo']}>
                        <Image
                            alt={tournament.name}
                            src={tournament.logo.url}
                            className={styles.image}
                            loading="lazy"
                            title={tournament.name}
                            height={64}
                            width={64}
                        />
                        <h1 className={styles.name}>{tournament.name}</h1>
                    </div>
                    <p className={styles.description}>{tournament.description}</p>
                    <div className={styles['tournament-details']}>
                        <button className={styles.button} onClick={() => setIsOpen(true)}>Enter</button>
                        {isOpen && renderModal()}
                        <a
                            href={`https://twitter.com/${TWITTER_USER_NAME}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(styles.button, styles['button-link'])}
                        >
                            Follow on Twitter
                        </a>
                    </div>
                    <div className={styles.resources}>
                        <h2 className={styles.heading}>Leaderboard</h2>
                        {USERS.map(user => (
                            <button className={cn(styles.button, styles['button-resource'])}>
                                <span className={styles.truncate}>{user.gamertag}</span>
                                <span>: {user.score}</span>
                            </button> 
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
