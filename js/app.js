var guessCount = 0;
var str = "";
var qChoice = Math.floor(Math.random()*questions.length);

$(document).ready(function() {
	$("#question").text(questions[qChoice].prob);
	//click answer button
	$("#answer").click(function() {
		var userTry = $("#userTry").val().toLowerCase();
		eval(userTry);
	});
	//answer with enter
	$("#userTry").keydown(function(e) {
		if (e.keyCode === 13) {
			var userTry = $("#userTry").val().toLowerCase();
			eval(userTry);
		}
	});
	//give up
	$("#surrender").click(function() {
		$("#explanation").text(questions[qChoice].exp);
		$("#explanation").show();
		$("#next").show();
	});
	//next question
	$("#next").click(function() {
		questions.splice(qChoice,1);
		//if questions empty, then display message

		//else display new question
		reset(qChoice, questions.length);
		$("#explanation").hide();
		$("#next").hide();
		guessCount = 0;
		$("#images").find("img").attr("src", "media/img/gb.png");
		$("#question").text(questions[qChoice].prob);
	})
});

function reset(n, i) {
	n = Math.floor(Math.random()*i);
}

function eval(guess) {
	//count up guesses
	guessCount++;
	//if right, then display message
	if(guess === questions[qChoice].sol) {
		//display message and next button
		$("#explanation").text("That's right! " + questions[qChoice].exp);
		$("#explanation").show();
		$("#next").show();
	}
	//if number of guesses hits limit
	else if (guessCount === 3) {
		//display message and next button
		str = "li" + ":nth-child(" + guessCount.toString() + ")";
		$(str).children("img").attr("src", "media/img/slimer.png");
		$("#explanation").text("Sorry, no luck! " + questions[qChoice].exp);
		$("#explanation").show();
		$("#next").show();
	}
	else {
		//display message
		$("#explanation").text("Wrong! Try again!");
		$("#explanation").show();
		//change images
		str = "li" + ":nth-child(" + guessCount.toString() + ")";
		$(str).children("img").attr("src", "media/img/slimer.png");
	}
	$("#userTry").val("");
}