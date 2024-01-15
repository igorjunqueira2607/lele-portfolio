import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/projects" element={ <Projects /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
