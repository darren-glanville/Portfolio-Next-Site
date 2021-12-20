import { Box, Flex } from "@chakra-ui/react";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

export default function Layout({ children }) {
    return (
        <Box height="100vh" textAlign="center" fontSize="xl">
            <Flex minH="100%" p={8} flexDirection="column">
                <Header />
                {children}
                <Footer />
            </Flex>
        </Box>
    );
}
