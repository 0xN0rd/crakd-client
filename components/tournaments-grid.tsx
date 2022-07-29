import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { Tournament } from '../lib/types';
import styles from './tournaments-grid.module.css';

function TournamentCard({ tournament }: { tournament: Tournament }) {
    return (
        <Link key={tournament.name} href={`/tournaments/${tournament.slug}`}>
        <a
            role="button"
            tabIndex={0}
            className={cn(styles.card, {
                [styles.daily]: tournament.length === 'daily',
                [styles.weekly]: tournament.length === 'weekly'
            })}
        >
            <div className={styles.imageWrapper}>
                <Image
                    alt={tournament.name}
                    src={tournament.cardImage.url}
                    className={cn(styles.image)}
                    loading="lazy"
                    title={tournament.name}
                    width={900}
                    height={500}
                />
            </div>
            <div className={styles.cardBody}>
                <div>
                    <h2 className={styles.name}>{tournament.name}</h2>
                    <p className={styles.description}>{tournament.description}</p>
                </div>
            </div>
        </a>
        </Link>
    );
}

type Props = {
    tournaments: Tournament[];
};

export default function TournamentsGrid({ tournaments }: Props) {
    const cashTournaments = tournaments.filter(t => t.format === 'cash');
    const gppTournaments = tournaments.filter(t => t.format === 'gpp');
    return (
        <>
            <hr className="separator" />
            <h1 className={styles.format}>Cash</h1>
            <div className={styles.grid}>
                {cashTournaments.map(tournament => (
                    <TournamentCard key={tournament.name} tournament={tournament} />
                ))}
            </div>
            <h1 className={styles.format}>Guaranteed Prize Pool</h1>
            <div className={styles.grid}>
                {gppTournaments.map(tournament => (
                    <TournamentCard key={tournament.name} tournament={tournament} />
                ))}
            </div>
        </>
    );
}