import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu({ children, href }) {
  const router = useRouter();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className={router.pathname.includes("blog") ? "active" : ""}>
              Blog
            </a>
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

        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
