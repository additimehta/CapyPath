import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Chatbot from "./components/chatbot/chatBot";
import './App.css'
import Login from "./components/Login/Login";

const Home = () => <h2 className="text-center mt-10">Home Page</h2>;
const About = () => <h2 className="text-center mt-10">About Page</h2>;
const Account = () => <h2 className="text-center mt-10">Account Page</h2>;

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Chatbot/>
    </Router>
  );
}

export default App