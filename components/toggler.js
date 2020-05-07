import TogglerContext from "../context/toggler";
import { useContext } from "react";

export default function Toggler() {
  const togglerContext = useContext(TogglerContext);

  return (
    <>
      <button
        onClick={togglerContext.switchStyleMode}
        style={{
          backgroundColor:
            togglerContext.styleMode === "light" ? "red" : "steelblue",
        }}
      >
        Switch to dark mode
      </button>
    </>
  );
}
