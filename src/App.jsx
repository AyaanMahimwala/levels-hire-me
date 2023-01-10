import { IntroCard } from "./components/IntroCard";
import { WhyMe } from "./components/WhyMe";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="w-screen h-screen bg-white">
      <IntroCard />
      <WhyMe />
      <Projects />
    </div>
  );
}

export default App;
