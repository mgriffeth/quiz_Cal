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
			if($('#industryAvgHours').is(':checked')){
				trainingHoursPerEmployee = 28;
				trainingHours = trainingHoursPerEmployee * employees;
				App.router.navigate('formPage04', { trigger : true });
			} else if ($('#trainingTime').val().length > 0){
				trainingHoursPerEmployee = Number($('#trainingTime').val());
				trainingHours = trainingHoursPerEmployee * employees;
				App.router.navigate('formPage04', { trigger : true });
			}
			console.log(trainingHoursPerEmployee);
		},
		back: function(){
			App.router.navigate('formPage02', { trigger : true });
		}
	});
}());