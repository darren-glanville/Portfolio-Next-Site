import { Box, Text, VStack, Center, Avatar } from "@chakra-ui/react";

import Badges from "../components/Badges";
import FunFact from "../components/FunFact";
import Logo from "../components/layouts/Logo";
import SubHeader from "../components/SubHeader";

import { getTechnologies } from "../lib/api";
import { greyTextColor } from "../variables";

export default function Index({ allTechnologies, preview }) {
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

                        <Badges items={allTechnologies} />
                    </VStack>
                </Box>

                <FunFact />
            </VStack>
        </Center>
    );
}

export async function getStaticProps({ preview = null }) {
    const allTechnologies = (await getTechnologies(preview)) || [];
    return {
        props: { allTechnologies, preview },
        revalidate: 60,
    };
}
