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
import MaterialDetails from './components/MaterialManagement/MaterialDetails';
import AddMaterials from './components/MaterialManagement/AddMaterials';
import ViewSchedule from './components/TimeManagementAndScheduling/ViewSchedule';
import AddTimescheduling from './components/TimeManagementAndScheduling/AddTimescheduling';



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
          <Route exact path="/add-machinery" element={<AddMachinery/>} />
        </Routes>
        <Routes>
          <Route exact path="/edit-machinery/:id" element={<EditMachinery/>} />
        </Routes>
        <Routes>
          <Route exact path="/materials" element={<MaterialDetails/>} />
        </Routes>
        <Routes>
          <Route exact path="/add-material" element={<AddMaterials/>} />
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
          <Route path='/viewSchedule' element={<ViewSchedule/>}/>
        </Routes>
        <Routes>
          <Route path='/add-schedule' element={<AddTimescheduling/>}/>
        </Routes>

        <FooterBottom/>  
        
      </div>
    </BrowserRouter>
    
  )
}

export default App;
