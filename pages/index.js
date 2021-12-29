import { Box, Text, VStack, Center, Avatar } from "@chakra-ui/react";

import Badges from "../components/Badges";
import FunFact from "../components/FunFact";
import Logo from "../components/layouts/Logo";
import SubHeader from "../components/SubHeader";

import { technologies } from "../data";
import { greyTextColor } from "../variables";

export default function Index() {
    return (
        <Center flex="1" my={8} textAlign="center">
            <VStack spacing={8}>
                <Box maxW="xl" borderWidth="1px" borderRadius="lg" padding={10}>
                    <VStack spacing={8}>
                        <Avatar
                            size="2xl"
                            name="Darren Glanville"
                            src="/darren-cartoon.jpg"
                        />

                        <Box>
                            <SubHeader>Hi there, I'm </SubHeader>

                            <Logo />

                            <Text color={greyTextColor}>
                                Front End Web Developer
                            </Text>
                        </Box>

                        <Badges items={technologies} />
                    </VStack>
                </Box>

                <FunFact />
            </VStack>
        </Center>
    );
}
