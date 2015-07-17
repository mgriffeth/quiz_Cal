(function(){
	App.Views.FormResultsView = Parse.View.extend({
		events:{
			// 'click #nextToTrainingCost' : 'next'
		},
		
		template: $('#formNumberEmployees').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
		},
		render: function(){
			this.$el.html(this.template);
		}
	});
}());