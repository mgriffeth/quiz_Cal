(function(){
	App.Views.FormIndustryView = Parse.View.extend({
		events:{
			'click #nextToEmail' : 'next',
			'click #backToRoiType' : 'back'
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
			App.router.navigate('formPage06', { trigger : true });
		},
		back: function(){
			App.router.navigate('formPage04', { trigger : true });
		}
	});
}());