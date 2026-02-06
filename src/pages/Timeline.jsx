import { motion } from "framer-motion";
import { useState } from "react";

const timelineData = [
  {
    decade: "1950s",
    phase: "pre",
    year: "1947–1959",
    titleEn: "Independence & Nation Building",
    titleHi: "स्वतंत्रता और राष्ट्र निर्माण",
    descEn:
      "India focused on democratic foundations, Constitution drafting, and integrating princely states.",
    descHi:
      "भारत ने लोकतांत्रिक नींव, संविधान निर्माण और रियासतों के एकीकरण पर ध्यान दिया।",
    stats: [
      { label: "Literacy Rate", value: 18 },
      { label: "Life Expectancy", value: 32 },
    ],
  },
  {
    decade: "1970s",
    phase: "pre",
    year: "1960s–1970s",
    titleEn: "Planned Economy & Green Revolution",
    titleHi: "नियोजित अर्थव्यवस्था और हरित क्रांति",
    descEn:
      "Five-Year Plans strengthened agriculture, heavy industries, and food security.",
    descHi:
      "पंचवर्षीय योजनाओं ने कृषि और खाद्य सुरक्षा को मजबूत किया।",
    stats: [
      { label: "Food Grain Growth", value: 60 },
      { label: "Irrigated Land", value: 45 },
    ],
  },
  {
    decade: "1990s",
    phase: "post",
    year: "1991",
    titleEn: "Economic Liberalization",
    titleHi: "आर्थिक उदारीकरण",
    descEn:
      "Market reforms opened India to global trade and private investment.",
    descHi:
      "बाजार सुधारों से भारत वैश्विक व्यापार से जुड़ा।",
    stats: [
      { label: "GDP Growth", value: 65 },
      { label: "FDI Growth", value: 70 },
    ],
  },
  {
    decade: "Modern",
    phase: "post",
    year: "2015–Present",
    titleEn: "Digital & Infrastructure India",
    titleHi: "डिजिटल और आधुनिक भारत",
    descEn:
      "UPI, highways, startups, electrification, and digital public platforms expanded rapidly.",
    descHi:
      "डिजिटल भुगतान, स्टार्टअप और बुनियादी ढांचे का तेज़ विस्तार हुआ।",
    stats: [
      { label: "Digital Adoption", value: 85 },
      { label: "Electricity Access", value: 95 },
    ],
  },
];

function Timeline() {
  const [language, setLanguage] = useState("en");
  const [decade, setDecade] = useState("all");
  const [comparison, setComparison] = useState("all");

  const filteredData = timelineData.filter(item => {
    const decadeMatch = decade === "all" || item.decade === decade;
    const phaseMatch = comparison === "all" || item.phase === comparison;
    return decadeMatch && phaseMatch;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="min-h-screen px-6 py-24 bg-gradient-to-b from-orange-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 fade-page">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-20">
        <h1 className="text-5xl font-bold text-center mb-8">
          India’s Growth Timeline
        </h1>

        {/* CONTROLS */}
        <div className="flex flex-wrap justify-center gap-4">

          {/* LANGUAGE */}
          <button
            onClick={() => setLanguage("en")}
            className={`px-4 py-2 rounded-md text-sm
              ${language === "en" ? "bg-orange-500 text-white" : "border"}`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("hi")}
            className={`px-4 py-2 rounded-md text-sm
              ${language === "hi" ? "bg-green-600 text-white" : "border"}`}
          >
            हिंदी
          </button>

          {/* DECADE FILTER */}
          <select
            value={decade}
            onChange={e => setDecade(e.target.value)}
            className="px-4 py-2 rounded-md border text-sm"
          >
            <option value="all">All Decades</option>
            <option value="1950s">1950s</option>
            <option value="1970s">1970s</option>
            <option value="1990s">1990s</option>
            <option value="Modern">Modern</option>
          </select>

          {/* COMPARISON */}
          <select
            value={comparison}
            onChange={e => setComparison(e.target.value)}
            className="px-4 py-2 rounded-md border text-sm"
          >
            <option value="all">All Phases</option>
            <option value="pre">Pre-1991</option>
            <option value="post">Post-1991</option>
          </select>

          {/* PDF */}
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-md bg-gray-900 text-white text-sm hover:bg-gray-800 transition"
          >
            Download / Print PDF
          </button>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-orange-500 via-gray-400 to-green-500 -translate-x-1/2" />

        {filteredData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`mb-28 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-full md:w-[46%] bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <span className="text-sm font-semibold text-orange-500">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-3">
                {language === "en" ? item.titleEn : item.titleHi}
              </h3>

              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                {language === "en" ? item.descEn : item.descHi}
              </p>

              {/* DATA */}
              <div className="mt-6 space-y-4">
                {item.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{stat.label}</span>
                      <span>{stat.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-orange-500 to-green-500 rounded"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* SOURCES */}
      <section className="max-w-5xl mx-auto mt-32 bg-white dark:bg-gray-800 p-10 rounded-2xl shadow">
        <h2 className="text-3xl font-bold mb-6">Sources & Methodology</h2>
        <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
          Data is derived from public, verified sources. Values represent
          historical ranges and adoption trends.
        </p>
        <ul className="list-disc list-inside text-sm space-y-2 text-gray-700 dark:text-gray-300">
          <li>Government of India – Economic Survey</li>
          <li>World Bank Open Data</li>
          <li>Reserve Bank of India (RBI)</li>
          <li>Census of India</li>
          <li>UNESCO & MeitY</li>
        </ul>
      </section>
    </section>
  );
}

export default Timeline;
