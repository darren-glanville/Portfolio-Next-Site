import { Heading, Text } from "@chakra-ui/react";

const Header = ({ props, children }) => {
    return (
        <Heading
            fontSize={{
                base: "4xl",
                sm: "5xl",
                md: "6xl",
            }}
            lineHeight={"110%"}
            fontWeight={920}
        >
            <Text
                as={"div"}
                bgGradient="linear(to-r, purple.700, pink.400)"
                bgClip="text"
            >
                {children}
            </Text>
        </Heading>
    );
};

export default Header;
