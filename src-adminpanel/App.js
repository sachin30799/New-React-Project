import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Add_emp from './Pages/Add_emp';
import Manage_emp from './Pages/Manage_emp';
import Manage_user from './Pages/Manage_user';
import Manage_contact from './Pages/Manage_contact';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/add_emp' element={<Add_emp/>}></Route>
      <Route path='/manage_emp' element={<Manage_emp/>}></Route>
      <Route path='/manage_user' element={<Manage_user/>}></Route>
      <Route path='/manage_contact' element={<Manage_contact/>}></Route>
    </Routes>
    </>
  );
}

export default App;
