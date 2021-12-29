import {
    ChakraProvider,
    cookieStorageManager,
    localStorageManager,
} from "@chakra-ui/react";

export function Chakra({ cookies, children }) {
    // b) Pass `colorModeManager` prop
    const colorModeManager =
        typeof cookies === "string"
            ? cookieStorageManager(cookies)
            : localStorageManager;

    return (
        <ChakraProvider colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    );
}

// also export a reusable function getServerSideProps
export function getServerSideProps({ req }) {
    return {
        props: {
            cookies: req.headers.cookie ?? "",
        },
    };
}
