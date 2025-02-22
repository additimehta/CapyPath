function Home() {
    return (
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background.gif)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1 style={{ color: "white", fontSize: "2.5rem" }}>
          Welcome to the Home Page
        </h1>
      </div>
    );
  }
  
  export default Home;
  