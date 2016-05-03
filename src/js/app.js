(function(){
var app = angular.module('eventPlanner', []);

app.controller('LoginController', function() {
	this.password = '';
	this.verifiedLen = false;
	this.verifiedChar = false;
	this.verifyLen = function() {
		if (this.password !== undefined && this.password.length >= 8) {
			this.verifiedLen = true;
		}
		else {
			this.verifiedLen = false;
		}
	};

	this.verifyChar = function() {
		if (this.password !== undefined && this.password.match(/[\!\@\#\$\%\^\&\*\?\;\:]/g)) {
			this.verifiedChar = true;
		}
		else {
			this.verifiedChar = false;
		}
	};
});


app.controller('DisplayEventsController', function() {
	this.events = events;
	this.h3Content = h3Content;
	this.btnVisibility = false;
	this.setBtnVisible = function() {
		this.btnVisibility = !this.btnVisibility;
		window.scrollTo(0, 0);
	};
});

app.controller('SubmitController', function(){
	this.event = {};
	this.addEvent = function() {
		events.push(this.event);
		localStorage.setItem('events', JSON.stringify(events));

		if (events.length > 0) {
		h3Content = "Your Events";
		}
		else {
		h3Content = "Sorry, there are no events."
		}
		console.log(h3Content);
		// empty event object so form will be emptied
		this.event = {};

	}
});

// initialize events
var events = [];

if( localStorage.getItem("events") != null ) {
events = JSON.parse(localStorage.getItem("events"));
}

var h3Content = "";
if (events.length > 0) {
		h3Content = "Your Events";
	}
	else {
		h3Content = "Sorry, there are no events."
	}

})();