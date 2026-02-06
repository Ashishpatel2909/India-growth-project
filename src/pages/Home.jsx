import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

/* ================= STORY DATA ================= */
const storyData = [
  {
    title: "Science & Technology",
    text:
      "From IITs and IISc to ISRO, Mangalyaan, UPI and biotech leadership, India has evolved into a global science and innovation hub.",
    bg: "from-sky-100 to-blue-200",
    hover: "hover:shadow-blue-400/60",
  },
  {
    title: "Economic Growth",
    text:
      "From a struggling post-colonial economy to the world’s 5th largest GDP, India’s growth is fueled by reforms, startups and digital markets.",
    bg: "from-emerald-100 to-green-200",
    hover: "hover:shadow-green-400/60",
  },
  {
    title: "Infrastructure Development",
    text:
      "India now has the world’s third-largest road network, full village electrification and one of Asia’s largest power grids.",
    bg: "from-orange-100 to-amber-200",
    hover: "hover:shadow-orange-400/60",
  },
  {
    title: "Human Development",
    text:
      "Literacy rose from 12% to 74%, life expectancy doubled, yet healthcare and education quality remain areas to strengthen.",
    bg: "from-purple-100 to-pink-200",
    hover: "hover:shadow-pink-400/60",
  },
];

/* ================= GLOBAL RELATIONS ================= */
const relations = [
  {
    country: "United States",
    flag: "https://flagcdn.com/w80/us.png",
    note: "Technology & Strategic Partner",
  },
  {
    country: "Russia",
    flag: "https://flagcdn.com/w80/ru.png",
    note: "Defence Cooperation",
  },
  {
    country: "Japan",
    flag: "https://flagcdn.com/w80/jp.png",
    note: "Infrastructure & Investment",
  },
  {
    country: "France",
    flag: "https://flagcdn.com/w80/fr.png",
    note: "Aerospace & Defence",
  },
  {
    country: "UAE",
    flag: "https://flagcdn.com/w80/ae.png",
    note: "Trade & Energy Partner",
  },
];

/* ================= COMPARISON ================= */
const comparisons = [
  { label: "GDP Rank", india: "#5", usa: "#1", china: "#2" },
  { label: "Population", india: "1.4 Bn", usa: "331 M", china: "1.42 Bn" },
  { label: "Startup Ecosystem", india: "3rd", usa: "1st", china: "2nd" },
  { label: "Defence Power Rank", india: "#4", usa: "#1", china: "#3" },
];

function Home() {
  const [mode, setMode] = useState("story");

  /* Disable right-click for basic content protection */
  useEffect(() => {
    const block = (e) => e.preventDefault();
    document.addEventListener("contextmenu", block);
    return () => document.removeEventListener("contextmenu", block);
  }, []);

  return (
    <section className="overflow-x-hidden bg-black text-white">

      {/* ================= HERO ================= */}
      <div
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('/indiabg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">
            India’s Changing Landscape 🇮🇳
          </h1>
          <p className="text-gray-300 text-lg mb-10">
            A journey from ancient knowledge to global leadership.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink
              to="/timeline"
              className="px-8 py-3 bg-orange-500 rounded-full font-semibold hover:scale-105 transition"
            >
              Explore Timeline
            </NavLink>
            <button
              onClick={() => setMode(mode === "story" ? "data" : "story")}
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
            >
              Toggle View
            </button>
          </div>
        </motion.div>
      </div>

      {/* ================= STORY SECTION ================= */}
      {mode === "story" && (
        <section className="py-20 px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            India’s Growth Story
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 max-w-6xl mx-auto">
            {storyData.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`p-8 rounded-3xl bg-gradient-to-br ${item.bg}
                text-gray-900 shadow-lg transition-all duration-300
                ${item.hover}`}
              >
                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ================= GLOBAL RELATIONS ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-3xl font-bold text-center mb-14">
          India & Global Relations
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {relations.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.12, y: -6 }}
              className="w-44 h-48 bg-gray-800 rounded-2xl
              flex flex-col items-center justify-center
              border border-gray-600 hover:border-orange-500
              hover:shadow-orange-400/40 transition"
            >
              <img
                src={r.flag}
                alt={r.country}
                className="w-14 h-10 object-cover rounded mb-3"
                draggable="false"
              />
              <p className="font-semibold">{r.country}</p>
              <p className="text-xs text-gray-400 text-center px-2">
                {r.note}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= COMPARISON TABLE ================= */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          India vs Global Powers
        </h2>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-4 border">Metric</th>
                <th className="p-4 border">🇮🇳 India</th>
                <th className="p-4 border">🇺🇸 USA</th>
                <th className="p-4 border">🇨🇳 China</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr
                  key={i}
                  className="border hover:bg-gray-800 transition"
                >
                  <td className="p-4 border">{row.label}</td>
                  <td className="p-4 border text-orange-400">{row.india}</td>
                  <td className="p-4 border">{row.usa}</td>
                  <td className="p-4 border">{row.china}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black border-t border-orange-500 py-8 text-center">
        <p className="font-semibold">Created by 💛 Mr. Ashish</p>
        <p className="text-sm text-gray-400">
          India Growth Story © {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}

export default Home;
