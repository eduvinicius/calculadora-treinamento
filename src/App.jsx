// Pages
import Home from '../src/pages/Home/Home';
import Vo2Max from '../src/pages/Vo2Max/Vo2Max';
import LoadCalculator from './pages/LoadCalculator/LoadCalculator';
import Anthropometric from './pages/AnthropometricMeasurements/Anthropometric';

// CSS
import './App.css';

// Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Vo2Max' element={<Vo2Max />} />
          <Route path='/loadCalculator' element={<LoadCalculator />} />
          <Route path='/anthropometric' element={<Anthropometric />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
