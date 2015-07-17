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
		},
		render: function(){
			this.$el.html(this.template);
		},
		next: function(){
			App.router.navigate('formPage03', { trigger : true });
		},
		back: function(){
			App.router.navigate('formPage01', { trigger : true });
		}
	});
}());