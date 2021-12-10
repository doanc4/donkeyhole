export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Dumb Ape Shark Tank</h2>
              {props.data ? props.data.paragraphs.map((data) => (
                <div>
                <div className="h4"> {data.header ? data.header : null} </div>
                <p> {data.text ? data.text : data} </p>
                </div>

              )) : "loading"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
