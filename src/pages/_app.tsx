import "@/styles/globals.css";
import { store } from "@/reduxapp/store";
import Layout from "@/components/common/Layout";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </Provider>
  );
}
