import React from 'react';

const Modal = ({ setIsOpen }) => {
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
                        <input type="text" placeholder="Gamertag" />
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="submitBtn" onClick={() => setIsOpen(false)}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Modal;