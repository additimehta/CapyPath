import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Chatbot from "./components/chatbot/chatBot";
import './App.css';
import Login from "./components/Login/Login";
import Home from "./components/homepage/homepage"

const About = () => <h2 className="text-center mt-10">About Page</h2>;
const Account = () => <h2 className="text-center mt-10">Account Page</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Chatbot/>
    </Router>
  );
}

export default App;