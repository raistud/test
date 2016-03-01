//(function(angular){
//'use strict'

angular
.module ('PrasadApp')
.controller('placeOrder.controller',['$scope','$rootScope','$location','retrieveData',placeOrder]);

function placeOrder($scope, $rootScope, $location,retrieveData) {
	
    var ctrl = this;
    retrieveData.get();
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
	    ctrl.totalPrice = ctrl.totalPrice + item.price;	    
	    var found= false;
	    for (var i = 0; i < ctrl.cartItems.length; i++) {	        
	        if (ctrl.cartItems[i].name == item.name) {
	            ctrl.cartItems[i].qty = ctrl.cartItems[i].qty + 1;
	            found = true;
	        }
	    }
	    
	    if(found == false)
	    {
	        ctrl.cartItems.push(item);
	    }
	    
	}
	ctrl.remove = function (item) {
	    if (item.qty > 0) {
	        item.qty = item.qty - 1;
	        ctrl.totalQty = ctrl.totalQty - 1;
	        ctrl.totalPrice = ctrl.totalPrice - item.price
	    }
	    var lastItem = false;
	    var index = -1;
	    for (var i = 0; i < ctrl.cartItems.length; i++) {
	        // look for the entry with a matching `code` value
	        if (ctrl.cartItems[i].name == item.name) {
	            if (ctrl.cartItems[i].qty > 0)
                {
	                ctrl.cartItems[i].qty = ctrl.cartItems[i].qty - 1;
	                lastItem = false;
	            }
	            else {
	                lastItem = true;
	                index = i;
	            }            
	        }
	    }
	    if(lastItem)
	    {
	        ctrl.cartItems.splice(index);
	    }
	}
	ctrl.goToCheckout = function () {
	    retrieveData.set(ctrl.cartItems);
	    var get = retrieveData.get();	 
	    $location.path("checkout");
	}

	ctrl.totalQty = 0;	
	ctrl.totalPrice = 0;

}
	
//})(angular);