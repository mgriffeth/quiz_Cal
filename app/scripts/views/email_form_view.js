(function(){
	App.Views.FormEmailView = Parse.View.extend({
		events:{
			'click #nextToResults' : 'next',
			'click #backToIndustry' : 'back'
		},
		
		template: $('#formEmail').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
		},
		render: function(){
			this.$el.html(this.template);
		},
		next: function(e){
			e.preventDefault();
			
			if($('#email').val().length > 0){
				email = $('#email').val();
				//extension
				returnOnInvestment1 = (trainingCost - edifyAnually) /edifyAnually;
				//addition
				trainingCostPerHour = (trainingCost / trainingHours) * 80
				edifyPerHour = (edifyAnually / trainingHours) * 80;
				returnOnInvestment2= (trainingCostPerHour - edifyPerHour) / edifyPerHour;
				
				var calculationInformation = new App.Models.CalculationModel({
					employees: employees,
					trainingCost: trainingCost,
					trainingCostPerEmployee: trainingCostPerEmployee,
					trainingCostPerHour: trainingCostPerHour,
					trainingHours: trainingHours,
					trainingHoursPerEmployee: trainingHoursPerEmployee,
					edifyAnually: edifyAnually,
					edifyPerHour: edifyPerHour,
					returnType: returnType,
					returnOnInvestment1: returnOnInvestment1,
					returnOnInvestment2: returnOnInvestment2,
					industry: industry,
					email: email
				});
				
				calculationInformation.save(null,{
					success:function(){
						App.calculation_collection.add(calculationInformation);
						console.log(calculationInformation);
						
						if(returnType == 'Extend Current Training' ){
							App.router.navigate('formResultsExtension', { trigger : true });
						} else if (returnType == 'Add to Current Training') {
							App.router.navigate('formResultsAddition', { trigger : true });
						} else {
							App.router.navigate('formResultsBoth', { trigger : true });
						};
					}
				})
			}
		},
		back: function(){
			App.router.navigate('formPage05', { trigger : true });
		}
	});
}());