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
});

app.controller('DisplayCreateController', function() {
	this.visibility = false;
	this.setVisible = function() {
		this.visibility = !this.visibility;
	};
});

app.controller('SubmitController', function(){
	this.event = {};
	this.addEvent = function() {
		// format Date
		var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dez"];
		var startDate = new Date(this.event.startDate);
		this.event.startDay = startDate.getDate();
		this.event.startMonth = month[startDate.getMonth()];
		this.event.startYear = startDate.getFullYear();
		this.event.startTime = startDate.getHours() + ':' + startDate.getMinutes();

		var endDate = new Date(this.event.endDate);
		this.event.endDay = endDate.getDate();
		this.event.endMonth = month[endDate.getMonth()];
		this.event.endYear = endDate.getFullYear();
		this.event.endTime = endDate.getHours() + ':' + endDate.getMinutes();

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