import { Box, Center, Flex, Heading, VStack } from "@chakra-ui/react";
import FunFact from "../components/FunFact";
import Header from "../components/Header";

export default function About() {
    return (
        <Center flex="1" textAlign="center">
            <VStack spacing="4">
                <Header>In development</Header>
                <FunFact />
            </VStack>
        </Center>
    );
}
