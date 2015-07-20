(function(){
	App.Models.CalculationModel = Parse.Object.extend({
		className:'Calculation',
		
		idAttribute:'objectId',
		
		defaults:{
			contacted:false,
			employees:'',
			trainingCost:'',
			trainingCostPerEmployee:'',
			trainingCostPerHour:'',
			trainingHours:'',
			trainingHoursPerEmployee:'',
			edifyAnually:'',
			edfyPerHour:'',
			email:'',
			industry:'',
			returnType: '',
			returnOnInvestment1:'',
			returnOnInvestment2:'',
			anualSavings:''
		},
		
		initialize: function (){
			
		}
	});
}());
(function (){
	App.Collections.CalculationCollection = Parse.Collection.extend({
		model:App.Models.CalculationModel
	});
}());
(function(){
	App.Routers.CalculatorRouter = Parse.Router.extend({
		initialize: function(){
			Parse.history.start();
		},
		routes:{
			'' : 'home',
			'formPage01' : 'formNumberEmployees',
			'formPage02' : 'formTrainingCost',
			'formPage03' : 'formTrainingTime',
			'formPage04' : 'formReturnType',
			'formPage05' : 'formIndustry',
			'formPage06' : 'formEmail',
			'formResultsAddition' : 'formResultsAddition',
			'formResultsExtension' : 'formResultsExtension',
			'formResultsBoth' : 'formResultsBoth'
		},
		
		home: function (){
			new App.Views.HomeView();	
		},
		formNumberEmployees: function(){
			new App.Views.FormNumberEmployeesView();
		},
		formTrainingCost: function(){
			new App.Views.FormTrainingCostView();
		},
		formTrainingTime: function(){
			new App.Views.FormTrainingTimeView();
		},
		formAvgSalary: function(){
			new App.Views.FormAvgSalaryView();
		},
		formReturnType: function(){
		 new App.Views.FormReturnTypeView();	
		},
		formIndustry: function(){
			new App.Views.FormIndustryView();
		},
		formEmail: function(){
			new App.Views.FormEmailView();
		},
		formResultsAddition: function(){
			new App.Views.FormResultsAdditionView();
		},
		formResultsExtension: function(){
			new App.Views.FormResultsExtensionView();
		},
		formResultsBoth: function(){
			new App.Views.FormResultsBothView();
		}
	});
}());
(function(){
	App.Views.HomeView = Parse.View.extend({
		events:{
			'click #startButton' : 'startForm'
		},
		
		template: $('#homeView').html(),
		
		initialize: function () {
	    //   this.options = options;
	      this.render();
	      $('#viewContainer').html(this.$el);
		},
		render: function(){
			this.$el.html(this.template);
		},
		startForm: function(){
			App.router.navigate('formPage01', { trigger : true });
		}
	});
}());
(function(){
	App.Views.FormNumberEmployeesView = Parse.View.extend({
		events:{
			'click #nextToTrainingCost' : 'next'
		},
		
		template: $('#formNumberEmployees').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
		},
		render: function(){
			this.$el.html(this.template);
		},
		next: function(){
			if($('#numberEmployees').val().length > 0){
				employees = Number($('#numberEmployees').val());
				edifyAnually = employees * edifyAnuallyPerPerson;
				console.log(employees);
				console.log(edifyAnually);
				App.router.navigate('formPage02', { trigger : true });	
			}
		}
	});
}());
(function(){
	App.Views.FormTrainingCostView = Parse.View.extend({
		events:{
			'click #nextToTrainingTime' : 'next',
			'click #backToNumberEmployees' : 'back'
		},
		
		template: $('#formTrainingCost').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
		},
		render: function(){
			this.$el.html(this.template);
		},
		next: function(){
			if($('#trainingCost').val().length > 0){
				if($('#radioTimeTotal').is(':checked')) {
					trainingCost = Number($('#trainingCost').val());
					trainingCostPerEmployee = trainingCost / employees;
					console.log(trainingCost);
					console.log(trainingCostPerEmployee);
				} else if ($('#radioTimePerEmployee').is(':checked')) {
					trainingCostPerEmployee = Number($('#trainingCost').val());
					trainingCost =  trainingCostPerEmployee * employees;
					console.log(trainingCost);
					console.log(trainingCostPerEmployee);
				}
				App.router.navigate('formPage03', { trigger : true });
			}
		},
		back: function(){
			App.router.navigate('formPage01', { trigger : true });
		}
	});
}());
(function(){
	App.Views.FormAvgSalaryView = Parse.View.extend({
		events:{
			'click #nextToIndustry' : 'next',
			'click #backToTrainingTime' : 'back'
		},
		
		template: $('#formAverageSalary').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
		},
		render: function(){
			this.$el.html(this.template);
		},
		next: function(){
			App.router.navigate('formPage05', { trigger : true });
		},
		back: function(){
			App.router.navigate('formPage03', { trigger : true });
		}
	});
}());
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
			
			// if(industry == 'Other'){
			// 	$('#industryOtherDiv').removeClass('hidden');
			// } else {
			// 	$('#industryOtherDiv').addClass('hidden');
			// 	industry = $(e.currentTarget).attr('value');
			// };
		}
	});
}());
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
			
			if(industry == 'Other'){
				$('#industryOtherDiv').removeClass('hidden');
			} else {
				$('#industryOtherDiv').addClass('hidden');
				industry = $(e.currentTarget).attr('value');
			};
		} 
	});
}());
(function(){
	App.Views.FormEmailView = Parse.View.extend({
		events:{
			'click #nextToResults' : 'next',
			'click #backToIndustry' : 'back'
		},
		
		template: $('#formEmail').html(),
		
		initialize:function(){
			this.render();
			$('#viewContainer').html(this.$el);
		},
		render: function(){
			this.$el.html(this.template);
		},
		next: function(e){
			e.preventDefault();
			
			if($('#email').val().length > 0){
				email = $('#email').val();
				//extension
				returnOnInvestment1 = (trainingCost - edifyAnually) /edifyAnually;
				//addition
				trainingCostPerHour = 200*(trainingCost / trainingHours);
				edifyPerHour = 200*(edifyAnually / trainingHours);
				returnOnInvestment2= (trainingCostPerHour - edifyPerHour) / edifyPerHour;
				
				var calculationInformation = new App.Models.CalculationModel({
					employees: employees,
					trainingCost: trainingCost,
					trainingCostPerEmployee: trainingCostPerEmployee,
					trainingCostPerHour: trainingCostPerHour,
					trainingHours: trainingHours,
					trainingHoursPerEmployee: trainingHoursPerEmployee,
					edifyAnually: edifyAnually,
					edifyPerHour: edifyPerHour,
					returnType: returnType,
					returnOnInvestment1: returnOnInvestment1,
					returnOnInvestment2: returnOnInvestment2,
					industry: industry,
					email: email
				});
				
				calculationInformation.save(null,{
					success:function(){
						App.calculation_collection.add(calculationInformation);
						console.log(calculationInformation);
						
						if(returnType == 'Extend Current Training' ){
							App.router.navigate('formResultsExtension', { trigger : true });
						} else if (returnType == 'Add to Current Training') {
							App.router.navigate('formResultsAddition', { trigger : true });
						} else {
							App.router.navigate('formResultsBoth', { trigger : true });
						};
					}
				})
			}
		},
		back: function(){
			App.router.navigate('formPage05', { trigger : true });
		}
	});
}());
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
  			
  			$('#return').html(accounting.formatNumber(returnOnInvestment1 * 100,2,',') + '%');     
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
			App.router.navigate('', { trigger : true });
		}
	});
}());
(function(){
	App.Views.FormResultsBothView = Parse.View.extend({
		events:{
			'click #resultsToHome' : 'goHome'
		},
		
		template: $('#formResultsBoth').html(),
		
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
			  $('#total-cost').html('$' + accounting.formatNumber(edifyAnually,2,','));
			  $('#cost-employee').html('$' + accounting.formatNumber(trainingCostPerEmployee,2,','));
			  $('#savings').html('$' + accounting.formatNumber((trainingCost - edifyAnually),2,','));
			  $('#edify-cost-hour').html('$' + accounting.formatNumber(edifyPerHour,2,','));
			  $('#return').html(accounting.formatNumber(returnOnInvestment1 * 100,2,',') + '%');
			  
			  $('#add-hours-current').html('$' + accounting.formatNumber(trainingCostPerHour * 20,2,','));
  			$('#add-hours-edify').html('$' + accounting.formatNumber(edifyPerHour * 20,2,','));
  			
  			$('#return').html(accounting.formatNumber(returnOnInvestment1 * 100,2,',') + '%');
			  
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
				trainingHoursPerEmployee = Number($('#trainingTime').val());
				trainingHours = trainingHoursPerEmployee * employees;
				App.router.navigate('formPage04', { trigger : true });
			}
			
		},
		back: function(){
			App.router.navigate('formPage02', { trigger : true });
		}
	});
}());
Parse.initialize("gQF0YOO9uWOyhIU8AXzGJGWKbZp6GqvOiwnGMihi", "ypxqeWsmiBA7wujkKJzhi6YucXJs6jQS5sb3BqtG");
var employees,
	trainingCost,
	trainingCostPerEmployee,
	trainingCostPerHour,
	trainingHours,
	trainingHoursPerEmployee,
	edifyAnually,
	edifyAnuallyPerPerson = 60.00,
	edifyPerHour,
	returnType,
	returnOnInvestment1,
	returnOnInvestment2,
	industry,
	email;
	
	// Setup
	this.$('.js-loading-bar').modal({
	  backdrop: 'static',
	  show: false
	}).on('shown.bs.modal', function( event ) {

	   var $bar = $(event.target).find('.progress-bar'),
	       _wait = function() {       
	            setTimeout(function() {
	              if ( $bar.is(':visible')) { 
	                   $bar.addClass('animate');
	               } else {
	                  console.log('not ready'); 
	                  _wait();
	               }
	            }, 0);       
	       };
	   
	   _wait();
	   
	});

	$('#load').click(function() {
	  var $modal = $('.js-loading-bar'),
	      $bar = $modal.find('.progress-bar');
	  
	  $modal.modal('show');

	  setTimeout(function() {
	    $modal.modal('hide'); 
	    $bar.removeClass('animate');
	    //$modal.modal('hide');        
	  }, 1500);
	});
	
	
	
// 	var myApp;
// myApp = myApp || (function () {
//     var pleaseWaitDiv = $('<div class="modal hide" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false"><div class="modal-header"><h1>Processing...</h1></div><div class="modal-body"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>');
//     return {
//         showPleaseWait: function() {
//             pleaseWaitDiv.modal();
//         },
//         hidePleaseWait: function () {
//             pleaseWaitDiv.modal('hide');
//         },
// 
//     };
// })();
	
(function(){	
	// App.user = Parse.User.current();
	App.calculation_collection = new App.Collections.CalculationCollection();
	App.router = new App.Routers.CalculatorRouter();
	Backbone.history.start();
	
}());