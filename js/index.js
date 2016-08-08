var Page = React.createClass({
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


var Video = React.createClass({
  render: function() {
    return (
      <video playsinline autoPlay muted loop poster="polina.jpg" id="bgvid">
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
          <a href="simulation.html">
            <button className="btn btn-primary">Get Started</button>
          </a>
        </div>
      </div>
    );
  }
});


ReactDOM.render(
  <Page />,
  document.getElementById('page')
);

$(document).ready(function(event) {
	var browserHeight = $(window).height();
	console.log(browserHeight);
	$('#main').height(browserHeight).css('padding-top', browserHeight/3 + 'px');
})