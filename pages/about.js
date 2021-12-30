import {
    SimpleGrid,
    Text,
    Box,
    Container,
    VStack,
    Link,
    Image,
    Flex,
    Stack,
} from "@chakra-ui/react";

import SubHeader from "../components/SubHeader";
import Badges from "../components/Badges";
import PageTitle from "../components/PageTitle";

import { getTechnologies } from "../lib/api";

import { greyTextColor } from "../variables";
import { socialLinks } from "../data";

export default function About({ allTechnologies, preview }) {
    return (
        <Container maxW="container.xl">
            <PageTitle>About me</PageTitle>

            <Box mb={24} display="flex" justifyContent="center">
                <Box boxSize="xs" bg="purple.500" borderRadius="2xl">
                    <Image
                        boxSize="xs"
                        objectFit="cover"
                        src="darren.jpeg"
                        alt="Darren Glanville"
                        borderRadius="2xl"
                        opacity={0.5}
                    />
                </Box>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Box
                    key="tech"
                    borderWidth="1px"
                    borderRadius="lg"
                    padding={10}
                >
                    <Flex grow="1" height="100%" direction="column">
                        <Box>
                            <SubHeader>This is what I work with</SubHeader>
                            <Text color={greyTextColor}>
                                and I learn quickly...
                            </Text>
                        </Box>

                        <Box my="auto" py={4}>
                            <Badges items={allTechnologies} />
                        </Box>
                    </Flex>
                </Box>

                <Box
                    key="contact"
                    borderWidth="1px"
                    borderRadius="lg"
                    padding={10}
                >
                    <VStack gap={8}>
                        <Box>
                            <SubHeader>Let's chat and network</SubHeader>
                            <Text color={greyTextColor}>
                                I'm always up for a chat
                            </Text>
                        </Box>

                        <Stack
                            direction={{ base: "column", sm: "row" }}
                            spacing={4}
                        >
                            {socialLinks.map((link, index) => {
                                return (
                                    <Link
                                        href={link.link}
                                        colorScheme="purple"
                                        variant="ghost"
                                        isExternal
                                        padding={4}
                                        borderRadius={6}
                                        width={{
                                            base: "100%",
                                            sm: "50%",
                                            md: "33.33%",
                                        }}
                                        key={index}
                                    >
                                        <Flex align="center" direction="column">
                                            <Box
                                                width="2rem"
                                                mb={5}
                                                color={greyTextColor}
                                            >
                                                {link.icon}
                                            </Box>
                                            {link.label}
                                        </Flex>
                                    </Link>
                                );
                            })}
                        </Stack>
                    </VStack>
                </Box>
            </SimpleGrid>
        </Container>
    );
}

export async function getStaticProps({ preview = null }) {
    const allTechnologies = (await getTechnologies(preview)) || [];
    return {
        props: { allTechnologies, preview },
    };
}
