
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
import Tata from './Pages/Home/PopulerCarStore/Tata'
import HondaMotos from './Pages/Home/PopulerCarStore/HondaMotos'
import Jac from './Pages/Home/PopulerCarStore/Jac'
import TOyota from './Pages/Home/PopulerCarStore/TOyota'
import Mazda from './Pages/Home/PopulerCarStore/Mazda'
import Volkswagen from './Pages/Home/PopulerCarStore/Volkswagen'
import CatHead from './Pages/Home/Categorious/CatHead';
import Lamborghini from './Pages/Home/Categorious/Lamborghini';
import Bmw from './Pages/Home/Categorious/Bmw';
import Bugati from './Pages/Home/Categorious/Bugati';
import Footer from './Pages/Footer/Footer';
import SignUp from './Pages/Login/SignUp';
import SpecialCarDetails from './Pages/Home/SpecialCar-details/SpecialCarDetails';
import NavbarHeader from './Pages/Navbar/NavbarHeader';
import ViewProfile from './Pages/Navbar/ViewProfileDetails/ViewProfile';
import OfferCarDetails from './Pages/Home/OfferCarDetails/OfferCarDetails';
import LamborghiniDetails from './Pages/Home/LamborghiniDetails/LamborghiniDetails';
import BmwCarDetails from './Pages/Home/BMWCarDetails/BmwCarDetails';
import BugattiCarDetails from './Pages/Home/BugattiCarDetails/BugattiCarDetails';
import RequireAuth from './Pages/Hooks/RequireAuth';
import ProfileDashboard from './Pages/Navbar/ViewProfileDetails/ProfileDashboard';
import Address from './Pages/Navbar/ViewProfileDetails/Address';
import UpdateProfile from './Pages/Navbar/ViewProfileDetails/UpdateProfile';
import OrderHistory from './Pages/Navbar/ViewProfileDetails/OrderHistory';
import UseCar from './Pages/UseCar/UseCar';
import Service from "./Pages/Service/Service";
import NotFound from './Pages/NotFound_page/NotFound';
import Dashboard from './Pages/DashBoard/Dashboard';
import PopularCarDetails from './Pages/Home/PopularCarDetails/PopularCarDetails';
import Admin from './Pages/DashBoard/Admin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PopulerDataAdd from './Pages/DashBoard/PopulerDataAdd';
import SpecialCarDataAdd from './Pages/DashBoard/SpecialCarDataAdd';
import AllOrders from './Pages/DashBoard/AllOrders';

function App() {
  return (
    
    <div className="App">
      <NavbarHeader></NavbarHeader>    
     <Navbara></Navbara>
    <Routes>
      <Route path='/' element={<Home></Home>}>
      <Route index element={<Lamborghini></Lamborghini>}></Route>
        <Route path='bmw' element={<Bmw></Bmw>}></Route>
        <Route path='bugatti' element={<Bugati></Bugati>}></Route>
      </Route>      
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/myOrder' element={
      <RequireAuth><MyOrder></MyOrder></RequireAuth>
      }></Route>
      <Route path='/love' element={<Love></Love>}></Route>
      <Route path='/tata' element={<Tata></Tata>}></Route>
      <Route path='/hondaMotos' element={<HondaMotos></HondaMotos>}></Route>
      <Route path='/toyota' element={<TOyota></TOyota>}></Route>
      <Route path='/mazda' element={<Mazda></Mazda>}></Route>
      <Route path='/jac' element={<Jac></Jac>}></Route>
      <Route path='/volkswagen' element={<Volkswagen></Volkswagen>}></Route>
      <Route path='catHead' element={<CatHead></CatHead>} > </Route>      
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/specialDetails/:id' element={<SpecialCarDetails></SpecialCarDetails>}></Route>
      <Route path='/offerCarDetails/:id' element={<OfferCarDetails></OfferCarDetails>}></Route>
      <Route path='/lamborghiniCarDetails/:id' element={<LamborghiniDetails></LamborghiniDetails>}></Route>
      <Route path='/bmwCarDetails/:id' element={<BmwCarDetails></BmwCarDetails>}></Route>
      <Route path='/bugattiCarDetails/:id' element={<BugattiCarDetails></BugattiCarDetails>}></Route>      
      <Route path='/popularCarDetails/:id' element={<PopularCarDetails></PopularCarDetails>}></Route>      
      <Route path='/profileDashboard' element={<RequireAuth><ProfileDashboard></ProfileDashboard></RequireAuth>}>
        <Route index element={<ViewProfile></ViewProfile>}></Route>
        <Route path='address' element={<Address></Address>}></Route>
        <Route path='updateProfile' element={<UpdateProfile></UpdateProfile>}></Route>
        <Route path='orderHistory' element={<OrderHistory></OrderHistory>}></Route>
      </Route>
      <Route path='/useCar' element={<UseCar></UseCar>}></Route>
      <Route path='/service' element={<Service></Service>}></Route>
      <Route path='/dashboard' element={ <RequireAuth>
        <Dashboard></Dashboard>
      </RequireAuth>
        
     }>
        <Route index element={<Admin></Admin>}></Route>
        <Route path='populer' element={<PopulerDataAdd></PopulerDataAdd>}></Route>
        <Route path='special' element={<SpecialCarDataAdd></SpecialCarDataAdd>}></Route>
        <Route path='special' element={<SpecialCarDataAdd></SpecialCarDataAdd>}></Route>
        <Route path='allOrders' element={<AllOrders></AllOrders>}></Route>
      </Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    
    <Footer></Footer>
    <ToastContainer />
    </div>
  );
}

export default App;
