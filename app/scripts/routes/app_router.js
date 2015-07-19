(function(){
	App.Routers.CalculatorRouter = Parse.Router.extend({
		initialize: function(){
			Parse.history.start();
		},
		routes:{
			'' : 'home',
			'formPage01' : 'formNumberEmployees',
			'formPage02' : 'formTrainingCost',
			'formPage03' : 'formTrainingTime',
			'formPage04' : 'formReturnType',
			'formPage05' : 'formIndustry',
			'formPage06' : 'formEmail',
			'formResultsAddition' : 'formResultsAddition',
			'formResultsExtension' : 'formResultsExtension',
			'formResultsBoth' : 'formResultsBoth'
		},
		
		home: function (){
			new App.Views.HomeView();	
		},
		formNumberEmployees: function(){
			new App.Views.FormNumberEmployeesView();
		},
		formTrainingCost: function(){
			new App.Views.FormTrainingCostView();
		},
		formTrainingTime: function(){
			new App.Views.FormTrainingTimeView();
		},
		formAvgSalary: function(){
			new App.Views.FormAvgSalaryView();
		},
		formReturnType: function(){
		 new App.Views.FormReturnTypeView();	
		},
		formIndustry: function(){
			new App.Views.FormIndustryView();
		},
		formEmail: function(){
			new App.Views.FormEmailView();
		},
		formResultsAddition: function(){
			new App.Views.FormResultsAdditionView();
		},
		formResultsExtension: function(){
			new App.Views.FormResultsExtensionView();
		},
		formResultsBoth: function(){
			new App.Views.FormResultsBothView();
		}
	});
}());