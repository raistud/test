//(function(angular){
	//'use strict';
	
	angular
	.module('PrasadApp')
	.directive('placeOrder',function(){
		
		return {
			restrict    : 'E',
			templateUrl :  '/app/order/placeOrder.template.html',
			controller: 'placeOrder.controller',
		    require: '',
		    controllerAs: 'ctrl',
	        scope: false
			
		};	
	})	
//})(angular);