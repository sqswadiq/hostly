import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  // Preload all images before rendering app
  useEffect(() => {
    const images = Array.from(document.images);
    const imagePromises = images.map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise((resolve) => {
            img.onload = img.onerror = resolve;
          })
    );

    Promise.all(imagePromises).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500); // smooth delay
    });
  }, []);

  // Disable scroll while loading
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500">
          <Loader />
        </div>
      )}
      {!loading && (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as needed */}
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
