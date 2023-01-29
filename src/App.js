import './App.css';
import Denied from './Modals/Denied';
import Recieved from './Modals/Recieved';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';


function App() {
  return (
    <div className="App text-slate-800 max-w-[85rem] mx-auto">
     <Recieved />
    </div>
  );
}

export default App;
