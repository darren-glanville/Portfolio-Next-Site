// Technologies
export const technologies = [
    {
        label: "Laravel",
        color: "red",
    },
    {
        label: "PHP",
        color: "purple",
    },
    {
        label: "Webpack",
        color: "blue",
    },
    {
        label: "React",
        color: "cyan",
    },
    {
        label: "NextJS",
        color: "cyan",
    },
    {
        label: "VueJS",
        color: "green",
    },
    {
        label: "Wordpress",
        color: "blue",
    },
    {
        label: "HTML5",
        color: "red",
    },
    {
        label: "CSS",
        color: "orange",
    },
    {
        label: "SCSS",
        color: "orange",
    },
    {
        label: "Javascript",
        color: "yellow",
    },
    {
        label: "JQuery",
        color: "yellow",
    },
    {
        label: "JSX",
        color: "yellow",
    },
];

// Footer Links
import { Icon } from "@chakra-ui/react";
import { FaEnvelopeOpenText, FaGithub, FaLinkedin } from "react-icons/fa";
export const socialLinks = [
    {
        icon: <Icon as={FaEnvelopeOpenText} boxSize="full" />,
        link: "mailto:hithere@darren-glanville.dev",
        label: "E-mail me",
    },
    {
        icon: <Icon as={FaGithub} boxSize="full" />,
        link: "https://github.com/darren-glanville",
        label: "See my GitHub account",
    },
    {
        icon: <Icon as={FaLinkedin} boxSize="full" />,
        link: "https://www.linkedin.com/in/darren-glanville",
        label: "See my LinkedIn account",
    },
];
