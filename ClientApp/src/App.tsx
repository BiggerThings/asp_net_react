import './App.css'
import { Routes, Route } from 'react-router';
import MyCompo from './components/MyCompo';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Counter from './pages/Counter';
import Weather from './pages/Weather';


function App() {
  return (
    <div
      className='grid grid-rows-[auto_1fr_auto] min-h-screen'
    >
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/mycompo" element={<MyCompo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
