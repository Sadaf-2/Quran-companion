import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const fadeDown = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-300 flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">

        {/* Heading */}
        <motion.h1
          variants={fadeDown}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-bold text-emerald-700 dark:text-emerald-400 mb-6"
        >
          🕌 Welcome to Quran Companion
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg text-gray-600 dark:text-gray-300 mb-10"
        >
          Read the Holy Quran, check Prayer Times, explore Daily Duas,
          use the Digital Tasbih and find the Qibla Direction — all in one
          place.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/quran"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              📖 Read Quran
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/prayer-times"
              className="border border-emerald-600 text-emerald-700 dark:text-emerald-300 dark:border-emerald-400 hover:bg-emerald-100 dark:hover:bg-gray-800 px-6 py-3 rounded-xl font-semibold transition"
            >
              🕌 Prayer Times
            </Link>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Quran */}
          <motion.div
            variants={card}
            whileHover={{ scale: 1.05, y: -8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
          >
            <div className="text-5xl mb-3">📖</div>

            <h3 className="text-xl font-bold dark:text-white">
              Quran
            </h3>

            <p className="text-gray-500 dark:text-gray-300 mt-2">
              Read all 114 Surahs with translations.
            </p>
          </motion.div>

          {/* Prayer */}
          <motion.div
            variants={card}
            whileHover={{ scale: 1.05, y: -8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
          >
            <div className="text-5xl mb-3">🕌</div>

            <h3 className="text-xl font-bold dark:text-white">
              Prayer Times
            </h3>

            <p className="text-gray-500 dark:text-gray-300 mt-2">
              View accurate daily prayer timings.
            </p>
          </motion.div>

          {/* Duas */}
          <motion.div
            variants={card}
            whileHover={{ scale: 1.05, y: -8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
          >
            <div className="text-5xl mb-3">🤲</div>

            <h3 className="text-xl font-bold dark:text-white">
              Daily Duas
            </h3>

            <p className="text-gray-500 dark:text-gray-300 mt-2">
              Learn authentic daily duas.
            </p>
          </motion.div>

          {/* Tasbih */}
          <motion.div
            variants={card}
            whileHover={{ scale: 1.05, y: -8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
          >
            <div className="text-5xl mb-3">📿</div>

            <h3 className="text-xl font-bold dark:text-white">
              Tasbih
            </h3>

            <p className="text-gray-500 dark:text-gray-300 mt-2">
              Count your daily dhikr digitally.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Home;