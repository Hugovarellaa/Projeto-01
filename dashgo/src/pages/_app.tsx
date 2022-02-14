import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidbebarProvider } from "../context/SidebarDrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidbebarProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SidbebarProvider>
  );
}

export default MyApp;
