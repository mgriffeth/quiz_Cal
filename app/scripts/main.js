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
	
	
	
(function(){	
	// App.user = Parse.User.current();
	App.calculation_collection = new App.Collections.CalculationCollection();
	App.router = new App.Routers.CalculatorRouter();
	Backbone.history.start();
	
}());