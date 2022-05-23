import './App.css';
import Header from './components/Header';
import TopNav from './components/TopNav';
import FooterBottom from './components/FooterBottom';
import AddMachinery from './components/MaterialManagement/AddMachinery';
import AdminHome from './components/AdminHome';
import Materialhome from './components/MaterialManagement/MaterialHome';
import Financehome from './components/FinanceManagement/FinanceHome';
import Contracthome from './components/ContractManagement/ContractHome';
import Machinerydetails from './components/MaterialManagement/MachineryDetails';
import EditMachinery from './components/MaterialManagement/EditMachinery';
import Crewandsalaryhome from './components/CrewAndSalaryManagement/CrewAndSalaryHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllFeedbacks from './components/CustomerManagement/AllFeedbacks';
import AddFeedback from './components/CustomerManagement/AddFeedback';
import AddCustomer from './components/CustomerManagement/AddCustomer';
import AllCustomers from './components/CustomerManagement/AllCustomers';
import CustomerDetails from './components/CustomerManagement/CustomerDetails';
import EditCustomer from './components/CustomerManagement/EditCustomer';
import Addcususer from './components/CustomerManagement/AddCususer';
import Customerprofile from './components/CustomerManagement/Customerprofile';


function App() {
  return (
    <BrowserRouter>
      <div className="max-w-screen-md mx-auto pt-20">
        
        <TopNav/>
        <Header/>

        <Routes>
          <Route path='/' element={<AdminHome/>} />
        </Routes>

        <Routes>
          <Route path='/material-home' element={<Materialhome/>} />
        </Routes>
        <Routes>
          <Route path="/machinery" element={<Machinerydetails/>} />
        </Routes>
        <Routes>
          <Route exact path="/add" element={<AddMachinery/>} />
        </Routes>
        <Routes>
          <Route exact path="/edit/:id" element={<EditMachinery/>} />
        </Routes>


        <Routes>
          <Route path='/finance-home' element={<Financehome/>} />
        </Routes>

        <Routes>
          <Route path='/contract-home' element={<Contracthome/>} />
        </Routes>

        <Routes>
          <Route path='/crew-and-salary-home' element={<Crewandsalaryhome/>} />
        </Routes>


        <Routes>
          <Route path='/customer/fb' element={<AllFeedbacks/>} />
        </Routes>

        <Routes>
          <Route path='/feedback/add' element={<AddFeedback/>} />
        </Routes>

        <Routes>
          <Route path='/customers/add' element={<AddCustomer/>} />
        </Routes>
        <Routes>
          <Route exact path='/customers/read' element = {<AllCustomers/>}  />
        </Routes>
        <Routes>
          <Route path='/customers/edit/:id' element = {<EditCustomer/>} />
        </Routes>
      
        <Routes>
          <Route path='/cususers/add' element = {<Addcususer/>} />
        </Routes>
        
        
        <Routes>
          <Route path='/cususer/read/:id' element = {<Customerprofile/>} />
        </Routes>
      
       
        <Routes>
          <Route path='/cutomer/read/:id' element = {<CustomerDetails/>} />
        </Routes>



        <FooterBottom/>  
        
      </div>
    </BrowserRouter>
    
  )
}

export default App;
