import {AppProps} from "next/app";
import {NextPage} from "next";
import React from "react";

export type NextPageWithLayout<P={}, IP=P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

export type AppPropsWithLayout<P = {}> = AppProps<P> & {
  Component: NextPageWithLayout<P>
}

export default AppPropsWithLayout;