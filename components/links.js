import Link from "next/link";

export default function Links() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="https://github.com/ilmoralito">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mario-martinez-1ba570a7">
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/615274/user615274">
            Stackoverflow
          </a>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        li a {
          background-color: "tomato";
        }
      `}</style>
    </nav>
  );
}
