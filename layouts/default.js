import { Box, Flex } from "@chakra-ui/react";

import Header from "../components/layouts/Header";

export default function Layout({ children }) {
    return (
        <Box minH="100vh" textAlign="center" fontSize="xl">
            <Flex minH="100vh" p={5} flexDirection="column">
                <Header />
                {children}
            </Flex>
        </Box>
    );
}
