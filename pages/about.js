import { Box, Center, Flex, Heading, VStack } from "@chakra-ui/react";
import FunFact from "../components/FunFact";

export default function About() {
    return (
        <Center flex="1" textAlign="center">
            <VStack spacing="4">
                <Heading>In development</Heading>
                <FunFact />
            </VStack>
        </Center>
    );
}
