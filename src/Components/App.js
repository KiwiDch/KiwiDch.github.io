import '../styles/App.css';
import Header from './Header';
import Profile from './Profile';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const header_name = [["About me", "#about-me"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]];
  return (
    <div className="App">
      <Header sections={header_name}/>
      <Profile/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
