import Layout from "../../components/layout";
import PostBody from "../../components/post-body";
import markdownToHtml from "../../utils/markdownToHtml";
import { getPosts, getPostBySlug } from "../../utils/api";

export default function Post({ post }) {
  const { data, content } = post;

  return (
    <Layout title={data.title}>
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
          slug: post.data.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");
  console.log(content);

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}
