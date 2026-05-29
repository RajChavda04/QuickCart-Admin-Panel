import './App.css';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
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
import {ProtectedRoute,PublicRoute} from "./utils/ProtectedRoutes"



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
   <Route path="/" element={<PublicRoute><Login/></PublicRoute>}/>
  <Route path="/Home" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
   <Route path="/Passwordchange" element={<ProtectedRoute><Passwordchange/></ProtectedRoute>}></Route>
   <Route path="/Productlist" element={<ProtectedRoute><Productlist/></ProtectedRoute>}></Route>
   <Route path="/Addproduct" element={<ProtectedRoute><Addproduct/></ProtectedRoute>}></Route>
   <Route path="/Catagorylist" element={<ProtectedRoute><Catagorylist/></ProtectedRoute>}></Route>
   <Route path="/Catagoryadd" element={<ProtectedRoute><Catagoryadd/></ProtectedRoute>}></Route>
   <Route path="/Customerlist" element={<ProtectedRoute><Customerlist/></ProtectedRoute>}></Route>
   <Route path="/Customeradd" element={<ProtectedRoute><Customeradd/></ProtectedRoute>}></Route>
   <Route path="/Admindetails" element={<ProtectedRoute><Admindetails/></ProtectedRoute>}></Route>
   <Route path="/Categoryedit" element={<ProtectedRoute><Categoryedit/></ProtectedRoute>}></Route>
   <Route path="/Productedit" element={<ProtectedRoute><Productedit/></ProtectedRoute>}></Route>
   <Route path="/Order" element={<ProtectedRoute><Order/></ProtectedRoute>}></Route>
   <Route path="/Forgot" element={<PublicRoute><Forgot/></PublicRoute>}></Route>
   <Route path="/Feedback" element={<ProtectedRoute><Feedback/></ProtectedRoute>}></Route>
   <Route path="/Order2" element={<ProtectedRoute><Order2/></ProtectedRoute>}></Route>
   <Route path="*" element={  sessionStorage.getItem("mydata") ? <Navigate to="/Home" replace /> : <Navigate to="/" replace /> } />
   </Routes>
  {!isCompanyReg && ! isCompanyReg1 && ! isCompanyReg2 &&<Footer/>}
   </>
  );
}

export default App;
