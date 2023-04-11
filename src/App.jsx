import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer/>
    </div>
  );
}

export default App;
