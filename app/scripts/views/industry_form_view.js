(function(){
	App.Views.FormIndustryView = Parse.View.extend({
		events:{
			'click #nextToEmail' : 'next',
			'click #backToReturnType' : 'back',
			'click .industryButton' : 'getIndustry'
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
			if(industry){
				if((industry == 'Other') && $('#otherIndustry').val().length > 0){
					industry = $('#otherIndustry').val()
					console.log(industry);
					App.router.navigate('formPage06', { trigger : true });
				} else {
					console.log(industry);
					App.router.navigate('formPage06', { trigger : true });
				}
			}	
		},
		back: function(){
			App.router.navigate('formPage04', { trigger : true });
		},
		getIndustry: function(e){
		 	industry = $(e.currentTarget).attr('value');
			
			$('.industryButton').removeClass('btn-info')
			// $('.industryButton').addClass('btn-success')
			// $(e.currentTarget).removeClass('btn-success')
			$(e.currentTarget).addClass('btn-info')
			
			if(industry == 'Other'){
				$('#industryOtherDiv').removeClass('hidden');
			} else {
				$('#industryOtherDiv').addClass('hidden');
				industry = $(e.currentTarget).attr('value');
			};
		} 
	});
}());