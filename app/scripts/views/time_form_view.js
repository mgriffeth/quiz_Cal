(function(){
	App.Views.FormTrainingTimeView = Parse.View.extend({
		events:{
			'click #nextToAvgSalary' : 'next',
			'click #backToTrainingCost' : 'back'
		},
		
		template: $('#formTrainingTime').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
		},
		render: function(){
			this.$el.html(this.template);
		},
		next: function(){
			if($('#trainingTime').val().length > 0){
				trainingHours = $('#trainingTime').val();
				App.router.navigate('formPage04', { trigger : true });
			}
			
		},
		back: function(){
			App.router.navigate('formPage02', { trigger : true });
		}
	});
}());