Parse.initialize("gQF0YOO9uWOyhIU8AXzGJGWKbZp6GqvOiwnGMihi", "ypxqeWsmiBA7wujkKJzhi6YucXJs6jQS5sb3BqtG");
var employees,
	trainingCost,
	trainingCostPerEmployee,
	trainingHours,
	trainingHoursPerEmployee,
	returnType,
	industry,
	email;
	
	
	
(function(){	
	// App.user = Parse.User.current();
	App.calculation_collection = new App.Collections.CalculationCollection();
	App.router = new App.Routers.CalculatorRouter();
	Backbone.history.start();
	
}());