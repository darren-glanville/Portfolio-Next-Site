import { Box, Flex } from "@chakra-ui/react";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Layout({ children }) {
    const router = useRouter();

    return (
        <Box height="100vh" textAlign="center">
            <Flex minH="100%" p={12} flexDirection="column">
                <Header />
                <motion.div
                    key={router.route}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    variants={{
                        initial: {
                            opacity: 0,
                        },
                        animate: {
                            opacity: 1,
                        },
                    }}
                >
                    {children}
                </motion.div>
                <Footer />
            </Flex>
        </Box>
    );
}
