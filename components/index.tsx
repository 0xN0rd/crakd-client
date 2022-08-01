import { useState } from 'react';
import Layout from './layout';
import HomeContainer from './home-container';
import Hero from './hero';
import Feature from './feature';
import CallToAction from './call-to-action';

export default function Home() {
    return (
        <Layout>
            <HomeContainer>
                    <Hero />
                    <Feature />
                    <CallToAction />
            </HomeContainer>
        </Layout>
    );
} 