import { useEffect, useState } from "react";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollUp}
      className="fixed bottom-6 right-6
        p-4 rounded-full shadow-xl
        bg-black text-white dark:bg-white dark:text-black
        hover:scale-110 transition"
    >
      ↑
    </button>
  );
}

export default ScrollTop;
