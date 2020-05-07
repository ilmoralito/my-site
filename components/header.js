import Toggler from "./toggler";
import Menu from "./menu";

export default function Header() {
  return (
    <header>
      <Menu />
      <Toggler />

      <style jsx global>{`
        header {
          display: flex;
          padding: 10px;
          background-color: tomato;
          justify-content: space-between;
        }
      `}</style>
    </header>
  );
}
