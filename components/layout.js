import Header from "./header";
import Head from "next/head";

export default function Layout({ title, description, children }) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
    </div>
  );
}
