import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Project from './components/project/Project';
import ProjectList from './components/projectList/ProjectList';



function App() {
  return (
    <div>
      <Intro/>
      <About/>
      <ProjectList/>
    </div>
  );
}

export default App;
