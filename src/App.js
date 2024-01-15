import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Menu from "./components/Menu";
import About from './pages/About';
import Projects from './pages/Projects';
import Extracurricular from './pages/Extracurricular';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/projects" element={ <Projects /> }/>
        <Route path="/extracurricular" element={ <Extracurricular /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
