import { Flex, Link, Button, Tooltip } from "@chakra-ui/react";

import { socialLinks } from "../../data";

const Social = (props) => {
    return (
        <Flex>
            {socialLinks.map((link, index) => {
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

export default Social;
