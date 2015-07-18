(function(){
	App.Views.FormReturnTypeView = Parse.View.extend({
		events:{
			'click #nextToIndustry' : 'next',
			'click #backToTrainingTime' : 'back'
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
			if ($('#radioExtend').is(':checked')){
				returnType = 'extend';
			} else if ($('#radioAdd').is(':checked')){
				returnType = 'add';
			} else {
				returnType = 'both';
			};
			console.log(returnType);
			App.router.navigate('formPage05', { trigger : true });
		},
		back: function(){
			App.router.navigate('formPage03', { trigger : true });
		}
	});
}());