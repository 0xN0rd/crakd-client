import React, {useState, useEffect} from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useColorMode,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

export default function Nav() {
    const [currentAccount, setCurrentAccount] = useState(null);
    const { isOpen, onToggle } = useDisclosure();

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    const renderContent = () => {
        if (!currentAccount) {
        return (
            <div className="connect-wallet-container">
            <button className="cta-button connect-wallet-button" onClick={connectWalletAction}>
                {currentAccount ? `Wallet ${currentAccount.substring(0, 6)}...${currentAccount.substring(currentAccount.length - 4)} is connected` : "Connect Wallet To Get Started"}
            </button>
            </div>
        );
        }
    };

    const checkIfWalletIsConnected = async () => {
        try {
        const { ethereum } = window;

        if (!ethereum) {
            console.log("Make sure you have MetaMask!");
            return;
        } else {
            console.log("We have the ethereum object", ethereum);

            const accounts = await ethereum.request({ method: "eth_accounts" });

            if (accounts.length !== 0) {
            const account = accounts[0];
            console.log("Found an authorized account:", account);
            setCurrentAccount(account);
            } else {
            console.log("No authorized account found");
            }
        }
        } catch (error) {
        console.log(error);
        }
    };

    const connectWalletAction = async () => {
        try {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Get MetaMask");
            return;
        }

        const accounts = await ethereum.request({
            method: "eth_requestAccounts",
        });

        console.log("Connected", accounts[0]);
        setCurrentAccount(accounts[0]);
        } catch (error) {
        console.log(error);
        }
    };

    {/*
    return (
        <>
            <nav className="navbar navbar-container-shadow sticky">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <div className="navbar-brand-logo">
                            <img className="navbar-brand-image" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/325/joystick_1f579-fe0f.png" alt="site logo" layout="fill" />
                        </div>
                        <div className="navbar-item-link">
                            <span>Crakd</span>
                        </div>
                    </a>
                </div>
                <div className="navbar-middle">
                    <div className="navbar-item" />
                </div>
                <div className="navbar-end">
                    <a className="navbar-item">
                        <div className="navbar-item-button" onClick={connectWalletAction}>
                            {currentAccount ? (
                                <span>{`${currentAccount.substring(0, 5)}...${currentAccount.substring(currentAccount.length - 4)}`}</span>
                            ) : (
                                <span>Connect</span>
                            )}
                        </div>
                    </a>
                </div>
            </nav>
        </>
    );
    */}

    return (
        <Box>
            <Flex
                bg={useColorModeValue('#2e2e2c', 'white')}
                color={useColorModeValue('white', 'gray.600')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={'#1e1e1c'}
                align={'center'}
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start'}} align={{ base: 'center', md: 'start'}}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontWeight={'extrabold'}
                        fontSize={24}
                        fontFamily={'heading'}
                        color={'gray.200'}
                    >
                        🕹 Crakd
                    </Text>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <ConnectButton currentAccount={currentAccount} connectWalletAction={connectWalletAction} />
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.200', 'gray.600');
    const linkHoverColor = useColorModeValue('white', 'gray.800');
    const popoverContentBgColor = useColorModeValue('#2e2e2c', 'white');

    return (
        <Stack direction={'row'} spacing={4} mt={1}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} palcement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '/'}
                                fontSize={'md'}
                                fontWeight = {600}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}
                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            bg={'#3e3e3c'}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: '#4e4e4c' }}
        >
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: '#FF0080' }}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ copacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}
                >
                    <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={'#2e2e2c'}
            p={4}
            display={{ md: 'none'}}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '/'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.200', 'gray.600')}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                        color={'gray.200'}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700' )}
                    align={'start'}
                >
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} color={'#FF0060'} href={child.href}>
                                {child.label}
                            </Link>
                        ))
                    }
                </Stack>
            </Collapse>
        </Stack>
    );
};

const ConnectButton = ({ currentAccount, connectWalletAction }) => {
    return (
        <Stack
        flex={{ base: 1, md: 0 }}
        justify={'flex-end'}
        direction={'row'}
        spacing={6}
        >
            {currentAccount ? (
                <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'md'}
                fontWeight={700}
                color={'white'}
                bgGradient={'linear(to-r, #7928CA, #FF0080)'}
                _hover={{
                    bgGradient: 'linear(to-l, #E0067A, #7928CA)',
                }}
                >{`${currentAccount.substring(0, 5)}...${currentAccount.substring(currentAccount.length - 4)}`}</Button>
            ) : (
                <Button
                display={{ base: 'none', md: 'inline-flex' }}
                rounded={10}
                fontSize={'md'}
                fontWeight={700}
                color={'white'}
                bgGradient={'linear(to-r, #7928CA, #FF0080)'}
                _hover={{
                    bgGradient: 'linear(to-l, #E0067A, #7928CA)',
                }}
                onClick={connectWalletAction}
                >Connect</Button>
            )}
            
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Tournament',
        children: [
            {
                label: 'League of Legends',
                subLabel: 'Pub stomp your way to prizes!',
                href: '/tournament',
            },
        ]
    }
]