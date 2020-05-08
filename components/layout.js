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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
