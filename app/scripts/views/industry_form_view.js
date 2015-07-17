(function(){
	App.Views.FormIndustryView = Parse.View.extend({
		events:{
			'click #nextToEmail' : 'next'
		},
		
		template: $('#formIndustry').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
		},
		render: function(){
			this.$el.html(this.template);
		},
		next: function(){
			App.router.navigate('formEmail', { trigger : true });
		}
	});
}());