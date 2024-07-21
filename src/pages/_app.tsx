import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import theme from "@/styles/theme";
// import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* <UserProvider> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </UserProvider> */}
    </ThemeProvider>
  );
}
