
import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import HomePage from './components/HomePage';
import Panel from './components/NavigationPanel';
import Projects from './components/Projects';
import WorkExp from './components/WorkExp';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hey! Have you met Harsh Verma?</h1>
      </header>
      
      <HomePage/>
      <Panel />
      <Education/>
      <WorkExp/>
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;
