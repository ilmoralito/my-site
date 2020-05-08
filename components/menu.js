import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        nav ul {
          list-style: none;
          padding: 0;
          margin: 0;

          display: flex;
        }

        nav ul li {
          padding: 5px;
        }

        nav ul li a {
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
