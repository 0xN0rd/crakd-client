import {
    Container,
    Grid,
    GridItem,
    Flex,
    Box,
    Image,
    Badge,
    chakra,
    Tooltip,
    Button,
    Text,
    Heading,
    Spacer,
} from '@chakra-ui/react';

const data = [
    {
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjM2NmU3YmEtZDI1OC00NTQ5LWJmOGMtYmZmNGUyMWRlODBmXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_FMjpg_UX1000_.jpg',
        name: 'Weekly',
        type: 'Tournament',
        isNew: true,
    }
];

function Type({ type }) {
    return (
        <Box d="flex" alignItems="center">
            <Box as="span" color="gray.200" fontSize="sm">
                {type}
            </Box>
        </Box>
    )
}

export default function titleDescription() {
    return (
        <Container py={5} maxW={'4xl'}>
            <Grid
                templateColumns={{
                    base: 'reapeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                }}
                gap={8}
                alignItems="center"
                mb={'6rem'}
            >
                <GridItem w="100%" px={5} colSpan={{ base: 1, sm: 2, md: 2 }}>
                    <Heading as={'h1'} color={'gray.200'}>Are you CRAKD?</Heading>
                    <Text fontSize={24} color={'gray.200'}>
                        Get into a tournament now and show everyone just how cracked you are. Take home prizes every week!
                    </Text>
                </GridItem>
                <GridItem>
                    <Flex p={50} w="full" alignItems="center" justifyContent="center">
                        <Box
                            bg={'#2e2e2c'}
                            color={'gray.200'}
                            maxW={'md'}
                            rounded="lg"
                            shadow={'lg'}
                            position={'relative'}
                        >
                            <Image src={data[0].imageUrl} alt={'Tournament Game Image'} roundedTop="lg" />

                            <Box p="6">
                                <Box d="flex" alignItems="baseline">
                                    {data[0].isNew ? (
                                        <Badge rounded="full" px="2" fontSize="0.8rem" bg={'rgba(169, 86, 252, 0.3)'} color={'gray.200'}>
                                            New
                                        </Badge>
                                    ) : (
                                        <Badge rounded="full" px="2" fontSize="0.8rem" colorScheme="gray">
                                            Coming Soon
                                        </Badge>
                                    )}
                                </Box>
                                <Flex mt="1" justifyContent="space-between" alignContent="center">
                                    <Box
                                        fontSize="2xl"
                                        fontWeight="semibold"
                                        as="h4"
                                        lineHeight="tight"
                                    >
                                        {data[0].name}
                                    </Box>
                                    <chakra.a href={'/tournament'} display="flex">
                                        <Button
                                            px={8}
                                            bg={'#FF0080'}
                                            color={'gray.200'}
                                            rounded={10}
                                            fontWeight={'bold'}
                                            alignSelf="center"
                                            ml={'4rem'}
                                            _hover={{
                                                transform: 'translateY(-2px)',
                                                boxShadow: 'lg'
                                            }}
                                        >
                                            Go!
                                        </Button>
                                    </chakra.a>
                                </Flex>

                                <Flex justifyContent="space-between" alignContent="center">
                                    <Type type={data[0].type} />
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
        </Container>
    )
}