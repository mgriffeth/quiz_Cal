(function(){
	App.Views.FormNumberEmployeesView = Parse.View.extend({
		events:{
			'click #nextToTrainingCost' : 'next'
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
				console.log(employees);
				console.log(edifyAnually);
				App.router.navigate('formPage02', { trigger : true });	
			}
		}
	});
}());