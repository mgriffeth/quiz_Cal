(function(){
	App.Views.FormResultsBothView = Parse.View.extend({
		events:{
			'click #resultsToHome' : 'goHome'
		},
		
		template: $('#formResultsBoth').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
			
			$('#add-hours-current').html(('$' + accounting.formatNumber(trainingCostPerHour * 20,2,',')));
			$('#add-hours-edify').html(('$' + accounting.formatNumber(edifyPerHour * 20,2,',')));
			$('#return2').html(accounting.formatNumber(returnOnInvestment1 * 100,2,',') + '%');
			$('#total-cost').html('$' + accounting.formatNumber(edifyAnually,2,','));
			$('#cost-employee').html('$' + accounting.formatNumber(trainingCostPerEmployee,2,','));
			$('#savings').html('$' + accounting.formatNumber((trainingCost - edifyAnually),2,','));
			$('#edify-cost-hour').html('$' + accounting.formatNumber(edifyPerHour,2,','));
			$('#return').html(accounting.formatNumber(returnOnInvestment1 * 100,2,',') + '%');
		},
		render: function(){
			this.$el.html(this.template);
		},
		goHome: function(){
			App.router.navigate('', { trigger : true });
		}
	});
}());