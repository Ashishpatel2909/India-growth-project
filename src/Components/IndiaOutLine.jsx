function IndiaOutline() {
  return (
    <div className="card text-center">
      <h3 className="text-lg font-semibold mb-4">
        India – Geographic Reference
      </h3>

      <svg
        viewBox="0 0 200 260"
        className="mx-auto w-[200px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {/* Simplified India outline (educational purpose) */}
        <path
          d="M60 10
             L120 20
             L150 60
             L140 110
             L160 170
             L120 240
             L90 220
             L70 180
             L50 150
             L40 100
             L50 50
             Z"
          className="fill-gray-300 dark:fill-gray-600 stroke-gray-700 dark:stroke-gray-300"
        />
      </svg>

      <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
        This outline provides geographic context for regional development
        analysis shown alongside.
      </p>
    </div>
  );
}

export default IndiaOutline;
