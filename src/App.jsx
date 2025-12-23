import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";



const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Courses />
        <Testimonials />
      </main>
    </>
  );
};

export default App;
