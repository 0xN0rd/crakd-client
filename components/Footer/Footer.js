import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    VisuallyHidden
} from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={'#FF0080'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            rounded={10}
            colorScheme={'purple'}
            _hover={{
                bg: '#E60073'
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg={'#2e2e2c'}
            color={'gray.200'}
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}
            >
                <Text
                    fontWeight={'extrabold'}
                    fontSize={'24'}
                    fontFamily={'heading'}
                    color={'gray.200'}
                >
                    🕹 Crakd
                </Text>
                <Stack direction={'row'} spacing={6}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/tournament'}>Tournament</Link>
                </Stack>
            </Container>
            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={'#3e3e3c'}
            >
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}
                >
                    <Text>© 2022 Crakd. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'https://twitter.com/CrakdGG'}>
                            <FaTwitter />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};