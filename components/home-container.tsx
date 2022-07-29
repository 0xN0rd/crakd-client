import React from 'react';
import styles from './home-container.module.css';

export default function HomeContainer({ children }: { children: React.ReactNode }) {
    return <div className={styles.container}>{children}</div>;
}