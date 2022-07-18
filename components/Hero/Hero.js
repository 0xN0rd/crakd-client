import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

export default function Hero() {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}
                >
                    <Heading
                        color={'#F4F4F7'}
                        fontWeight={700}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={{ base: '140%', md: '110%' }}
                    >
                        Welcome to <br />
                        <Text as={'span'} bgGradient={'linear(to-r, #7928CA, #FF0080)'} bgClip="text" fontSize={'6xl'} fontWeight={'extrabold'}>
                            the gaming revolution!
                        </Text>
                    </Heading>
                    <Text color={'gray.200'} fontSize={24}>
                        This is Crakd. The next evolution in gaming and tournaments. Now, you no longer need a team to play with in order to play competitively and win prizes.
                    </Text>
                    <Text color={'gray.200'} fontSize={24}>
                        Each week, a new tournament starts where players can enter to win prizes. By simply entering your gamertag upon entry, Crakd will track every game of League of Legends you play throughout the week. Your top 5 highest scoring games will be used to determine your ranking for the week.
                    </Text>
                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}
                    >
                        <Button
                            colorScheme={'blue'}
                            fontWeight={'bold'}
                            bg={'#FF0080'}
                            rounded={10}
                            px={6}
                            _hover={{
                                bg: '#E60073'
                            }}
                        >
                            Tournaments
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}