import { useContext } from "react";
import { ThemeContext } from "../App";

export default function User() {
  const themeData = useContext(ThemeContext);
  const { theme, setTheme } = themeData;

  return (
    <div>
      <ul className={theme}>
        <li>UserName: Dunglv</li>
        <li>Age: 26</li>
        <li>Address: HN</li>
      </ul>

      <div>
        <button
          onClick={() =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark"))
          }
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}
