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
});

app.controller('DisplayCreateController', function() {
	this.visibility = false;
	this.setVisible = function() {
		this.visibility = !this.visibility;
	}
});

app.controller('SubmitController', function(){
	this.event = {};
	this.addEvent = function() {
		console.log(this.event.endDate)
		events.push(this.event);
		localStorage.setItem('events', JSON.stringify(events));
		this.event = {};
	}
});


var events = [];

if( localStorage.getItem("events") != null ) {
events = JSON.parse(localStorage.getItem("events"));
}

})();