import { Flex, Link, Button, Tooltip } from "@chakra-ui/react";

import { footerLinks } from "../../data";

export default function Header() {
    const MenuLinks = (props) => {
        return (
            <Flex>
                {footerLinks.map((link, index) => {
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
        <Flex justify="center" p="5" mt="auto">
            <MenuLinks />
        </Flex>
    );
}
