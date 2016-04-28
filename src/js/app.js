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
		this.visibility = true;
	}
});

app.controller('SubmitController', function(){
	this.event = {};
	this.addEvent = function() {
		console.log(this.event.endDate)
		events.push(this.event);
		this.event = {};
	}
});

var events = [
	{
		name: 'Jane\'s Birthday',
		type: 'Party',
		host: 'Jim',
		startDate: '07 June, 10:00 PM',
		endDate: '08 June, 4:00 AM',
		guests: 'Irene, Susan, Peter, John, Bob, Benny, Veronica',
		location: 'Jim\'s house',
		message: 'Bring something.'
	},
	{
		name: 'Jane\'s Birthday',
		type: 'Party',
		host: 'Jim',
		startDate: '07 June, 10:00 PM',
		endDate: '08 June, 4:00 AM',
		guests: 'Irene, Susan, Peter, John, Bob, Benny, Veronica',
		location: 'Jim\'s house',
		message: 'Bring something.'
	},
	{
		name: 'Jane\'s Birthday',
		type: 'Party',
		host: 'Jim',
		startDate: '07 June, 10:00 PM',
		endDate: '08 June, 4:00 AM',
		guests: 'Irene, Susan, Peter, John, Bob, Benny, Veronica',
		location: 'Jim\'s house',
		message: 'Bring something.'
	}
];

})();