import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 mt-20 border-t border-gray-300 dark:border-gray-700">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-4">

        {/* BRAND / ABOUT */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
            India Growth 🇮🇳
          </h3>
          <p className="text-sm leading-relaxed">
            An educational data-visualization project showcasing India’s
            journey after independence through timelines, maps, charts,
            and storytelling.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            {["/", "/timeline", "/map", "/charts", "/about"].map((path, i) => (
              <li key={i}>
                <NavLink
                  to={path}
                  className="hover:text-orange-500 transition hover:translate-x-1 inline-block"
                >
                  {path === "/"
                    ? "Home"
                    : path.replace("/", "").charAt(0).toUpperCase() +
                      path.slice(2)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* TECHNOLOGIES */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Built With
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "React.js",
              "Tailwind CSS",
              "Framer Motion",
              "React Router",
              "Recharts",
            ].map((tech, i) => (
              <li
                key={i}
                className="hover:text-orange-500 transition cursor-default"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* DATA & DISCLAIMER */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Data & Purpose
          </h4>
          <p className="text-sm leading-relaxed">
            All statistics are compiled from publicly available sources and
            used for academic and educational visualization only. This project
            does not claim official representation.
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-6 text-center text-xs">
        <p className="mb-1">
          © {new Date().getFullYear()} <span className="font-semibold">विकसित भारत 📈 Project</span>
        </p>
        <p className="opacity-70">
          Designed & Developed by 💛 <span className="text-orange-500 font-semibold">Mr. Ashish</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
