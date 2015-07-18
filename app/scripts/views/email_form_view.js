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
				
				var calculationInformation = new App.Models.CalculationModel({
					employees:employees,
					TrainingCost: trainingCost,
					TrainingHours: trainingHours,
					returnType: returnType,
					industry:industry,
					email:email
				});
				
				App.calculation_collection.add(calculationInformation).save();
				console.log(calculationInformation);
				App.router.navigate('formResults', { trigger : true });
			}
		},
		back: function(){
			App.router.navigate('formPage05', { trigger : true });
		}
	});
}());