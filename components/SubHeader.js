import { Heading } from "@chakra-ui/react";

const SubHeader = ({ props, children }) => {
    return (
        <Heading
            fontSize={{
                base: "2xl",
                sm: "3xl",
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
