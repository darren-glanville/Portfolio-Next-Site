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

const technologies = [
    {
        label: "Laravel",
        color: "red",
    },
    {
        label: "PHP",
        color: "purple",
    },
    {
        label: "React",
        color: "cyan",
    },
    {
        label: "NextJS",
        color: "cyan",
    },
    {
        label: "VueJS",
        color: "green",
    },
    {
        label: "Wordpress",
        color: "blue",
    },
    {
        label: "HTML5",
        color: "red",
    },
    {
        label: "CSS",
        color: "orange",
    },
    {
        label: "SCSS",
        color: "orange",
    },
    {
        label: "Javascript",
        color: "yellow",
    },
    {
        label: "JQuery",
        color: "yellow",
    },
    {
        label: "JSX",
        color: "yellow",
    },
];

export default function Index() {
    const textColor = useColorModeValue("grey.200", "white");

    return (
        <Center flex="1" my={8} textAlign="center">
            <VStack spacing={8}>
                <Box maxW="xl" borderWidth="1px" borderRadius="lg" padding={10}>
                    <VStack spacing={4}>
                        <Avatar
                            size="lg"
                            name="Darren Glanville"
                            src="/darren.jpeg"
                        />
                        <Heading
                            fontSize={{
                                base: "3xl",
                                sm: "4xl",
                                md: "6xl",
                            }}
                            lineHeight={"110%"}
                            fontWeight={920}
                        >
                            Hi there, I'm{" "}
                            <Text
                                as={"div"}
                                bgGradient="linear(to-r, purple.700, pink.400)"
                                bgClip="text"
                            >
                                Darren Glanville
                            </Text>
                        </Heading>

                        <Text color={textColor}>Full Stack Web Developer</Text>

                        <Badges items={technologies} />
                    </VStack>
                </Box>

                <FunFact />
            </VStack>
        </Center>
    );
}
