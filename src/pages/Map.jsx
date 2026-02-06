import { useState } from "react";

const regionData = {
  North: {
    states: "Delhi, Punjab, Haryana, Uttar Pradesh",
    urban: "Political capital, manufacturing, transport & services",
    rural: "Wheat–rice belt, irrigation-based agriculture",
  },
  South: {
    states: "Tamil Nadu, Karnataka, Kerala, Telangana",
    urban: "IT services, education, healthcare, startups",
    rural: "Plantations, fisheries, tourism-led rural income",
  },
  East: {
    states: "West Bengal, Odisha, Bihar",
    urban: "Ports, trade, cultural and logistics centers",
    rural: "Mining, agriculture, river-based livelihoods",
  },
  West: {
    states: "Maharashtra, Gujarat, Rajasthan",
    urban: "Finance, manufacturing, exports, MSMEs",
    rural: "Dairy, minerals, arid-zone farming",
  },
  Northeast: {
    states: "Assam, Meghalaya, Manipur",
    urban: "Emerging cities, trade with Southeast Asia",
    rural: "Tea, handloom, biodiversity-based economy",
  },
};

function Map() {
  const [activeRegion, setActiveRegion] = useState("North");

  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 fade-page">

      {/* TITLE */}
      <h1 className="text-5xl font-bold text-center mb-16">
        India – Region-wise Development
      </h1>

      {/* MAP + INFO */}
      <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">

        {/* MAP */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
          <img
            src="/india-map.svg"
            alt="India Map"
            className="w-full h-auto drop-shadow-xl"
          />
          <p className="text-xs text-gray-500 mt-4 text-center">
            Select a region to explore development patterns
          </p>
        </div>

        {/* INFO PANEL */}
        <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6">
            {activeRegion} India
          </h2>

          <p className="text-sm mb-3">
            <strong>States:</strong> {regionData[activeRegion].states}
          </p>

          <p className="text-sm mb-3">
            <strong>Urban Economy:</strong> {regionData[activeRegion].urban}
          </p>

          <p className="text-sm">
            <strong>Rural Economy:</strong> {regionData[activeRegion].rural}
          </p>

          {/* REGION BUTTONS */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {Object.keys(regionData).map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`py-2 rounded-lg text-sm font-semibold transition
                  ${
                    activeRegion === region
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 dark:bg-gray-700 hover:bg-orange-200 dark:hover:bg-orange-400/40"
                  }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* LEARN MORE SECTION */}
      <div className="max-w-7xl mx-auto mt-28">
        <h2 className="text-4xl font-bold text-center mb-14">
          Learn More About India’s Development
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          
          {/* CARD 1 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-bold text-xl mb-4">
              Agriculture & Rural Economy
            </h3>
            <p className="text-sm mb-4">
              Agriculture supports more than half of India’s population and plays
              a crucial role in food security and employment.
            </p>
            <a
              href="https://www.google.com/search?q=India+agriculture+economic+contribution"
              target="_blank"
              rel="noreferrer"
              className="text-orange-500 text-sm font-semibold hover:underline"
            >
              Learn more →
            </a>
          </div>

          {/* CARD 2 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-bold text-xl mb-4">
              Urbanization & GDP
            </h3>
            <p className="text-sm mb-4">
              Indian cities generate the majority of GDP through services,
              manufacturing, innovation, and trade.
            </p>
            <a
              href="https://www.google.com/search?q=urbanization+and+GDP+in+India"
              target="_blank"
              rel="noreferrer"
              className="text-orange-500 text-sm font-semibold hover:underline"
            >
              Explore data →
            </a>
          </div>

          {/* CARD 3 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-bold text-xl mb-4">
              Regional Inequality & Policy
            </h3>
            <p className="text-sm mb-4">
              Government programs aim to balance growth across regions through
              infrastructure, education, and digital inclusion.
            </p>
            <a
              href="https://www.google.com/search?q=regional+development+policy+India"
              target="_blank"
              rel="noreferrer"
              className="text-orange-500 text-sm font-semibold hover:underline"
            >
              Read policy insights →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Map;
