Parse.initialize("gQF0YOO9uWOyhIU8AXzGJGWKbZp6GqvOiwnGMihi", "ypxqeWsmiBA7wujkKJzhi6YucXJs6jQS5sb3BqtG");

(function(){
	console.log('hi');
	// App.user = Parse.User.current();
	App.calculation_collection = new App.Collections.CalculationCollection();
	App.router = new App.Routers.CalculatorRouter();
	Backbone.history.start();
	
}());