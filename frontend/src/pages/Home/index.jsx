const Home = () => {
  return (
    <div className="row text-center">
      <div className="col-12 mb-4">
        <h1>Welcome to Kings Hockey</h1>
      </div>
      <div className="col-12 mb-4">
        <img
          src="/kings_wallpaper.jpg"
          alt="Dom"
          className="img-fluid"
          style={{ maxHeight: 600 }}
        />
      </div>
      <div className="col-12 mb-4">
        <img src="/gav.jpg" alt="Gav" className="img-fluid" style={{ maxHeight: 600 }} />
      </div>
      <div className="col-12 mb-4">
        <img src="/dom.jpg" alt="Dom" className="img-fluid" style={{ maxHeight: 600 }} />
      </div>
      <div className="col-12 mb-4">
        <img src="/angus.jpg" alt="Dom" className="img-fluid" style={{ maxHeight: 600 }} />
      </div>
    </div>
  );
};

export default Home;
