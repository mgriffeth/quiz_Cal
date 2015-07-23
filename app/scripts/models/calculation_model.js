(function(){
	App.Models.CalculationModel = Parse.Object.extend({
		className:'Calculation',
		
		idAttribute:'objectId',
		
		defaults:{
			contacted:false,
			employees:'',
			trainingCost:'',
			trainingCostPerEmployee:'',
			trainingCostPerHour:'',
			trainingHours:'',
			trainingHoursPerEmployee:'',
			edifyAnually:'',
			edifyPerHour:'',
			email:'',
			industry:'',
			returnType: '',
			companyObjective:[],
			companyName:'',
			name:'',
			returnOnInvestment1:'',
			returnOnInvestment2:'',
			anualSavings:''
		},
		
		initialize: function (){
			
		}
	});
}());