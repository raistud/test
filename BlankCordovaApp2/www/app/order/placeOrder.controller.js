//(function(angular){
//'use strict'

angular
.module ('PrasadApp')
.controller('placeOrder.controller',['$scope',placeOrder]);

function placeOrder($scope){
	
    var ctrl = this;
    ctrl.cartItems = [];

    // Stub data

	ctrl.hub = 'Byron Avenue';
	ctrl.items = 
	[	{name:'Rice Meal', price : 3.5 , weight : '500g'    , category:'Main',qty:0},
		{name:'Chapati Meal', price : 4.5 , weight : '500g',category: 'Main',qty:0},
		{ name: 'Combo Meal', price: 5.5, weight: '500g', category: 'Main', qty: 0 }];
    ctrl.desserts = [

		{ name: 'Gulab jamin', price: 5.5, weight: '500g', category: 'Dessert', qty: 0 },
        { name: 'Rasgulla', price: 5.5, weight: '500g', category: 'Dessert', qty: 0 },
        { name: 'Rasmalai', price: 5.5, weight: '500g', category: 'Dessert', qty: 0 },
        { name: 'Gajar Halwa', price: 5.5, weight: '500g', category: 'Dessert', qty: 0 },
        { name: 'Carrot cake', price: 5.5, weight: '500g', category: 'Dessert', qty: 0 },
        { name: 'Black forest', price: 5.5, weight: '500g', category: 'Dessert', qty: 0 },
        { name: 'Gulab jamin', price: 5.5, weight: '500g', category: 'Dessert', qty: 0 }
		];
	ctrl.hideItem = false;

	ctrl.add = function (item) {
	    item.qty = item.qty + 1;
	    ctrl.totalQty = ctrl.totalQty + 1;
	    ctrl.totalPrice = ctrl.totalPrice + item.price
	}
	ctrl.remove = function (item) {
	    if (item.qty > 0) {
	        item.qty = item.qty - 1;
	        ctrl.totalQty = ctrl.totalQty - 1;
	        ctrl.totalPrice = ctrl.totalPrice - item.price
	    }
	}

	ctrl.totalQty = 0;	
	ctrl.totalPrice = 0;

	

}
	
//})(angular);