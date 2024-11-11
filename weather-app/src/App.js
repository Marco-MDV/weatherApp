import './App.css';
import {Provider} from 'react-redux'
import {store} from './redux/store.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home.jsx';
import Navbar from './components/navbar/Navbar.jsx';

function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <Router>        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*'/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
