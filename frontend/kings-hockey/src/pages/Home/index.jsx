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
        <h2>Section 1</h2>
        <p>
          This is the first section of the page. It contains some introductory text about Kings
          Hockey.
        </p>
        <button className="btn btn-primary">Primary Button</button>
      </div>
      <div className="col-12 mb-4">
        <h2>Section 2</h2>
        <p>
          This is the second section. Here we could add more detailed information, images, or other
          content.
        </p>
      </div>
      <div className="col-12 mb-4">
        <h2>Section 3</h2>
        <p>
          This is the third section. This section might talk about upcoming events, games, or other
          relevant details.
        </p>
      </div>
      <div className="col-12 mb-4">
        <h2>Section 4</h2>
        <p>
          Finally, this section can include any closing remarks or additional links to social media,
          contacts, etc.
        </p>
      </div>
    </div>
  );
};

export default Home;
