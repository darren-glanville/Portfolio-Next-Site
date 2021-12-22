import { Flex, Text } from "@chakra-ui/react";
import { lightGreyTextColor } from "../../variables";

const Footer = (props) => {
    return (
        <Flex justify="center" pt="24" mt="auto">
            <Text fontSize="sm" color={lightGreyTextColor}>
                Darren Glanville
            </Text>
        </Flex>
    );
};

export default Footer;
