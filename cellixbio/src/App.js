import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
