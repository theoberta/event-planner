(function(){
var app = angular.module('eventPlanner', []);

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