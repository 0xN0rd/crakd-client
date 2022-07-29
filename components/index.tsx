import { useState } from 'react';
import Layout from './layout';
import HomeContainer from './home-container';
import Hero from './hero';
import Feature from './feature';

export default function Home() {
    return (
        <Layout>
            <HomeContainer>
                <>
                    <Hero />
                    <Feature />
                </>
            </HomeContainer>
        </Layout>
    );
} 