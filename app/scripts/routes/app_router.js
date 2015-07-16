(function(){
	App.Routers.Calculator = Parse.Router.extend({
		routes:{
			'' : 'home'
		},
		
		home: function (){
			new App.Views.HomeView();	
		}
	});
}());