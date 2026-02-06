import { motion } from "framer-motion";

function About() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-b from-orange-50 via-white to-green-50 dark:from-gray-900 dark:to-gray-950 fade-page">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-orange-600">
            About This Project 🇮🇳
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A visual and data-driven exploration of India’s transformation after
            independence — combining history, geography, and modern analytics.
          </p>
        </motion.div>

        {/* ===== PURPOSE ===== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-orange-500">
            Project Purpose
          </h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            This project is designed to present India’s post-independence growth
            story in a form that is easy to understand and visually engaging.
            Instead of limiting analysis to raw numbers, the project connects
            historical context with modern data to explain how India evolved
            politically, economically, and socially since 1947.
          </p>
        </motion.section>

        {/* ===== COVERAGE ===== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-green-600">
            What This Website Covers
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 bg-orange-50 dark:bg-gray-900 rounded-xl">
              <h3 className="font-semibold mb-2">Historical Timeline</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Key milestones such as independence, economic reforms, digital
                transformation, and infrastructure development across decades.
              </p>
            </div>

            <div className="p-5 bg-green-50 dark:bg-gray-900 rounded-xl">
              <h3 className="font-semibold mb-2">Regional Perspective</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Regional variations in development — showcasing how geography,
                policy, and resources shaped growth differently across India.
              </p>
            </div>

            <div className="p-5 bg-blue-50 dark:bg-gray-900 rounded-xl">
              <h3 className="font-semibold mb-2">Data & Visualization</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Interactive charts on GDP, literacy, population, poverty, and
                infrastructure to make trends visually intuitive.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ===== WHY IT MATTERS ===== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            Why This Project Matters
          </h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            India’s journey after independence is one of the most significant
            development stories in the world. From widespread poverty and low
            literacy in 1947 to becoming one of the fastest-growing major
            economies, India’s progress reflects resilience, policy evolution,
            and technological innovation.
          </p>

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            This project aims to help students, educators, and general audiences
            understand that transformation beyond headlines — through context,
            comparison, and visual storytelling.
          </p>
        </motion.section>

        {/* ===== AUTHENTIC FACTS ===== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-purple-600">
            Key India Development Facts
          </h2>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
            <li>• India’s GDP grew from under $50 billion (1950s) to over $3.4 trillion.</li>
            <li>• Literacy rate increased from ~18% (1951) to nearly 80% today.</li>
            <li>• Over 99% of households now have access to electricity.</li>
            <li>• India is a global leader in IT services and digital public infrastructure.</li>
            <li>• Poverty levels have fallen sharply over the past three decades.</li>
          </ul>
        </motion.section>

        {/* ===== DATA DISCLAIMER ===== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-xl font-bold mb-3 text-gray-700 dark:text-gray-200">
            Data Disclaimer
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            The information and data presented in this project are compiled from
            publicly available sources such as the Census of India, World Bank,
            NITI Aayog, and government reports. Values are approximate and are
            intended for educational and visualization purposes only.
          </p>
        </motion.section>

      </div>
    </section>
  );
}

export default About;
