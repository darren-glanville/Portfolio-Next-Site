import { Heading, Link, Text } from "@chakra-ui/react";
import Router from "next/router";

export default function Logo(props) {
    const fontSize = {
        base: props?.menu ? "xl" : "5xl",
        sm: props?.menu ? "1xl" : "5xl",
        md: props?.menu ? "2xl" : "6xl",
    };

    return (
        <Link //href="/"
            onClick={() => Router.push("/")}
            style={{ textDecoration: "none" }}
        >
            <Heading
                fontSize={fontSize}
                lineHeight={"110%"}
                fontWeight={920}
                pr={props?.menu ? "8" : "0"}
            >
                <Text
                    as={"div"}
                    bgGradient="linear(to-r, purple.700, pink.400)"
                    bgClip="text"
                >
                    Darren Glanville
                </Text>
            </Heading>
        </Link>
    );
}
