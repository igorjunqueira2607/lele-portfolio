import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
