import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Project from './components/project/Project';
import ProjectList from './components/projectList/ProjectList';
import Contacts from './components/contact/Contacts';
import Navbar from './components/navbar/Navbar';
import { useContext  } from 'react';
import { ThemeContext } from './context'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ProjectListDetails from './components/projectListDetails/ProjectListDetails';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';



function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "white",
    color: darkMode && "white",}}>
      <Navbar/>
      <Routes>
        <Route path='/' element= { 
          <>
          <Intro/>
          <Skills/>
          <ProjectList/>
          </> } 
        />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/projects' element={<ProjectListDetails/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
