import React from "react";
import { Badge, Wrap } from "@chakra-ui/react";

const Badges = (props) => {
    const { items, ...badgeProps } = props;

    return (
        <Wrap justify="center" width={props?.width}>
            {items?.data?.map((item, index) => {
                return (
                    <Badge
                        key={index}
                        colorScheme={item.attributes.Colour.toLowerCase()}
                        {...badgeProps}
                    >
                        {item.attributes.name}
                    </Badge>
                );
            })}
        </Wrap>
    );
};

export default Badges;
