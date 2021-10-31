import { Icon, Heading, VStack, Center, Button, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { FaQuestion } from "react-icons/fa";

export default function FourOhFour() {
    return (
        <Center flex="1" my={8} textAlign="center">
            <VStack spacing={8}>
                <Icon as={FaQuestion} w={20} h={20} />
                <Heading
                    fontSize={{
                        base: "3xl",
                        sm: "4xl",
                        md: "6xl",
                    }}
                    lineHeight={"110%"}
                    fontWeight={920}
                >
                    404{" "}
                    <Text
                        as={"div"}
                        bgGradient="linear(to-r, purple.700, pink.400)"
                        bgClip="text"
                        fontSize={{
                            base: "1xl",
                            sm: "3xl",
                            md: "4xl",
                        }}
                    >
                        Page Not Found
                    </Text>
                </Heading>

                <NextLink href="/">
                    <Button colorScheme="purple">Homepage</Button>
                </NextLink>
            </VStack>
        </Center>
    );
}
