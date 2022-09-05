import "../styles/globals.css";
import type { AppProps } from "next/app";
import LeftSideBar from "../components/LeftSideBar";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import Head from "next/head";
import iconImg from "../assets/pics/health-logo-doc-title.png";

// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Project-Health App</title>
        <link rel="icon" href="/health-favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
  // const getLayout =
  //   Component.getLayout ??
  //   ((page) => (
  //     <>
  //       <LeftSideBar />
  //       {page}
  //     </>
  //   ));

  // return getLayout(<Component {...pageProps} />);
}

export default MyApp;
