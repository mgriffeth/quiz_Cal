(function(){
	App.Views.FormTrainingCostView = Parse.View.extend({
		events:{
			'click #nextToTrainingTime' : 'next',
			'click #backToNumberEmployees' : 'back'
		},
		
		template: $('#formTrainingCost').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
			if(trainingCost){
				$('#trainingCost').val(trainingCost);
			}
		},
		render: function(){
			this.$el.html(this.template);
		},
		next: function(){
			if($('#industryAvgCost').is(':checked')){
				trainingCostPerEmployee = 1011.33333;
				// accounting.formatNumber(1011.33333,2,',');
				trainingCost = trainingCostPerEmployee * employees;
				
				App.router.navigate('formPage03', { trigger : true });
			} else if($('#trainingCost').val().length > 0){
				if($('#radioTimeTotal').is(':checked')) {
					trainingCost = Number($('#trainingCost').val());
					trainingCostPerEmployee = trainingCost / employees;
					console.log(trainingCost);
					console.log(trainingCostPerEmployee);
				} else if ($('#radioTimePerEmployee').is(':checked')) {
					trainingCostPerEmployee = Number($('#trainingCost').val());
					trainingCost =  trainingCostPerEmployee * employees;
					console.log(trainingCost);
					console.log(trainingCostPerEmployee);
				}
				App.router.navigate('formPage03', { trigger : true });
			}
		},
		back: function(){
			App.router.navigate('formPage01', { trigger : true });
		}
	});
}());