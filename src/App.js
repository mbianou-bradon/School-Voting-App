import './App.css';

import { Outlet, createBrowserRouter, RouterProvider} from "react-router-dom"

import Login from './pages/Login';
import Contact from './pages/Contact';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import VotingPage from './pages/VotingPage';
import AboutUs from './pages/AboutUs';
import AdminLogin from "./pages/AdminLogin"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './pages/Error';


const MyApp = () => {

  return (
    <div>
        <Navbar/>
          <div>
             <Outlet />
          </div>
        <Footer/>
    </div>
  )
}

const router = createBrowserRouter (
  [
    {
      element: <MyApp />,
      errorElement: <Error />,
      children: [
        { path: '/', element: <Home />},
        { path: '/votingpage', element: <VotingPage />},
        { path: '/about', element: <AboutUs />},
        { path: '/contact', element: <Contact />},
        { path: '/login', element: <Login />,},
        { path: '/login/admin', element: <AdminLogin />},
        { path: '/login/forgot_password', element: <ForgotPassword />},
        { path: '/signup', element: <SignUp />}
      ]
    }
  ]
)

function App() {
  return (
    <div className="App text-slate-800 max-w-[85rem] mx-auto [&_*]:transition-all [&_*]:ease-linear [&_*]:duration-200">
     <RouterProvider router = {router} />
    </div>
  );
}

export default App;
