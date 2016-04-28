(function(){
var app = angular.module('eventPlanner', []);

app.controller('DisplayController', function() {
	this.events = events;
});

app.controller('CreateController', function() {
	this.visibility = false;
	this.setVisible = function() {
		this.visibility = true;
	}
})

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