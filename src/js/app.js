(function(){
var app = angular.module('eventPlanner', ['ngMessages']);

app.controller('LoginController', function() {
	this.user = {};
	this.user.password = '';
	this.verifiedLen = false;
	this.verifiedChar = false;
});


var INTEGER_REGEXP = /[\!\@\#\$\%\^\&\*\?\;\:]/;
app.directive('char', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.char = function(modelValue, viewValue) {
        if (INTEGER_REGEXP.test(viewValue)) {
            return true;
        }
        else {
            return false;
    	}
      };
    }
  };
});

app.directive('len', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.len = function(modelValue, viewValue) {
        if (viewValue.length > 7) {
            return true;
        }
        else {
            return false;
    	}
      };
    }
  };
});


app.controller('DisplayEventsController', function($scope) {
	$scope.events = events;
	$scope.h3Content = h3Content;
	this.btnVisibility = false;
	this.setBtnVisible = function() {
		this.btnVisibility = !this.btnVisibility;
		window.scrollTo(0, 0);
	};
});

app.controller('SubmitController', function($scope){
	this.event = {};
	this.addEvent = function() {
		$scope.$parent.events.push(this.event);
		localStorage.setItem('events', JSON.stringify(events));
		// update h3Content
		$scope.$parent.h3Content = "Your Events";
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