import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  const linkClass = ({ isActive }) =>
    `transition font-medium ${
      isActive
        ? "text-yellow-300"
        : "text-white hover:text-emerald-200"
    }`;

  return (
    <nav className="bg-emerald-700 dark:bg-gray-900 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h2 className="text-2xl font-bold text-white">
          🕌 Quran Companion
        </h2>

        <div className="flex items-center gap-6">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/quran" className={linkClass}>
            Quran
          </NavLink>

          <NavLink to="/prayer-times" className={linkClass}>
            Prayer Times
          </NavLink>

          <NavLink to="/duas" className={linkClass}>
            Duas
          </NavLink>

          <NavLink to="/tasbih" className={linkClass}>
            Tasbih
          </NavLink>

          <NavLink to="/qibla" className={linkClass}>
            Qibla
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <button
            onClick={toggleTheme}
            className="bg-white dark:bg-gray-700 dark:text-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;