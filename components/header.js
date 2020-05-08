import Toggler from "./toggler";
import Menu from "./menu";

export default function Header() {
  return (
    <header>
      <Menu />
      <Toggler />

      <style jsx global>{`
        header {
          border-bottom: 1px dashed tomato;
          padding: 10px;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </header>
  );
}
