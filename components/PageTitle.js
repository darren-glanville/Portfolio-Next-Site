import { Box, Center, Flex } from "@chakra-ui/react";
import Header from "./Header";

const PageTitle = ({ props, children }) => {
    return (
        <Box p={{ base: 0, md: 12 }} mb={12}>
            <Center>
                <Header>{children}</Header>
            </Center>
        </Box>
    );
};

export default PageTitle;
