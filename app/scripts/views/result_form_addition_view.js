(function(){
	App.Views.FormResultsAdditionView = Parse.View.extend({
		events:{
			'click #resultsToHome' : 'goHome'
		},
		
		template: $('#formResultsAddition').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
			$('#add-hours-current').html(('$' + accounting.formatNumber(trainingCostPerHour * 20,2,',')));
			$('#add-hours-edify').html(('$' + accounting.formatNumber(edifyPerHour * 20,2,',')));
			$('#return2').html(accounting.formatNumber(returnOnInvestment1 * 100,2,',') + '%');
		},
		render: function(){
			this.$el.html(this.template);
		},
		goHome: function(){
			App.router.navigate('', { trigger : true });
		}
	});
}());