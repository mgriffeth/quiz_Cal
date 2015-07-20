(function(){
	App.Views.FormResultsExtensionView = Parse.View.extend({
		events:{
			'click #resultsToHome' : 'goHome'
		},
		
		template: $('#formResultsExtension').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
			// myApp.showPleaseWait();
			// myApp.hidePleaseWait();
			
			var $modal = $('.js-loading-bar'),
		        $bar = $modal.find('.progress-bar');
		    
		    $modal.modal('show');

		    setTimeout(function() {
		      $modal.modal('hide'); 
		      $bar.removeClass('animate');
		      //$modal.modal('hide');   
			  $('#total-cost').html('$' + accounting.formatNumber(edifyAnually,2,','));
  			$('#cost-employee').html('$' + accounting.formatNumber(trainingCostPerEmployee,2,','));
  			$('#savings').html('$' + accounting.formatNumber((trainingCost - edifyAnually),2,','));
  			$('#edify-cost-hour').html('$' + accounting.formatNumber(edifyPerHour,2,','));
  			$('#return').html(accounting.formatNumber(returnOnInvestment1 * 100,2,',') + '%');     
		    }, 1500);

			
		},
		render: function(){
			this.$el.html(this.template);
		},
		goHome: function(){
			App.router.navigate('formPage01', { trigger : true });
		}
	});
}());