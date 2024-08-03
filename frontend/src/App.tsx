import { Outlet } from 'react-router';
import "react-toastify/dist/react-toastify.css"
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './Context/useAuth';


function App() {

  return (
    <>
      <UserProvider>
      <Navbar />
      <Outlet />
      <ToastContainer />
      </UserProvider>
    </>
  );
}

export default App;
