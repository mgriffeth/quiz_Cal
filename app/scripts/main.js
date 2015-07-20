Parse.initialize("gQF0YOO9uWOyhIU8AXzGJGWKbZp6GqvOiwnGMihi", "ypxqeWsmiBA7wujkKJzhi6YucXJs6jQS5sb3BqtG");
var employees,
	trainingCost,
	trainingCostPerEmployee,
	trainingCostPerHour,
	trainingHours,
	trainingHoursPerEmployee,
	edifyAnually,
	edifyAnuallyPerPerson = 60.00,
	edifyPerHour,
	returnType,
	returnOnInvestment1,
	returnOnInvestment2,
	industry,
	email;
	
	// Setup
	this.$('.js-loading-bar').modal({
	  backdrop: 'static',
	  show: false
	}).on('shown.bs.modal', function( event ) {

	   var $bar = $(event.target).find('.progress-bar'),
	       _wait = function() {       
	            setTimeout(function() {
	              if ( $bar.is(':visible')) { 
	                   $bar.addClass('animate');
	               } else {
	                  console.log('not ready'); 
	                  _wait();
	               }
	            }, 0);       
	       };
	   
	   _wait();
	   
	});

	$('#load').click(function() {
	  var $modal = $('.js-loading-bar'),
	      $bar = $modal.find('.progress-bar');
	  
	  $modal.modal('show');

	  setTimeout(function() {
	    $modal.modal('hide'); 
	    $bar.removeClass('animate');
	    //$modal.modal('hide');        
	  }, 1500);
	});
	
	
	
// 	var myApp;
// myApp = myApp || (function () {
//     var pleaseWaitDiv = $('<div class="modal hide" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false"><div class="modal-header"><h1>Processing...</h1></div><div class="modal-body"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>');
//     return {
//         showPleaseWait: function() {
//             pleaseWaitDiv.modal();
//         },
//         hidePleaseWait: function () {
//             pleaseWaitDiv.modal('hide');
//         },
// 
//     };
// })();
	
(function(){	
	// App.user = Parse.User.current();
	App.calculation_collection = new App.Collections.CalculationCollection();
	App.router = new App.Routers.CalculatorRouter();
	Backbone.history.start();
	
}());