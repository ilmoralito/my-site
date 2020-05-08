import Profile from "../components/profile";
import Layout from "../components/layout";
import Links from "../components/links";

export default function Index() {
  return (
    <>
      <Layout title="Home">
        <div className="container">
          <div>
            <Profile />
            <Links />
          </div>
        </div>
      </Layout>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container div {
          width: 600px;
        }
      `}</style>
    </>
  );
}
