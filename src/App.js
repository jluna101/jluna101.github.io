import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Project from './components/project/Project';
import ProjectList from './components/projectList/ProjectList';
import Contacts from './components/contact/Contacts';
import Navbar from './components/navbar/Navbar';
import { useContext  } from 'react';
import { ThemeContext } from './context'; 



function App() {
  document.title = "Jesse's Portfolio"
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "white",
    color: darkMode && "white",}}>
      <Navbar/>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contacts/>
    </div>
  );
}

export default App;
