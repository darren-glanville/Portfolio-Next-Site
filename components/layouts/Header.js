import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Flex, Spacer, Link, Button, Tooltip } from "@chakra-ui/react";
import { FaEnvelopeOpenText, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
    const links = [
        {
            icon: <FaEnvelopeOpenText />,
            link: "mailto:hithere@darren-glanville.dev",
            label: "E-mail me",
        },
        {
            icon: <FaGithub />,
            link: "https://github.com/darren-glanville",
            label: "See my GitHub account",
        },
        {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/darrenglanville",
            label: "See my LinkedIn account",
        },
    ];

    const MenuLinks = (props) => {
        return (
            <Flex>
                {links.map((link, index) => {
                    return (
                        <Tooltip key={index} hasArrow label={link.label}>
                            <Link
                                href={link.link}
                                colorScheme="purple"
                                variant="ghost"
                                isExternal
                            >
                                <Button colorScheme="purple" variant="ghost">
                                    {link.icon}
                                </Button>
                            </Link>
                        </Tooltip>
                    );
                })}
            </Flex>
        );
    };

    return (
        <Flex>
            <MenuLinks />
            <Spacer />
            <ColorModeSwitcher />
        </Flex>
    );
}
