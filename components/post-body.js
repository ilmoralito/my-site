import DateFomater from "../components/date-formater";

export default function PostBody({ data, children }) {
  const { title, coverImage, date, author } = data;

  return (
    <article>
      <header>
        <img src={coverImage} alt={title} />
        <h1>
          {title} by {author.name}
        </h1>
        <small>
          <DateFomater dateString={date} />
        </small>
      </header>
      <main>
        <div dangerouslySetInnerHTML={{ __html: children }}></div>
      </main>

      <style jsx>{`
        article {
          margin: 10px 0;
        }

        h1 {
          margin: 0;
        }
      `}</style>
    </article>
  );
}
