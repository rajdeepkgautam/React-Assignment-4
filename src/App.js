import logo from './logo.svg';
import './App.css';
import NavBar from './component/Nav';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './component/home';
import Student from './component/student';
import Contact from './component/contact';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/Student' element={<Student />}/>
      <Route path='/Contact' element={<Contact />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
