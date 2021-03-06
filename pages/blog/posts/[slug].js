import Layout from "../../../components/layout";
import PostBody from "../../../components/post-body";
import markdownToHtml from "../../../utils/markdownToHtml";
import { getPosts, getPostBySlug } from "../../../utils/api";
import Head from "next/head";

export default function Post({ post, name }) {
  const { data, content } = post;
  const [origin, setOrigin] = React.useState("");

  React.useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return (
    <Layout title={data.title} description={data.excerpt}>
      <Head>
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mmartinez" />
        <meta name="twitter:creator" content="@mmartinez" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.excerpt} />
        <meta name="twitter:image" content={`${origin}${data.ogImage.url}`} />

        {/* Open Graph */}
        <meta property="og:url" content={origin} key="ogurl" />
        <meta
          property="og:image"
          content={`${origin}${data.ogImage.url}`}
          key="ogimage"
        />
        <meta property="og:site_name" content={name} key="ogsitename" />
        <meta property="og:title" content={data.title} key="ogtitle" />
        <meta property="og:description" content={data.excerpt} key="ogdesc" />
      </Head>

      <main>
        <PostBody data={data}>{content}</PostBody>
      </main>

      <style jsx>{`
        main {
          width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");
  const siteConfiguration = await import(`../../../site-configuration.json`);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      name: siteConfiguration.name,
    },
  };
}
