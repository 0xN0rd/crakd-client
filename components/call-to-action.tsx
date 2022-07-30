import cn from 'classnames';
import Link from 'next/link';
import styles from './call-to-action.module.css';

export default function CallToAction() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={cn(styles['cta-texts'])}>
                    <div className={cn(styles.cta)}>
                        <div className={cn(styles.gradient)}>
                            Join now and get crakd!
                        </div>
                    </div>
                    <div className={cn(styles['button-row'])}>
                        <Link href="/tournaments">
                            <button type="button" className={styles.click}>
                                Enter Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}