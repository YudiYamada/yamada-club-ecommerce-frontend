import "./theme.toggle.button.component.css";

import { useEffect, useState } from "react";

function ThemeToggleButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-button-styles">
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggleButton;
