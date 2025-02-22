import './homepage.css';
import AboutPage from '../aboutpage/aboutpage';

function Home() {
  return (
    <div className="bg-cover">
      {/* Homepage Content */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Welcome to the homepage</h1>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="about-us" style={{ height: '130vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <AboutPage />
      </section>
    </div>
  );
}

export default Home;