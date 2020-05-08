export default function Post({ data, children }) {
  const { title, excerpt, coverImage, date, author, ogImage } = data;
console.log(coverImage)
  return (
    <section>
      <img src={coverImage} alt={title} />
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
}
