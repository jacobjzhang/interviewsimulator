var Page = React.createClass({
  componentDidMount: function() {
    homeAdjust();
  },
  render: function() {
    return (
      <div>
        <Video />
        <Nav />
        <Content />
      </div>
    );
  }
});

var Simulation = React.createClass({
  componentDidMount: function() {
    simulatorInit();
    var q1 = QUESTIONS;
    console.log(this.props.q1)
  },
  render: function() {
    return (
      <div>
        <Nav />
        <Questions data={QUESTIONS} />
        <Answers />
      </div>
    );
  }
});

var Video = React.createClass({
  render: function() {
    return (
      <video autoPlay muted loop poster="" id="bgvid">
        <source src="vid/WEBM/Aloha-Mundo.webm" type="video/webm" />
        <source src="vid/WEBM/Aloha-Mundo.mp4" type="video/mp4" />
      </video>
    );
  }
});

var Nav = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">shipOrDeliver</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>{/*/.nav-collapse */}
        </div>
      </nav>
    );
  }
});

var Content = React.createClass({
  render: function() {
    return (

      <div className="container">
        <div id="main">
          <h1 className="animated infinite pulse header">shipOrDeliver?</h1>
          <h2 className="animated fadeInRight subheader">Prep for interviews with real questions in a simulation.</h2>
          <div className="btn-group">
            <a href="#" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              Choose Your Role
              <span className="caret" />
            </a>
            <ul className="dropdown-menu">
              <li><a href="#/simulation">QA Engineer</a></li>
              <li><a href="#">Sales Engineer</a></li>
              <li><a href="#">Product Manage</a></li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
});

var Questions = React.createClass({
  componentDidMount: function() {
    qCount++;
  },
  render: function() {
    return (

      <div className="container">
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-info" />
        </div>
        <div className="question-block">
          <p className="question-count" />
          <h1 className="question" data={this.props.data}>
            {this.props.data[qCount].text}
          </h1>
        </div>
        <div className="col-md-4 col-md-offset-4">
          <div className="timer-block well">
            <div id="count" />
          </div>
          <div className="col-md-offset-3">
            {/* Button trigger modal */}
            <button type="button" className="btn btn-primary btn-lg answer-button" data-toggle="modal" data-target="#myModal">
              Need a hint?
            </button>
          </div>
          <span className="instructions">
            <p>Press 'Enter/Return' for the next question.</p>
            <p>Press 'Space' to go back to the last question.</p>
          </span>
        </div>
      </div>
    );
  }
});

var Answers = React.createClass({
  render: function() {
    return (

      <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <h4 className="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div className="modal-body">
              <div id="player" />
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


ReactDOM.render((
  <ReactRouter.Router>
    <ReactRouter.Route path="/" component={Page} />
    <ReactRouter.Route path="/simulation" component={Simulation} />
  </ReactRouter.Router>
  ), document.getElementById('page')
);