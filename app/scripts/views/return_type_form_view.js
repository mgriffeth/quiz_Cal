(function(){
	App.Views.FormReturnTypeView = Parse.View.extend({
		events:{
			'click #nextToResults' : 'next',
			'click #backToIndustry' : 'back',
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
			// App.router.navigate('results1View', { trigger : true });	
			if (returnType){
				if (returnType == "Increase Current Training"){
					App.router.navigate('results1View', { trigger : true });	
				}else if (returnType == "Add training") {
					App.router.navigate('results2View', { trigger : true });	
				}else{
					App.router.navigate('results3View', { trigger : true });	
				}
				console.log(returnType);
				
			}
		},
		back: function(){
			App.router.navigate('formPage05', { trigger : true });
		},
		getReturnType: function(e){
			returnType = $(e.currentTarget).attr('value');
			$('.returnButton').removeClass('btn-info')
			$(e.currentTarget).addClass('btn-info')
		}
	});
}());