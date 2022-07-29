import styles from './connect-wallet-button.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import cn from 'classnames';
import React, { useState } from 'react';

const ConnectWalletButton = () => {

    return (
        <>
            <ConnectButton.Custom>
                {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    mounted,
                }) => {
                    return (
                        <div
                            {...(!mounted && {
                                'aria-hidden': true,
                                "style": {
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                },
                            })}
                        >
                            {(() => {
                                if (!mounted || !account || !chain) {
                                    return (
                                        <button className={cn(styles['cta-btn'])} onClick={openConnectModal} type="button">
                                            Connect
                                        </button>
                                    );
                                }

                                if (chain.unsupported) {
                                    return (
                                        <button className={cn(styles['cta-btn'])} onClick={openChainModal} type="button">
                                            Wrong Network
                                        </button>
                                    );
                                }

                                return (
                                    <div style={{ display: 'flex', gap: 12 }}>
                                        <button className={cn(styles['cta-btn'])} onClick={openChainModal} type="button" style={{ display: 'flex', alignItems: 'center' }}>
                                            {chain.hasIcon && (
                                                <div
                                                    style={{
                                                        background: chain.iconBackground,
                                                        width: 18,
                                                        height: 18,
                                                        borderRadius: 999,
                                                        overflow: 'hidden',
                                                        marginRight: 4,
                                                    }}
                                                >
                                                    {chain.iconUrl && (
                                                        <img alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} style={{ width: 18, height: 18 }} />
                                                    )}
                                                </div>
                                            )}
                                            {chain.name}
                                        </button>

                                        <button onClick={openAccountModal} className={cn(styles['cta-button'])} type="button">
                                            {account.displayName}
                                        </button>
                                    </div>
                                );
                            })()}
                        </div>
                    );
                }}
            </ConnectButton.Custom>
        </>
    );
};

export default ConnectWalletButton;