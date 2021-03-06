(function(){
	App.Views.FormAvgSalaryView = Parse.View.extend({
		events:{
			'click #nextToIndustry' : 'next',
			'click #backToTrainingTime' : 'back'
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
			App.router.navigate('formPage05', { trigger : true });
		},
		back: function(){
			App.router.navigate('formPage03', { trigger : true });
		}
	});
}());