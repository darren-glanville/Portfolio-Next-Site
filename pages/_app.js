import { ChakraProvider } from "@chakra-ui/react";
import theme from "../layouts/theme";
import Layout from "../layouts/default";

function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}
export default App;
