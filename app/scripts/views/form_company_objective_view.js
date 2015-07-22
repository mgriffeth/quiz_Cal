(function(){
	App.Views.FormCompanyObjectiveView = Parse.View.extend({
		events:{
			'click #nextToIndustry' : 'next',
			'click #backToTrainingTime' : 'back',
			'click .objectiveButton' : 'getObjective'
		},
		
		template: $('#formCompanyObjective').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
			
		},
		render: function(){
			this.$el.html(this.template);
		},
		next: function(){
		
			if (companyObjective){
				console.log(companyObjective);
				App.router.navigate('formPage05', { trigger : true });	
			}

		},
		back: function(){
			App.router.navigate('formPage01', { trigger : true });
		},
		getObjective: function(e){
			companyObjective = $(e.currentTarget).attr('value');
			
			$('.objectiveButton').removeClass('btn-info')
			
			$(e.currentTarget).addClass('btn-info')
			
		}
	});
}());