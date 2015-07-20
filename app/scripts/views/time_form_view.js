(function(){
	App.Views.FormTrainingTimeView = Parse.View.extend({
		events:{
			'click #nextToAvgSalary' : 'next',
			'click #backToTrainingCost' : 'back'
		},
		
		template: $('#formTrainingTime').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
			if(trainingHoursPerEmployee){
				$('#trainingTime').val(trainingHoursPerEmployee);
			}
		},
		render: function(){
			this.$el.html(this.template);
		},
		next: function(){
			if($('#trainingTime').val().length > 0){
				trainingHoursPerEmployee = Number($('#trainingTime').val());
				trainingHours = trainingHoursPerEmployee * employees;
				App.router.navigate('formPage04', { trigger : true });
			}
			
		},
		back: function(){
			App.router.navigate('formPage02', { trigger : true });
		}
	});
}());