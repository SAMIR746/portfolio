// App component
import { useEffect, useState } from "react";
import { fetchData } from "./api";

import SocialBar from "./components/SocialBar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Projects from "./components/Projects";
import About from "./components/About";

import ThemeProvider from "./context/ThemeContext";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  if (!data) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <ThemeProvider>
      <SocialBar />
      <Hero profile={data} />
      <Education education={data.education} />
      <Projects projects={data.projects.slice(0, 5)} />
      <About about={data.about} />
    </ThemeProvider>
  );
}
