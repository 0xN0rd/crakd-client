import { ReactElement } from 'react';
import { Container, Heading, Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';

const Feature = ({ title, text, icon }) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bgGradient={'linear(to-r, #7928CA, #FF0080)'}
                mb={2}
            >
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text fontWeight={400} fontSize={25} color={'gray.100'}>{text}</Text>
        </Stack>
    );
};

export default function Features() {
    return (
        <Container maxW={'5xl'}>
            <Heading
                align={'center'}
                color={'#F4F4F7'}
                fontWeight={700}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight={ '110%' }
            >
                How to Play
            </Heading>
            <Box p={24} mb={8}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <Feature
                        icon={<Icon as={RiNumber1} w={10} h={10} />}
                        title={'Enter Tournaments'}
                        text={'Enter tournaments with a click, confirm with your wallet, and start playing!'}
                    />
                    <Feature
                        icon={<Icon as={RiNumber2} w={10} h={10} />}
                        title={'Tracking Scores'}
                        text={'Using your gamertag, Crakd tracks your performance over the week and scores your best games for you.'}
                    />
                    <Feature
                        icon={<Icon as={RiNumber3} w={10} h={10} />}
                        title={'Win Prizes'}
                        text={'At the end of each tournament, claim your winnings instantly to your wallet - no waiting required!'}
                    />
                </SimpleGrid>
            </Box>
        </Container>
    );
};