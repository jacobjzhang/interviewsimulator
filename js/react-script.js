var Home = React.createClass({
  componentDidMount: function() {
    var browserHeight = $(window).height();
    $('#main').height(browserHeight).css('padding-top', browserHeight/3 + 'px');
  },
  render: function() {
    return (
      <div>
        <Video />
        <Nav />
        <StartingBlock />
      </div>
    );
  }
});

var Simulation = React.createClass({
  getInitialState: function() {
    return {
      qDisplayed: parseInt(this.props.params.id)
    };
  },
  componentWillMount: function() {
    this.setState({qDisplayed: parseInt(this.props.params.id)});    
  },
  componentWillReceiveProps: function() {
    // added callback and it works, not sure why.
    this.setState({qDisplayed: parseInt(this.props.params.id)}, this._getThisQuestion);
  },
  render: function() {
    console.log('simulation, running props id ' + this.props.params.id + ' and current state is ' + this.state.qDisplayed);
    return (
      <div>
        <Nav />
        <QuestionsBlock id={this.state.qDisplayed} nextQuestion={this._nextQuestion} getThisQuestion={this._getThisQuestion} handleKeyPress={this._handleKeyPress} />
        <Answers id={this.state.qDisplayed} />
      </div>
    );
  },
  _nextQuestion: function() {
    this.setState({qDisplayed: (this.state.qDisplayed + 1)}, function() {
      window.location.replace('#/simulation/' + this.state.qDisplayed)
    });    
  },
  _getThisQuestion: function() {
    this.setState({qDisplayed: parseInt(this.props.params.id)});
  },
  _handleKeyPress: function(e) {
    if (e.charCode === 13) {
      return this._nextQuestion();  
    }
  }
});

var Video = React.createClass({
  render: function() {
    return (
      <video autoPlay muted loop poster="" id="bgvid">
        <source src="vid/WEBM/Aloha-Mundo.webm" type="video/webm" />
        <source src="vid/WEBM/Aloha-Mundo.mp4" type="video/mp4" />
        <source src="vid/WEBM/Aloha-Mundo.ogv" type="video/ogv" />
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

var StartingBlock = React.createClass({
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
              <li><a href="#/simulation/1">QA Engineer</a></li>
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
    var id = this.props.id;
    $('.pagination li').each(function(i, v) {
      if (i != id) {
        $(v).removeClass('active');        
      } else {
        $(v).addClass('active').removeAttr('href');
      }
    });  
    return (
      <ul className="pagination">
        <li className="disabled"><a href="#">«</a></li>
        {list}
      </ul>
    );
  }
});

// using this.props.id as a single source of truth
var QuestionsBlock = React.createClass({
  componentDidMount: function() {
    this.setState({questions: QUESTIONS});
    $('.container').focus();
  },
  // loads twice, first get a blank canvas, second get the state and props
  render: function() {
    if (!this.state) {console.log('no questions yet'); return (<div></div>)}
    return (
      <div>
        <div className="container" onKeyPress={this.props.handleKeyPress} tabIndex="1">
          <div className="pagination-container">
            <Pagination id={this.props.id} count={this.state.questions.length} onClick={this.props.getThisQuestion} />
          </div>
          <div className="progress progress-striped active">
            <div className="progress-bar progress-bar-info" />
          </div>
          <div className="question-block">
            <p className="question-count" />
            <h1 className="question">
              <Question id={this.props.id} data={this.state.questions[this.props.id]} />
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
              <button type="button" className="btn btn-primary btn-lg next-button" onClick={this.props.nextQuestion}>
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
  }
});

var Question = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    data: React.PropTypes.object
  },
  componentDidMount: function() {
    $('#count').timer();
  },
  render: function(){
    $('.progress-bar').width(((this.props.id/QUESTIONS.length)*100) + '%');
    $('#count').timer('remove').timer();
    return( 
      <div>{this.props.data.text}</div>
    );
  }
});


var Answers = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    this.setState({questions: QUESTIONS});
  },
  render: function() {
    if (!this.state.questions) {console.log('no questions yet'); return (<div></div>)}
    return (
      <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <h4 className="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div className="modal-body">
              {this.state.questions[this.props.id].hint}
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
    <ReactRouter.Route path="/" component={Home} />
    <ReactRouter.Route path="/simulation/:id" component={Simulation} />
  </ReactRouter.Router>
  ), document.getElementById('page')
);