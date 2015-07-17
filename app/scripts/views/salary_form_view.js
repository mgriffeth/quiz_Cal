(function(){
	App.Views.FormAvgSalaryView = Parse.View.extend({
		events:{
			'click #nextToIdustry' : 'next'
		},
		
		template: $('#formAverageSalary').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
		},
		render: function(){
			this.$el.html(this.template);
		},
		next: function(){
			App.router.navigate('formIndustry', { trigger : true });
		}
	});
}());