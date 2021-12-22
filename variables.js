import { useColorModeValue } from "@chakra-ui/react";

export const greyTextColor = () => {
    return useColorModeValue("gray.500", "gray.300");
};

export const lightGreyTextColor = () => {
    return useColorModeValue("gray.300", "gray.600");
};
