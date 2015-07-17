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
		next: function(){
			App.router.navigate('formResults', { trigger : true });
		},
		back: function(){
			App.router.navigate('formPage05', { trigger : true });
		}
	});
}());