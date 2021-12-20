import {
    useColorModeValue,
    Box,
    Text,
    Heading,
    VStack,
    Center,
    Avatar,
} from "@chakra-ui/react";

import Badges from "../components/Badges";
import FunFact from "../components/FunFact";
import Logo from "../components/layouts/Logo";

import { technologies } from "../data";

export default function Index() {
    const textColor = useColorModeValue("grey.200", "white");

    return (
        <Center flex="1" my={8} textAlign="center">
            <VStack spacing={8}>
                <Box maxW="xl" borderWidth="1px" borderRadius="lg" padding={10}>
                    <VStack spacing={4}>
                        <Avatar
                            size="2xl"
                            name="Darren Glanville"
                            src="/darren-cartoon.jpg"
                        />

                        <Text
                            as={"div"}
                            fontSize={{
                                base: "3xl",
                                sm: "4xl",
                                md: "6xl",
                            }}
                            lineHeight={"110%"}
                            fontWeight={920}
                        >
                            Hi there, I'm{" "}
                        </Text>

                        <Logo />

                        <Text color={textColor}>Front End Web Developer</Text>

                        <Badges items={technologies} />
                    </VStack>
                </Box>

                <FunFact />
            </VStack>
        </Center>
    );
}
