(function(){
	App.Views.FormReturnTypeView = Parse.View.extend({
		events:{
			'click #nextToIndustry' : 'next',
			'click #backToTrainingTime' : 'back',
			'click .returnButton' : 'getReturnType'
		},
		
		template: $('#formReturnType').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
			
		},
		render: function(){
			this.$el.html(this.template);
		},
		next: function(){
			// if ($('#radioExtend').is(':checked')){
			// 	returnType = 'extend';
			// } else if ($('#radioAdd').is(':checked')){
			// 	returnType = 'add';
			// } else {
			// 	returnType = 'both';
			// };
			if (returnType){
				console.log(returnType);
				App.router.navigate('formPage05', { trigger : true });	
			}

		},
		back: function(){
			App.router.navigate('formPage03', { trigger : true });
		},
		getReturnType: function(e){
			returnType = $(e.currentTarget).attr('value');
			$('.returnButton').removeClass('btn-info')
			// $('.returnButton').addClass('btn-success')
			// $(e.currentTarget).removeClass('btn-success')
			$(e.currentTarget).addClass('btn-info')
			
			// if(industry == 'Other'){
			// 	$('#industryOtherDiv').removeClass('hidden');
			// } else {
			// 	$('#industryOtherDiv').addClass('hidden');
			// 	industry = $(e.currentTarget).attr('value');
			// };
		}
	});
}());