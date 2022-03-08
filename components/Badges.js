import React from "react";
import { Badge, Wrap } from "@chakra-ui/react";

const Badges = (props) => {
    const { items, ...badgeProps } = props;

    return (
        <Wrap justify="center" width={props?.width}>
            {items.map((item, index) => {
                return (
                    <Badge key={index} colorScheme={item.color} {...badgeProps}>
                        {item.label}
                    </Badge>
                );
            })}
        </Wrap>
    );
};

export default Badges;
