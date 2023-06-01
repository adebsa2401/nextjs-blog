import React from "react";
import Layout from "@/components/layout";
import '@/styles/global.scss';
import AppPropsWithLayout from "@/types/app-props";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    <Layout>
      {getLayout(<Component {...pageProps} />)}
    </Layout>
  );
}
