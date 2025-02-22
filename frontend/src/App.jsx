/*stuffs*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

/*components*/
import Navbar from "./components/navbar/NavBar";
import Chatbot from "./components/chatbot/chatBot";

/*pages*/
import Login from "./components/Login/Login";
import Home from "./pages/homepage/homepage";
import Account from "./pages/accountpage/accountpage";
import About from "./pages/aboutpage/aboutpage";
import Dashboard from "./pages/dashboard/dashboard";
import Form from "./components/form/form";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="content-container">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<Form />}/>
      </Routes>
      </div>
      <Chatbot/>
    </Router>
  );
}

export default App;