import { AboutMeSection } from "./components/AboutMeSection";
import { BannerSection } from "./components/BannerSection";
import { DefaultTemplate } from "./components/DefaultTemplate";
import { ProjectSection } from "./components/ProjectsSection";
import { TechSection } from "./components/TechSection";
import "./styles/index.css";

const App = () => {

  return (
    <>
      <DefaultTemplate>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectSection />
      </DefaultTemplate>
    </>
  )
}

export default App
