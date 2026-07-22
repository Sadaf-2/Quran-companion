import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());

    alert("👋 Logged Out Successfully");

    navigate("/login");
  };

  const linkAnimation = {
    whileHover: {
      scale: 1.1,
    },

    whileTap: {
      scale: 0.9,
    },
  };

  return (
    <nav className="navbar">
      {/* Logo */}

      <motion.h2
        className="logo"
        initial={{
          opacity: 0,
          x: -50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        🕌 Quran Companion
      </motion.h2>

      <div className="navbar-links">
        <motion.div {...linkAnimation}>
          <NavLink to="/">Home</NavLink>
        </motion.div>

        <motion.div {...linkAnimation}>
          <NavLink to="/quran">Quran</NavLink>
        </motion.div>

        <motion.div {...linkAnimation}>
          <NavLink to="/prayer-times">Prayer Times</NavLink>
        </motion.div>

        <motion.div {...linkAnimation}>
          <NavLink to="/duas">Duas</NavLink>
        </motion.div>

        <motion.div {...linkAnimation}>
          <NavLink to="/tasbih">Tasbih</NavLink>
        </motion.div>

        <motion.div {...linkAnimation}>
          <NavLink to="/qibla">Qibla</NavLink>
        </motion.div>

        <motion.div {...linkAnimation}>
          <NavLink to="/about">About</NavLink>
        </motion.div>

        {/* Profile */}
        {token && (
          <motion.div {...linkAnimation}>
            <NavLink to="/profile">👤 Profile</NavLink>
          </motion.div>
        )}

        {/* Authentication */}

        {!token ? (
          <>
            <motion.div {...linkAnimation}>
              <NavLink to="/login">🔐 Login</NavLink>
            </motion.div>

            <motion.div {...linkAnimation}>
              <NavLink to="/signup">📝 Signup</NavLink>
            </motion.div>
          </>
        ) : (
          <>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              style={{
                fontWeight: "bold",
                color: "var(--primary)",
              }}
            >
              👋 {user?.name}
            </motion.span>

            <motion.button
              className="theme-btn"
              onClick={handleLogout}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              🚪 Logout
            </motion.button>
          </>
        )}

        {/* Theme Button */}

        <motion.button
          className="theme-btn"
          onClick={toggleTheme}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;