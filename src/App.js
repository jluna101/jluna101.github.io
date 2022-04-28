import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Project from './components/project/Project';
import ProjectList from './components/projectList/ProjectList';
import Contacts from './components/contact/Contacts';



function App() {
  document.title = "Jesse's Portfolio"
  return (
    <div>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contacts/>
    </div>
  );
}

export default App;
