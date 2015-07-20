(function(){
	App.Views.FormResultsAdditionView = Parse.View.extend({
		events:{
			'click #resultsToHome' : 'goHome'
		},
		
		template: $('#formResultsAddition').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
			
			var $modal = $('.js-loading-bar'),
		        $bar = $modal.find('.progress-bar');
		    
		    $modal.modal('show');

		    setTimeout(function() {
		      $modal.modal('hide'); 
		      $bar.removeClass('animate');
		      //$modal.modal('hide');   
			  $('#add-hours-current').html('$' + accounting.formatNumber(trainingCostPerHour * 20,2,','));
  			$('#add-hours-edify').html('$' + accounting.formatNumber(edifyPerHour * 20,2,','));
  			
  			$('#return2').html(accounting.formatNumber(returnOnInvestment2 * 100,2,',') + '%');     
		    }, 1500);
		},
		render: function(){
			this.$el.html(this.template);
		},
		goHome: function(){
			App.router.navigate('', { trigger : true });
		}
	});
}());