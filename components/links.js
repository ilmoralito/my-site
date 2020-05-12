import Link from "next/link";
import { useRouter } from "next/router";

export default function Links() {
  const router = useRouter();
  const links = [
    {
      name: "Github",
      link: "https://github.com/ilmoralito",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/mario-martinez-1ba570a7",
    },
    {
      name: "Stackoverflow",
      link: "https://stackoverflow.com/users/615274/user615274",
    },
    {
      name: "Email",
      link: "mailto:mariorojermartinez@gmail.com",
    },
  ];

  return (
    <>
      <p>Contact me</p>
      <nav>
        <ul>
          {links.map((link) => (
            <ContactLink key={link.name} {...link} />
          ))}
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>

        <style jsx>{`
          ul {
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: space-between;
          }

          a:hover {
            color: tomato;
          }
        `}</style>
      </nav>
    </>
  );
}

function ContactLink({ name, link }) {
  return (
    <>
      <li>
        <a href={link}>{name}</a>
      </li>
      <style jsx>{`
        li a:hover {
          color: tomato;
        }
      `}</style>
    </>
  );
}
