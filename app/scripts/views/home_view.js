(function(){
	App.Views.HomeView = Parse.View.extend({
		events:{
			'click #startButton' : 'startForm'
		},
		
		template: $('#homeView').html(),
		
		initialize: function () {
	    //   this.options = options;
	      this.render();
	      $('#viewContainer').html(this.$el);
		},
		render: function(){
			this.$el.html(this.template);
		},
		startForm: function(){
			App.router.navigate('formPage01', { trigger : true });
		}
	});
}());