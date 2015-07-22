(function(){
	App.Views.FormNumberEmployeesView = Parse.View.extend({
		events:{
			'click #nextToTrainingCost' : 'next',
			// 'change #numberEmployees' : 'checkInput'
		},
		
		template: $('#formNumberEmployees').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
			if (employees){
				$('#numberEmployees').val(employees);
			}
		},
		render: function(){
			this.$el.html(this.template);
		},
		next: function(){
			if($('#numberEmployees').val().length > 0){
				employees = Number($('#numberEmployees').val());
				edifyAnually = employees * edifyAnuallyPerPerson;
				trainingHoursPerEmployee = 28;
				trainingHours = trainingHoursPerEmployee * employees;
				console.log(employees);
				console.log(edifyAnually);
				App.router.navigate('formPage02', { trigger : true });	
			}
		},
		// checkInput: function(){
		// 	// setInterval(function() { ObserveInputValue($('#numberEmployees').val()); }, 100);
		// 	// setInterval();
		// 	if($('#numberEmployees').val().length > 0){
		// 		$('#nextToTrainingCost').removeClass('disabled');
		// 	} else {
		// 		$('#nextToTrainingCost').addClass('disabled');
		// 	}
		// 	
		// }
	});
}());