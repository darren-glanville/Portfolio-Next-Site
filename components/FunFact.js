import FetchWrapper from "../functions/fetch-wrapper";
const API = new FetchWrapper("https://www.boredapi.com/api/");

import React, { useState, useEffect } from "react";
import {
    useColorModeValue,
    Box,
    Flex,
    Icon,
    Text,
    Tooltip,
} from "@chakra-ui/react";
import { FaLightbulb } from "react-icons/fa";

import Loading from "./Loading";

export default function FunFact() {
    const [fact, setFact] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const textColor = useColorModeValue("purple.700", "purple.300");

    // get fact
    useEffect(() => {
        setIsLoading(true);

        API.get("activity")
            .then((data) => {
                setFact(data?.activity);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    // loading
    if (isLoading) {
        return <Loading />;
    }
    // show facts
    else {
        return (
            <Box>
                <Tooltip hasArrow label="Randomly generated from an API">
                    <Flex align="center" color={textColor}>
                        <Icon as={FaLightbulb} w={4} h={4} pe={1} />
                        <Text fontSize="xs">
                            <strong>Why Not?</strong> - {fact}
                        </Text>
                    </Flex>
                </Tooltip>
            </Box>
        );
    }
}
