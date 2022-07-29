import cn from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import { SITE_DESCRIPTION } from '../lib/constants';

export default function Hero() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={cn(styles['hero-texts'])}>
                    <div className={cn(styles.hero, styleUtils.appear, styleUtils['appear-first'])}>
                        <h1 className={cn(styles['first-gradient'])}>
                            ENTER.
                        </h1>
                    </div>
                    <div className={cn(styles.hero, styleUtils.appear, styleUtils['appear-second'])}>
                        <h1 className={cn(styles['second-gradient'])}>
                            QUEUE.
                        </h1>
                    </div>
                    <div className={cn(styles.hero, styleUtils.appear, styleUtils['appear-third'])}>
                        <h1 className={cn(styles['third-gradient'])}>
                            WIN.
                        </h1>
                    </div>
                    <h2
                        className={cn(
                            styleUtils.appear,
                            styleUtils['appear-fifth'],
                            styles.description
                        )}
                    >
                        {SITE_DESCRIPTION}
                    </h2>
                    <div className={cn(styles['button-row'], styleUtils.appear, styleUtils['appear-fifth'])}>
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