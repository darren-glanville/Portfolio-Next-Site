import { Heading, Text } from "@chakra-ui/react";

const SubHeader = ({ props, children }) => {
    return (
        <Heading
            fontSize={{
                base: "1xl",
                sm: "2xl",
                md: "4xl",
            }}
            lineHeight={"110%"}
            fontWeight={920}
        >
            {children}
        </Heading>
    );
};

export default SubHeader;
