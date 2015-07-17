(function(){
	App.Models.CalculationModel = Parse.Object.extend({
		className:'Calculation',
		
		idAttribute:'objectId',
		
		defaults:{
			averageSalary:'',
			contacted:false,
			employeeCount:'',
			employeeTrainingHours:'',
			employeeTrainingCost:'',
			email:'',
			industry:'',
			returnOnInvestment:'',
			savingsAnually:'',
			savingsPerPerEmployee:'',
			valueEdify:''
		},
		
		initialize: function (){
			
		}
	});
}());