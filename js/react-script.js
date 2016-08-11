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
    console.log(this.props.params.id);
  },
  render: function() {
    return (
      <div>
        <Nav />
        <QuestionsBlock id={this.props.params.id} />
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

var Pagination = React.createClass({
  componentDidMount: function() {
    $('.pagination li').eq(this.props.id).addClass('active');
  },
  render: function() {
    var list = [];
    var pages = this.props.count;
    for (var i = 1; i <= pages; i++) {
      var link = "#/simulation/" + i;
      list.push(<li><a href={link}>{i}</a></li>);
    }
    $('.pagination li').eq(this.props.id).addClass('active');  
    return (
      <ul className="pagination">
        <li className="disabled"><a href="#">«</a></li>
        {list}
      </ul>
    );
  }
});


var QuestionsBlock = React.createClass({
  getInitialState: function() {
    return {
      qCount: 0
    };
  },
  componentDidMount: function() {
    this.setState({questions: QUESTIONS});
    $('.container').focus();
  },
  render: function() {
    if (!this.state.questions) {console.log('no questions yet'); return (<div></div>)}
    console.log('got the question ' + this.props.id);   
    return (
      <div>
        <Pagination id={this.props.id} count={this.state.questions.length} />
        <div className="container" onKeyPress={this._handleKeyPress} tabIndex="1">
          <div className="progress progress-striped active">
            <div className="progress-bar progress-bar-info" />
          </div>
          <div className="question-block">
            <p className="question-count" />
            <h1 className="question">
              <Question id={this.state.questions.id} count={this.state.qCount} data={this.state.questions[this.state.qCount]} />
            </h1>
          </div>
          <div className="col-md-4 col-md-offset-4">
            <div className="timer-block well">
              <div id="count" />
            </div>
            <div className="buttonContainer">
              {/* Button trigger modal */}
              <button type="button" className="btn btn-primary btn-lg answer-button" data-toggle="modal" data-target="#myModal">
                Need a hint?
              </button>
              <button type="button" className="btn btn-primary btn-lg next-button" onClick={this._nextQuestion}>
              Next Question
              </button>
            </div>
            <span className="instructions">
              <p>Press 'Enter/Return' for the next question.</p>
              <p>Press 'Space' to go back to the last question.</p>
            </span>
          </div>
        </div>
      </div>
    );
  },
  _nextQuestion: function() {
    this.setState({qCount: (this.state.qCount + 1)});    
  },
  _handleKeyPress: function(e) {
    if (e.charCode === 13) {
      return this._nextQuestion();  
    }
  }

});

var Question = React.createClass({
  propTypes: {
    id: React.PropTypes.number,
    count: React.PropTypes.number,
    data: React.PropTypes.object
  },
  componentDidMount: function() {
    $('#count').timer();
  },
  render: function(){
    $('.progress-bar').width(((this.props.count/QUESTIONS.length)*100) + '%');
    $('#count').timer('remove').timer();
    return( 
      <div>{this.props.data.text}</div>
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
    <ReactRouter.Route path="/simulation/:id" component={Simulation} />
  </ReactRouter.Router>
  ), document.getElementById('page')
);