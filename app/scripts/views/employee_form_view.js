(function(){
	App.Views.FormNumberEmployeesView = Parse.View.extend({
		events:{
			'click #nextToTrainingCost' : 'next'
		},
		
		template: $('#formNumberEmployees').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
		},
		render: function(){
			this.$el.html(this.template);
		},
		next: function(){
			if($('#numberEmployees').val().length > 0){
				employees = Number($('#numberEmployees').val());
				console.log(employees);
				App.router.navigate('formPage02', { trigger : true });	
			}
		}
	});
}());