import Link from "next/link";
import DateFormater from "../components/date-formater";

export default function MainPost({ data, slug }) {
  const { title, excerpt, date } = data;

  return (
    <section>
      <h1>
        <Link href={`/blog/posts/${slug}`}>
          <a>{title}</a>
        </Link>
      </h1>
      <p>
        <DateFormater dateString={date} />
      </p>
      <p>{excerpt}</p>

      <style jsx>{`
        section {
          border: 1px dashed tomato;
          border-radius: 4px;
          padding: 15px;
        }

        section h1 {
          margin-top: 0;
        }

        section p {
          margin-bottom: 0;
        }
      `}</style>
    </section>
  );
}
