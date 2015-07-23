(function(){
	App.Views.ResultsDetailsView = Parse.View.extend({
		events:{
		},
		template: $('resultsDetails').html(),
		
		 initialize:function(){
			 this.render();
			 $('#viewContainer').html(this.$el);
		 },
		 render:function(){
			 this.$el.html(this.template);
		 }
	});
}());