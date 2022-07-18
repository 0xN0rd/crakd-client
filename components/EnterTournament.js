import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import LoadingIndicator from '../components/LoadingIndicator';
import { CONTRACT_ADDRESS } from '../constants';
import crakd from '../utils/CrakdTournament.json';
import Link from 'next/link';

const EnterTournament = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [contract, setContract] = useState(null);
    const [enteringTournament, setEnteringTournament] = useState(false);
    const [entrants, setEntrants] = useState([]);

    const enterTournament = async () => {
        try {
            if (contract) {
                setEnteringTournament(true);
                console.log('Entering tournament...');

                let amount = {value: ethers.utils.parseEther('0.01')};
                let currentEpoch = 0;
                let addEntrants = [];

                const enterTournamentTxn = await contract.enterTournament(
                    currentEpoch,
                    inputValue,
                    amount
                );
                await enterTournamentTxn.wait();
                console.log(enterTournamentTxn);

                addEntrants.push(inputValue);
                setEntrants([addEntrants]);
                setEnteringTournament(false);
            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log(error);
            setEnteringTournament(false);
        }
    };

    const onInputChange = (event) => {
        const { value } = event.target;
        setInputValue(value);
    };

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

    const renderModal = () => {
        return (
            <>
                <div className="darkBG" onClick={() => setIsOpen(false)} />
                <div className="centered">
                    <div className="modal">
                        <div className="modalHeader">
                            <h5 className="heading">Submit Entry</h5>
                        </div>
                        <button className="closeBtn" onClick={() => setIsOpen(false)}>X</button>
                        <div className="modalContent">
                            <span className="modalContentExplainer">
                                <code>Enter your League of Legends gamertag below:</code>
                            </span>
                            <input
                                type="text"
                                placeholder="Enter Gamertag"
                                value={inputValue}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="modalActions">
                            <div className="actionsContainer">
                                <button className="submitBtn" onClick={() => enterTournament() && setIsOpen(false)}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    };

    const renderTournaments = () => {
        <div className="tournament-item">
            <div className="name-container">
                <p>LoL Tournament</p>
            </div>
            <img src="http://www.personal.psu.edu/users/d/j/djw5616/League/LoL.jpg" alt="tournament-banner" />
            <button type="button" className="tournament-enter-button" onClick={() => setIsOpen(true)}>Enter</button>
        </div>
    };

    return (
        <div className="enter-tournament-container">
            <h2>Enter the next tournament. Get Crakd.</h2>
            <div className="tournament-grid">
                <div className="tournament-item">
                    <div className="name-container">
                        <p>LoL Tournament</p>
                    </div>
                    <img src="https://miro.medium.com/max/1200/1*wcjvmgRQkiGTTLme_VgreQ.jpeg" alt="tournament-banner" />
                    <button type="button" className="tournament-enter-button" onClick={() => setIsOpen(true)}>Enter</button>
                    {isOpen && renderModal()}
                </div>
            </div>
            {enteringTournament && (
                <div className="loading">
                    <div className="indicator">
                        <LoadingIndicator />
                        <p><code>Entering tournament...</code></p>
                    </div>
                </div>
            )}
            <Link href="/tournament">
                <button type="button" className="go-button">Go to Tournament</button>
            </Link>
        </div>
    )
}

export default EnterTournament;