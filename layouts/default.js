import { Box, Flex } from "@chakra-ui/react";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

export default function Layout({ children }) {
    return (
        <Box height="100vh" textAlign="center">
            <Flex minH="100%" p={12} flexDirection="column">
                <Header />
                {children}
                <Footer />
            </Flex>
        </Box>
    );
}
