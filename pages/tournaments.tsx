import { GetStaticProps } from 'next';

import Page from '../components/page';
import TournamentsGrid from '../components/tournaments-grid';
import Header from '../components/header';
import Layout from '../components/layout';

import { Tournament } from '../lib/types';
import { META_DESCRIPTION } from '../lib/constants';

const TOURNAMENT: Tournament[] = [
    {
        name: 'Daily Cash Game',
        description: 'Smaller prizes, more chances to win.',
        cardImage: { url: 'https://i.imgur.com/2QU4PZW.png' },
        logo: { url: 'https://img.icons8.com/color-glass/48/000000/apple-arcade.png' },
        format: 'cash',
        length: 'daily',
        slug: 'daily-cash-game',
        contract: '',
    },
    {
        name: 'Weekly Cash Game',
        description: 'Smaller prizes, more chances to win.',
        cardImage: { url: 'https://i.imgur.com/2QU4PZW.png' },
        logo: { url: 'https://img.icons8.com/color-glass/48/000000/apple-arcade.png' },
        format: 'cash',
        length: 'daily',
        slug: 'weekly-cash-game',
        contract: '',
    },
    {
        name: 'Daily GPP',
        description: 'Bigger prizes, more competition.',
        cardImage: { url: 'https://i.imgur.com/2QU4PZW.png' },
        logo: { url: 'https://img.icons8.com/color-glass/48/000000/apple-arcade.png' },
        format: 'gpp',
        length: 'weekly',
        slug: 'daily-gpp',
        contract: '',
    },
    {
        name: 'Weekly GPP',
        description: 'Bigger prizes, more competition.',
        cardImage: { url: 'https://i.imgur.com/2QU4PZW.png' },
        logo: { url: 'https://img.icons8.com/color-glass/48/000000/apple-arcade.png' },
        format: 'gpp',
        length: 'weekly',
        slug: 'weekly-gpp',
        contract: '',
    },
];

export default function TournamentPage() {
    const meta = {
        title: 'Tournaments - League of Legends Solo Queue Tournies',
        description: META_DESCRIPTION
    };

    return (
        <Page meta={meta}>
            <Layout>
                    <Header hero="Tournaments" description={meta.description} />
                    <TournamentsGrid tournaments={TOURNAMENT} />
            </Layout>
        </Page>
    );
}
