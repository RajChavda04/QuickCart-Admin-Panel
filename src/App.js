import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Productlist from './Pages/Productlist'
import Addproduct from './Pages/Addproduct.';
import Catagorylist from './Pages/Catagorylist';
import Catagoryadd from './Pages/Catagoryadd';
import Customerlist from './Pages/Customerlist';
import Customeradd from './Pages/Customeradd';

import Admindetails from './Pages/Admindetails';
import Categoryedit from './Pages/Categoryedit';
import Productedit from './Pages/Productedit';
import Passwordchange from './Pages/Passwordchange';
import { useLocation } from 'react-router-dom';
import Order from './Pages/Order';
import Forgot from './Pages/Forgot';
import Feedback from './Pages/Feedback';
import Order2 from './Pages/Order2';





function App() {
  return (

    <BrowserRouter>
    <MainContent/>
    </BrowserRouter>
  );
}
function MainContent(){
  const location = useLocation();
  const isCompanyReg = location.pathname === "/" ;
  const isCompanyReg1 = location.pathname === "/Passwordchange" ;
  const isCompanyReg2 = location.pathname === "/Forgot" ;
 

  return(
     <>
     {!isCompanyReg && !isCompanyReg1 && ! isCompanyReg2 && (
      <Header/>
     )}
     {!isCompanyReg && !isCompanyReg1 && ! isCompanyReg2 && <Sidebar/>}
 

  
   
   <Routes>
   <Route path="/" element={<Login></Login>}></Route>
   <Route path="/Passwordchange" element={<Passwordchange></Passwordchange>}></Route>
   <Route path="/Productlist" element={<Productlist></Productlist>}></Route>
   <Route path="/Addproduct" element={<Addproduct></Addproduct>}></Route>
   <Route path="/Catagorylist" element={<Catagorylist></Catagorylist>}></Route>
   <Route path="/Catagoryadd" element={<Catagoryadd></Catagoryadd>}></Route>
   <Route path="/Customerlist" element={<Customerlist></Customerlist>}></Route>
   <Route path="/Customeradd" element={<Customeradd></Customeradd>}></Route>
   <Route path="/Admindetails" element={<Admindetails></Admindetails>}></Route>
   <Route path="/Categoryedit" element={<Categoryedit></Categoryedit>}></Route>
   <Route path="/Productedit" element={<Productedit></Productedit>}></Route>
   <Route path="/Order" element={<Order></Order>}></Route>
   <Route path="/Forgot" element={<Forgot></Forgot>}></Route>
   <Route path="/Feedback" element={<Feedback></Feedback>}></Route>
   <Route path="/Order2" element={<Order2></Order2>}></Route>
   
   
    <Route path="/Home" element={<Home></Home>}></Route>
    
   </Routes>
  {!isCompanyReg && ! isCompanyReg1 && ! isCompanyReg2 &&<Footer/>}
   </>
  );
}

export default App;
