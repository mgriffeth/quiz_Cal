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
			App.router.navigate('formPage02', { trigger : true });
		}
		// back: function(){
		// 	App.router.navigate('formPage01', { trigger : true });
		// }
	});
}());