
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbara from './Pages/Navbar/Navbara';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import MyOrder from './Pages/MyOrder/MyOrder';
import Contact from './Pages/Contact/Contact';
import Love from './Pages/Love/Love';
function App() {
  return (
    
    <div className="App">
    
     <Navbara></Navbara>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/myOrder' element={<MyOrder></MyOrder>}></Route>
      <Route path='/love' element={<Love></Love>}></Route>
    </Routes>
    </div>
  );
}

export default App;
