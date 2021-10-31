import React from "react";
import { Badge, Wrap } from "@chakra-ui/react";

const Badges = (props) => {
    return (
        <Wrap justify="center" width={props?.width}>
            {props.items.map((item, index) => {
                return (
                    <Badge key={index} colorScheme={item.color}>
                        {item.label}
                    </Badge>
                );
            })}
        </Wrap>
    );
};

export default Badges;
