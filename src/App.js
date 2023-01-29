import './App.css';
import Denied from './Modals/Denied';
import Recieved from './Modals/Recieved';
import Login from './pages/Login';
import Contact from './pages/Contact';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import AdminLogin from "./pages/AdminLogin"
import VoterCard from './components/VoterCard';


function App() {
  return (
    <div className="App text-slate-800 max-w-[85rem] mx-auto">
     <VoterCard />
    </div>
  );
}

export default App;
