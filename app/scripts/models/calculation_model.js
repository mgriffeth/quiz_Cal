(function(){
	App.Models.CalculationModel = Pase.Object.extend({
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