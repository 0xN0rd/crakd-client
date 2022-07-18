import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    VisuallyHidden,
    List,
    ListItem,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
} from '@chakra-ui/react';

export default function TournamentPage() {
    return (
        <Box bg={'#1c1c1e'}>
            <Container maxW={'7xl'}>
                <SimpleGrid
                    columns={{ base: 1 }}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 18, md: 24 }}
                >
                    <Flex>
                        <Image
                            rounded={10}
                            alt={'tournament image'}
                            src={'https://www.sportsnet.ca/wp-content/uploads/2020/09/league-of-legends-worlds-2019-france.jpg'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={{ base: '100%', sm: '400px', lg: '500px' }}
                        />
                    </Flex>
                    <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={'header'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600} 
                                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                                color={'white'}    
                            >
                                League of Legends Weekly Tournament
                            </Heading>
                            <Button
                                rounded={10}
                                bg={'#FF0060'}
                                fontWeight={'bold'}
                                color={'white'}
                                justifyContent={'right'}
                                _hover={{
                                    bg: '#E60073',
                                    transform: 'translateY(-2px)',
                                }}
                            >
                                Enter
                            </Button>
                        </Box>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={'column'}
                            divider={
                                <StackDivider
                                    borderColor={'#3e3e3c'}
                                />
                            }
                        >
                            <VStack spacing={{ base: 4, sm: 6 }}>
                                <Text
                                    color={'gray.200'}
                                    fontSize={'2xl'}
                                    fontWeight={'400'}
                                >
                                    Entries for the next tournament are open now! Joining is as easy as submitting your gamertag. We will do the hard work while you game.
                                </Text>
                            </VStack>
                        </Stack>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={'column'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <TableContainer rounded={10} shadow={'xl'}>
                                <Table variant={'simple'} bg={'#3c3c3e'}>
                                    <Thead>
                                        <Tr>
                                            <Th color={'white'} fontSize={16} borderColor={'#5c5c5e'}>Place</Th>
                                            <Th color={'white'} fontSize={16} borderColor={'#5c5c5e'}>Gamertag</Th>
                                            <Th isNumeric color={'white'} fontSize={16} borderColor={'#5c5c5e'}>Score</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td color={'white'} fontSize={15} borderColor={'#5c5c5e'}>1</Td>
                                            <Td color={'white'} fontSize={15} borderColor={'#5c5c5e'}>norden</Td>
                                            <Td isNumeric color={'white'} fontSize={15} borderColor={'#5c5c5e'}>69</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
};