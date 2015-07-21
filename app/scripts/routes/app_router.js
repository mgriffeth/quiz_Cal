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
			'formPage04' : 'formCompanyObjectives',
			'formPage05' : 'formIndustry',
			'formPage06' : 'formReturnType',
			'formResultsAddition' : 'formResultsAddition',
			'formResultsExtension' : 'formResultsExtension',
			'formResultsBoth' : 'formResultsBoth',
			'results1View' : 'results1View',
			'results2View' : 'results2View',
			'results3View' : 'results3View'
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
		},
		formCompanyObjectives: function(){
			new App.Views.FormCompanyObjectiveView();
		},
		results1View: function(){
			new App.Views.ResultsOneView();
		},
		results2View: function(){
			new App.Views.ResultsTwoView();
		},
		results3View: function(){
			new App.Views.ResultsThreeView();
		}
	});
}());