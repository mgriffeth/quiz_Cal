(function(){
	App.Views.FormCompanyObjectiveView = Parse.View.extend({
		events:{
			'click #nextToIndustry' : 'next',
			'click #backToEmployees' : 'back',
			'click .objectiveButton' : 'setObjectives'
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
			companyObjective =[];
				$('.objectiveButton').each(function(){
					if($(this).val() == 'selected'){
						companyObjective.push($(this).text());
					}
				})
				console.log(companyObjective);
				if(companyObjective.length > 0 ){
					App.router.navigate('formPage05', { trigger : true });		
				}
				
			
		},
		back: function(){
			App.router.navigate('formPage01', { trigger : true });
		},
		setObjectives: function(e){
			// companyObjective = $(e.currentTarget).attr('value');
			
			
			if ($(e.currentTarget).val() == 'not-selected'){
				$(e.currentTarget).val('selected')
				$(e.currentTarget).addClass('btn-info')
				
			} else{
				$(e.currentTarget).val('not-selected')
				$(e.currentTarget).removeClass('btn-info')
				
			}
			
			
			
			
		}
	});
}());