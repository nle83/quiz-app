//constructor method for question object
function Question(q, a, e) {
	this.prob = q;
	this.sol = a;
	this.exp = e;
}

var q1 = new Question("Who was considered the \"heart\" of the Ghostbusters?",
		"ray stantz",
		"When Peter gives his rousing speech as the busters prepare for their showdown with Zuul, he refers to Ray Stantz (Dan Aykroyd) as the \"heart\" of the Ghostbusters. Aykroyd, a firm believer of supernatural phenomenon, brought a great deal of passion and realism to his character.");

var q2 = new Question("Complete this quote from Vigo the Carpathian: 'Death is but a door, time is but a _____________, I'll be back.'",
		"window",
		"This was from Leon Zundinger's 'Magician's, Martyrs, and Madmen'.");

var q3 = new Question("Who instructs Ray: 'If somebody asks you if you're a god, you say yes!'?",
	"winston zeddemore",
	"As they are hanging off the edge of a building following an attack from Zuul, Winston offers this piece of advice.");

var questions = [q1,q2,q3];

