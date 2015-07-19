(function(){
	App.Views.FormResultsExtensionView = Parse.View.extend({
		events:{
			'click #resultsToHome' : 'goHome'
		},
		
		template: $('#formResultsExtension').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
			
			$('#total-cost').html(edifyAnually);
			$('#cost-hour').html(edifyPerHour);
			$('#savings').html(trainingCost - edifyAnually);
			$('#edify-cost-hour').html(edifyAnually);
			$('#return').html(returnOnInvestment1);
		},
		render: function(){
			this.$el.html(this.template);
		},
		goHome: function(){
			App.router.navigate('', { trigger : true });
		}
	});
}());