import cn from 'classnames';
import styles from './feature.module.css';

export default function Feature() {
    return (
        <>
            <div className={cn(styles['section-wrapper'])}>
                <div className={cn(styles['section-container'])}>
                    <div className={cn(styles['section-label'])}>
                        <span className={cn(styles['section-label-number-one'])}>1</span>
                        <h3 className={cn(styles['section-label-heading'])}>
                            <span className={cn(styles['section-label-text-one'])}>Enter</span>
                        </h3>
                    </div>
                    <h4 className={cn(styles['section-title'])}>Daily or weekly tournaments</h4>
                    <div className={cn(styles['section-container'], styles['section-description-wrapper'])}>
                        <div className={cn(styles['section-container'])}>
                            <p className={cn(styles['paragraph'], styles['paragraph-medium'], styles['paragraph-secondary'])}>
                                Daily or weekly tournament options make it easy to participate based on your schedule. Do you have an entire day to kill? Sign up for a daily. Do you to stretch your sessions over a few days? Sign up for a weekly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn(styles['section-wrapper'])}>
                <div className={cn(styles['section-container'])}>
                    <div className={cn(styles['section-label'])}>
                        <span className={cn(styles['section-label-number-two'])}>2</span>
                        <h3 className={cn(styles['section-label-heading'])}>
                            <span className={cn(styles['section-label-text-two'])}>Queue</span>
                        </h3>
                    </div>
                    <h4 className={cn(styles['section-title'])}>Everyone has a chance</h4>
                    <div className={cn(styles['section-container'], styles['section-description-wrapper'])}>
                        <div className={cn(styles['section-container'])}>
                            <p className={cn(styles['paragraph'], styles['paragraph-medium'], styles['paragraph-secondary'])}>
                                You don't have to be a pro to win money playing League. Popping off in one game can send you to the top of the leaderboard.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn(styles['section-wrapper'])}>
                <div className={cn(styles['section-container'])}>
                    <div className={cn(styles['section-label'])}>
                        <span className={cn(styles['section-label-number-three'])}>3</span>
                        <h3 className={cn(styles['section-label-heading'])}>
                            <span className={cn(styles['section-label-text-three'])}>Win</span>
                        </h3>
                    </div>
                    <h4 className={cn(styles['section-title'])}>So much winning</h4>
                    <div className={cn(styles['section-container'], styles['section-description-wrapper'])}>
                        <div className={cn(styles['section-container'])}>
                            <p className={cn(styles['paragraph'], styles['paragraph-medium'], styles['paragraph-secondary'])}>
                                In our guaranteed prize pools, 20% of players with finish in the money. For those looking for a less risky approach, our cash tournaments pay out to the top 50% of players.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}