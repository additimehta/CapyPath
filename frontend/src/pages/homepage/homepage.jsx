import './homepage.css';
import { Link } from 'react-router-dom';
import AboutPage from '../aboutpage/aboutpage';

function Home() {
  return (
    <div className="bg-cover">
      {/* Homepage Content */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Welcome to the CapyPath</h1>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="about-us" style={{ height: '130vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#240f3a', width: '100%', margin: 0, padding: 0 }}>
        <AboutPage />
      </section>
    </div>
  );
}

export default Home;