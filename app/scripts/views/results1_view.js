(function(){
	App.Views.ResultsOneView = Parse.View.extend({
		events:{
			'click #resultsToHome' : 'goHome',
			'click #detailedResults' : 'showForm'
		},
		
		template: $('#formResults1').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
			
			returnOnInvestment1 = 2 * trainingCost - (trainingCost + edifyAnually);
			returnOnInvestment2 = (((trainingCost/trainingHours)*10)*employees)-(((edifyAnually / trainingHours) * 10)*employees)
			console.log('savings from adding 10 hrs with edify = '  + returnOnInvestment2);
			var $modal = $('.js-loading-bar'),
		        $bar = $modal.find('.progress-bar');
		    
		    $modal.modal('show');

		    setTimeout(function() {
		      $modal.modal('hide'); 
		      $bar.removeClass('animate');
		      //$modal.modal('hide');   
			//   $('#total-cost').html('$' + accounting.formatNumber(edifyAnually,2,','));
			//   $('#cost-employee').html('$' + accounting.formatNumber(trainingCostPerEmployee,2,','));
			//   $('#savings').html('$' + accounting.formatNumber((trainingCost - edifyAnually),2,','));
			//   $('#edify-cost-hour').html('$' + accounting.formatNumber(edifyPerHour,2,','));
			//   $('#return').html(accounting.formatNumber(returnOnInvestment1 * 100,2,',') + '%');
			//   
			//   $('#add-hours-current').html('$' + accounting.formatNumber(trainingCostPerHour * 80,2,','));
  	// 		$('#add-hours-edify').html('$' + accounting.formatNumber(edifyPerHour * 80,2,','));
  			
  			$('#return').html('$' + accounting.formatNumber(returnOnInvestment1 ,2,','));
		}, 2000);
			
			
			
		},
		render: function(){
			this.$el.html(this.template);
		},
		goHome: function(){
			companyName = $('#companyName').val();
			name = $('#name').val();
			email = $('#email').val();
			
			
			if($('#email').val().length > 0){
				email = $('#email').val();
				//extension
				returnOnInvestment1 = (trainingCost - edifyAnually) /edifyAnually;
				//addition
				trainingCostPerHour = (trainingCost / trainingHours);
				edifyPerHour = (edifyAnually / trainingHours);
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
					companyObjective: companyObjective,
					companyName: companyName,
					name: name,
					email: email
				});
				
				calculationInformation.save(null,{
					success:function(){
						App.calculation_collection.add(calculationInformation);
						console.log(calculationInformation);
						
						employees = '';
						trainingCost = '';
						trainingCostPerEmployee = '';
						trainingCostPerHour = '';
						trainingHours ='';
						trainingHoursPerEmployee ='';
						edifyAnually ='';
						edifyPerHour ='';
						email ='';
						industry ='';
						returnType = '';
						companyObjective ='';
						companyName ='';
						name ='';
						returnOnInvestment1 ='';
						returnOnInvestment2 ='';
						anualSavings ='';
						
						App.router.navigate('', { trigger : true });
						
						// if(returnType == 'Extend Current Training' ){
						// 	App.router.navigate('formResultsExtension', { trigger : true });
						// } else if (returnType == 'Add to Current Training') {
						// 	App.router.navigate('formResultsAddition', { trigger : true });
						// } else {
						// 	App.router.navigate('formResultsBoth', { trigger : true });
						// };
					}
				})
			}
		},
		showForm: function(){
			$('#companyForm').removeClass('hidden')
		}
	});
}());