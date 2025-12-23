import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Courses from "./components/Courses";


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Courses />
      </main>
    </>
  );
};

export default App;
