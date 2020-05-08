import TogglerContext from "../context/toggler";
import { useContext } from "react";

export default function Toggler() {
  const togglerContext = useContext(TogglerContext);

  return (
    <>
      <button
        onClick={togglerContext.switchStyleMode}
        className={`${togglerContext.styleMode}-mode`}
      >
        {`${togglerContext.styleMode === "light" ? "Dark" : "Light"} mode`}
      </button>

      <style jsx>{`
        button {
          border: 1px solid gray;
          border-radius: 4px;
          padding: 5px;
        }

        button.light-mode {
          background-color: #282c35;
          color: white;
        }

        button.dark-mode {
          background-color: white;
          color: #282c35;
        }
      `}</style>
    </>
  );
}
