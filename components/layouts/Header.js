import { useRef } from "react";
import { useRouter } from "next/router";

import { ColorModeSwitcher } from "../ColorModeSwitcher";
import {
    Box,
    Flex,
    Spacer,
    useDisclosure,
    VStack,
    Drawer,
    CloseButton,
    IconButton,
    Button,
    useColorModeValue,
    DrawerOverlay,
    DrawerContent,
    DrawerFooter,
    Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import Logo from "./Logo";
import MenuLink from "./MenuLink";
import Social from "./Social";

export default function Header() {
    const router = useRouter();
    const showLogo = router.asPath === "/" ? false : true;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    // Menu
    function Menu() {
        return (
            <Flex align="center">
                {showLogo ? <Logo menu /> : null}

                <Box display={{ base: "none", md: "inline-flex" }}>
                    <Flex>
                        <MenuLink text="Welcome" link="/" />
                        <MenuLink text="About / Contact" link="/about" />
                    </Flex>
                </Box>
            </Flex>
        );
    }

    const MobileButton = (
        <IconButton
            ref={btnRef}
            display={{ base: "flex", md: "none" }}
            me="4"
            aria-label="Open menu"
            fontSize="20px"
            colorScheme="purple"
            variant="outline"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onOpen}
        />
    );

    const MobileNavContent = (
        <Drawer isOpen={isOpen} finalFocusRef={btnRef} onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <Box h="100%">
                    <Flex
                        bg={useColorModeValue("purple.200", "purple.700")}
                        display={isOpen ? "flex" : "none"}
                        flexDirection="column"
                        p={8}
                        spacing={4}
                        align="center"
                        justify="center"
                        h="100%"
                    >
                        <Center>
                            <VStack spacing={8} onClick={onClose}>
                                <MenuLink text="Welcome" link="/" />
                                <MenuLink text="About" link="/about" />
                                <Box pt={4}>
                                    <Social />
                                </Box>
                            </VStack>
                        </Center>
                    </Flex>
                </Box>

                <DrawerFooter>
                    <Button
                        colorScheme="purple"
                        variant="outline"
                        onClick={onClose}
                        leftIcon={<CloseIcon />}
                        w="100%"
                    >
                        Close
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );

    return (
        <Flex mb={12} align="center">
            {MobileButton}

            <Menu />
            <Spacer />
            <Box me="8" display={{ base: "none", md: "flex" }}>
                <Social />
            </Box>
            <ColorModeSwitcher />

            {MobileNavContent}
        </Flex>
    );
}
