import { useColorModeValue } from "@chakra-ui/react";

export const greyTextColor = () => {
    return useColorModeValue("gray.500", "gray.600");
};

export const lightGreyTextColor = () => {
    return useColorModeValue("gray.300", "gray.700");
};

/* FRAMER
------------------------------------------------- */
// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// Custom variant
export const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing },
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
};

export const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};
