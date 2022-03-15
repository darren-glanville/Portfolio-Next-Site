import { Box, Text, VStack, Center, Avatar } from "@chakra-ui/react";

import Badges from "../components/Badges";
import FunFact from "../components/FunFact";
import Logo from "../components/layouts/Logo";
import SubHeader from "../components/SubHeader";

import { greyTextColor, fadeInUp, stagger } from "../variables";
import { technologies } from "../data";

import { motion } from "framer-motion";

export default function Index(props) {
    return (
        <Center flex="1" my={8} textAlign="center">
            <VStack spacing={8}>
                <Box maxW="xl" borderWidth="1px" borderRadius="lg" padding={10}>
                    <motion.div variants={stagger}>
                        <VStack spacing={8}>
                            <motion.div variants={fadeInUp}>
                                <Avatar
                                    size="2xl"
                                    name="Darren Glanville"
                                    src="/darren-cartoon.jpg"
                                />
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <Box>
                                    <SubHeader>Hi there, I'm </SubHeader>

                                    <Logo />

                                    <Text color={greyTextColor}>
                                        Web Developer based in County Durham, UK
                                    </Text>
                                </Box>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <Badges items={technologies} />
                            </motion.div>
                        </VStack>
                    </motion.div>
                </Box>
                <FunFact />
            </VStack>
        </Center>
    );
}
