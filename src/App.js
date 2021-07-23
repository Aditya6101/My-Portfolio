import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App">
      <Header />
      <IntroSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
