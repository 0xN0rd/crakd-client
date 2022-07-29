import { GetStaticProps, GetStaticPaths } from 'next';

import Page from '../../components/page';
import TournamentSection from '../../components/tournament-section';
import Layout from '../../components/layout';

import { Tournament } from '../../lib/types';
import { META_DESCRIPTION } from '../../lib/constants';

type Props = {
    tournament: Tournament;
};

const TOURNAMENT: Tournament[] = [
    {
        name: 'Daily Cash Game',
        description: 'Smaller prizes, more chances to win.',
        cardImage: { url: 'https://i.imgur.com/2QU4PZW.png' },
        logo: { url: 'https://img.icons8.com/color-glass/48/000000/apple-arcade.png' },
        format: 'cash',
        length: 'daily',
        slug: 'daily-cash-game',
        contract: '0xe576a90e3e24462d32631EBD14ce6699e2399315',
    },
    /*
    {
        name: 'Weekly Cash Game',
        description: 'Smaller prizes, more chances to win.',
        cardImage: { url: 'https://i.imgur.com/2QU4PZW.png' },
        logo: { url: 'https://img.icons8.com/color-glass/48/000000/apple-arcade.png' },
        format: 'cash',
        length: 'daily',
        slug: 'weekly-cash-game',
    },
    {
        name: 'Daily GPP',
        description: 'Bigger prizes, more competition.',
        cardImage: { url: 'https://i.imgur.com/2QU4PZW.png' },
        logo: { url: 'https://img.icons8.com/color-glass/48/000000/apple-arcade.png' },
        format: 'gpp',
        length: 'weekly',
        slug: 'daily-gpp',
    },
    {
        name: 'Weekly GPP',
        description: 'Bigger prizes, more competition.',
        cardImage: { url: 'https://i.imgur.com/2QU4PZW.png' },
        logo: { url: 'https://img.icons8.com/color-glass/48/000000/apple-arcade.png' },
        format: 'gpp',
        length: 'weekly',
        slug: 'weekly-gpp',
    },
    */
];

export default function TournamentPage() {
    const meta = {
        title: 'Tournament',
        description: 'Enter. Queue. Win',
    };

    return (
        <Page meta={meta}>
            <Layout>
                {TOURNAMENT.map(tournament => (
                    <TournamentSection tournament={tournament} />
                ))}
            </Layout>
        </Page>
    );
}