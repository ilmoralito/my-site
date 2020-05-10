import Header from "./header";
import Head from "next/head";
import { useContext } from "react";
import TogglerContext from "../context/toggler";

export default function Layout({ title, description, children }) {
  const togglerContext = useContext(TogglerContext);
  const backgroundColor =
    togglerContext.styleMode === "light" ? "white" : "#282c35";
  const foregroundColor =
    togglerContext.styleMode === "light" ? "#282c35" : "#ffa7c4";

  return (
    <>
      <Head>
        <title>{title}</title>
        {/* CEO metas */}
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <main>{children}</main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700;800;900&display=swap");

        body {
          background-color: ${backgroundColor};
          color: ${foregroundColor};
          padding: 0;
          margin: 0;
          font-family: "Roboto Mono", mono space;
        }

        body a {
          color: ${foregroundColor};
        }
      `}</style>
    </>
  );
}
