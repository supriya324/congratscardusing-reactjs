const element = (
  // Write your code here.
  <div className="congrats-card">
    <h1 className="heading"> Congratulations</h1>
    <div className="bottom-card">
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="card-image1"
        />
        <hl className="image-heading"> Kiran V</hl>
        <p className="paragraph">
          Vishnu Institute of Computer Education and Technology,Bhimavaram
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="card-image1"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
