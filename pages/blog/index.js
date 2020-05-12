import Layout from "../../components/layout";
import MainPost from "../../components/mainPost";
import { getPosts } from "../../utils/api";
import Link from "next/link";
import DateFormater from "../../components/date-formater";

export default function Blog({ posts }) {
  const post = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <Layout title="Blog">
      <main>
        <h1 style={{ textAlign: "center" }}>Welcome to my blog</h1>

        {post && <MainPost data={post.data} slug={post.slug} />}

        {otherPosts && (
          <>
            <h2 style={{ textAlign: "center" }}>Other publitations</h2>
            {otherPosts.map((post) => (
              <section key={post.slug}>
                <Link href="/blog/posts/[slug]" as={`/blog/posts/${post.slug}`}>
                  <a>{post.data.title}</a>
                </Link>
                <p>
                  <DateFormater dateString={post.data.date} />
                </p>
                <p>{post.data.excerpt}</p>
              </section>
            ))}
          </>
        )}
      </main>

      <style jsx global>{`
        main {
          width: 600px;
          margin: 0 auto;
        }

        section {
          padding: 15px;
          border-bottom: 1px dashed tomato;
        }

        section:last-child {
          border-bottom: none;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getPosts();

  return { props: { posts } };
}
