import './App.css';
import {Provider} from 'react-redux'
import {store} from './redux/store.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/home/Home.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import WeatherForecast from './routes/weatherForecast/WeatherForecast.jsx';
import Footer from './components/footer/Footer.jsx';
import NotFound from './routes/notFound/NotFound.jsx';

function App() {
  return (
    <Provider store={store}>
      <Router>        
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/weatherForecast' element={<WeatherForecast/>}/>
            <Route path='*'element={<NotFound/>}/>
          </Routes>
          <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
