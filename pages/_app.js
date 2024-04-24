import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Shared/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <div className="mt-32">
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}
