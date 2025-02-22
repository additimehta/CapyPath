import './homepage.css';

function Home() {
  return (
    <div className="bg-cover">
      {/* Homepage Content */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Welcome to the CapyPath</h1>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="about-us" style={{ height: '130vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>About Us</h2>
      </section>
    </div>
  );
}

export default Home;