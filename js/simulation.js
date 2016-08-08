var qCount = 1;
var totalTime = [];

// function youtube() {
// 2. This code loads the IFrame Player API code asynchronously.
      // var tag = document.createElement('script');

      // tag.src = "https://www.youtube.com/iframe_api";
      // var firstScriptTag = document.getElementsByTagName('script')[0];
      // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
      	console.log('loading');
        player = new YT.Player('player', {
          height: '290',
          width: '400',
          videoId: 'xcvNl1HHY9o',
          events: {
            'onReady': stopVideo,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function startVideo(event) {
        event.target.playVideo();
      	// player.playVideo();
      	while (player.getPlayerState() === 1) {
      		if (player.getCurrentTime() === 47) {
      			console.log('got here');
      		}
      	}
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
      	console.log(player.getCurrentTime());
        player.stopVideo();
      }
// }

function setTimer() {
	$('#count').timer();
}

function resetTimer() {
	totalTime.push({
		'id' : qCount,
		'time': $('#count').html()
	});
	$('#count').timer('remove');
	$('#count').timer();
}

function clickThroughs() {
	$(window).on('keypress', function (event) {
		if(event.which === 13){
	 		qCount++;
	  	changeDisplay(qCount);
	  	resetTimer();
	 	}	

	 	if(event.which === 32){
			console.log('space button');
	 		qCount--;
	  	changeDisplay(qCount);
	  	resetTimer();
	 	}	
	});

	$('.answer-button').on('click', function(event) {
		startVideo();
		totalTime.forEach(function(v, i) {
			if (v.id === qCount) {
				v['help'] = true;
			}
		})
	})

}

function showResults(totalTime) {
	var results = "";
	totalTime.forEach(function(v, i) {
		results += '<strong>Question ' + v.id + ' </strong>took ' + v.time + '<br/>';
	})
	return results;
}

function getNextQuestion(count) {
	if (count < QUESTIONS.length) {
		$('.question-count').html("Question " + count);
  	$('.question').html(QUESTIONS[count - 1].text);
    $('.question-block').addClass('animated headShake');
	} else {
		console.log(totalTime);
		var alert = '<div class="alert alert-dismissible alert-warning">'
	  + '<button type="button" class="close" data-dismiss="alert">&times;</button>'
	  + '<h4>You\'ve Finished!</h4><p>'
	  + 'Results: </br>'
	  + showResults(totalTime);
	  + '</p>'
	  + '</div>';
		$('.timer-block').after(alert);
	}
  $('.question-block').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated headShake');
  });
}

function incrementBar(count) {
  $('.progress-bar').width(((count/QUESTIONS.length)*100) + '%');
}

function changeDisplay(count) {
	getNextQuestion(count);
  incrementBar(count);
  $('#myModal .modal-title').html("Question #" + QUESTIONS[count - 1].id + " Hint");
  $('#myModal .modal-body').append(QUESTIONS[count - 1].hint);
}

function init() {
  changeDisplay(qCount);
  setTimer();
  clickThroughs();
}

init();