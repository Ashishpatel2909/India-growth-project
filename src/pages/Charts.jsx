import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

/* ================= UPDATED AUTHENTIC DATA (Approx 2024) =================
Sources level:
World Bank | NITI Aayog | Census | Govt of India briefings
*/

// GDP in USD Trillion
const gdpData = [
  { year: "1990", gdp: 0.32 },
  { year: "2000", gdp: 0.48 },
  { year: "2010", gdp: 1.7 },
  { year: "2020", gdp: 2.6 },
  { year: "2024", gdp: 3.4 },
];

// Literacy rate %
const literacyData = [
  { year: "1951", rate: 18 },
  { year: "1981", rate: 36 },
  { year: "2001", rate: 65 },
  { year: "2011", rate: 74 },
  { year: "2023", rate: 78 },
];

// Sector contribution to GDP (%)
const sectorData = [
  { sector: "Agriculture", value: 18 },
  { sector: "Industry", value: 27 },
  { sector: "Services / IT", value: 55 },
];

// Infrastructure & Power (% access)
const infraData = [
  { name: "Electricity", value: 99 },
  { name: "Internet", value: 55 },
  { name: "All-weather Roads", value: 72 },
  { name: "Clean Drinking Water", value: 88 },
];

// Poverty reduction (% population below poverty line)
const povertyData = [
  { year: "1993", rate: 45 },
  { year: "2005", rate: 37 },
  { year: "2011", rate: 22 },
  { year: "2023", rate: 10 },
];

// Urban vs Rural population
const populationSplit = [
  { name: "Urban", value: 36 },
  { name: "Rural", value: 64 },
];

function Charts() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-b from-orange-50 via-white to-green-50 dark:from-gray-950 dark:to-gray-900 fade-page">

      {/* ===== HEADER ===== */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-bold text-orange-600">
          India in Numbers
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          A clear, colorful snapshot of India’s economic and social progress
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">

        {/* GDP */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">
            Economic Growth (GDP – USD Trillion)
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={gdpData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line dataKey="gdp" stroke="#f97316" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Literacy */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-purple-600">
            Literacy Rate Growth (%)
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={literacyData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line dataKey="rate" stroke="#9333ea" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sector Contribution */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-green-600">
            Sector Contribution to GDP (%)
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sectorData}>
              <XAxis dataKey="sector" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Infrastructure */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">
            Infrastructure & Technology Reach (%)
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={infraData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Poverty */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-red-500">
            Poverty Reduction (% Below Poverty Line)
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={povertyData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line dataKey="rate" stroke="#ef4444" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Population Split */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-600">
            Urban vs Rural Population (%)
          </h2>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={populationSplit}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* ===== GENERAL KNOWLEDGE SECTION ===== */}
      <section className="max-w-6xl mx-auto mt-32 grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Education",
            text: "India has over 1.5 million schools and the largest youth population in the world, making education a national priority.",
          },
          {
            title: "Technology & IT",
            text: "India is a global IT powerhouse, contributing over 7% to GDP and exporting services worldwide.",
          },
          {
            title: "Energy & Power",
            text: "India is one of the top producers of renewable energy, especially solar and wind power.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-bold mb-2 text-orange-600">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <p className="text-xs text-gray-500 text-center mt-16 max-w-3xl mx-auto">
        Data shown is based on publicly available summaries from World Bank,
        Census of India, NITI Aayog and Government of India reports (updated till
        2023–24). Values are rounded for visualization clarity.
      </p>
    </section>
  );
}

export default Charts;
