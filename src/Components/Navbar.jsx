import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const themeContext = useTheme();
  const toggleTheme = themeContext?.toggleTheme;
  const theme = themeContext?.theme;

  const linkClasses = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium transition
     ${
       isActive
         ? "text-orange-600 dark:text-orange-400"
         : "text-gray-700 dark:text-gray-300 hover:text-orange-500"
     }
     after:absolute after:left-0 after:-bottom-1 after:h-[2px]
     after:w-full after:origin-left after:scale-x-0
     after:bg-gradient-to-r after:from-orange-500 after:to-green-500
     after:transition-transform after:duration-300
     ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}
    `;

  return (
    <nav
      className="sticky top-0 z-50
                 flex justify-between items-center
                 px-10 py-4
                 bg-white/80 dark:bg-black/70
                 backdrop-blur-md
                 text-black dark:text-white
                 border-b border-gray-200 dark:border-gray-800"
    >
      {/* BRAND */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">🇮🇳</span>
        <h1 className="font-extrabold text-xl tracking-wide">
          India<span className="text-orange-500">Growth</span>
        </h1>
      </div>

      {/* LINKS */}
      <div className="flex gap-8 items-center">
        <NavLink to="/" end className={linkClasses}>
          Home
        </NavLink>
        <NavLink to="/timeline" className={linkClasses}>
          Timeline
        </NavLink>
        <NavLink to="/map" className={linkClasses}>
          Map
        </NavLink>
        <NavLink to="/charts" className={linkClasses}>
          Charts
        </NavLink>
        <NavLink to="/about" className={linkClasses}>
          About
        </NavLink>

        {/* THEME TOGGLE */}
        {toggleTheme && (
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              ml-2 h-9 w-9 flex items-center justify-center
              rounded-full
              border border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-900
              hover:scale-110 transition-transform
            "
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
