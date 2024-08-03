import { Outlet } from 'react-router';
import "react-toastify/dist/react-toastify.css"
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
