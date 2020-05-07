import Profile from "../components/profile";
import Layout from "../components/layout";
import Links from "../components/links";

export default function Index() {
  return (
    <>
      <Layout title="Home">
        <Profile />
        <Links />
      </Layout>
    </>
  );
}
