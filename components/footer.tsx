import cn from 'classnames';
import CrakdLogo from '@components/icons/icon-platform';
import styles from './footer.module.css'
import { SITE_NAME } from '@lib/constants';

export function CreatedByCrakd() {
    return (
        <a
            href="https://crakd.gg"
            className={cn(styles['footer-link'], styles['footer-logo'])}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className={styles['secondary-text']}>Created by </div>
            <CrakdLogo color={'#fff'} />
            <span style={{ color: '#fff' }}>Crakd</span>
        </a>
    );
}

export default function Footer() {
    return (
        <footer className={cn(styles.footer)}>
            <div className={styles['footer-legal']}>
                <div className={styles['footer-hostedby']}>
                    <CreatedByCrakd />
                    <div className={styles['footer-separator']} />
                </div>
                <div className={styles['footer-copyright']}>
                    Copyright © {`${new Date().getFullYear()} `} {`${SITE_NAME}.`} All rights reserved.
                </div>
            </div>
        </footer>
    );
}