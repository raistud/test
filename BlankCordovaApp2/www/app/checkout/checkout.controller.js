//(function(angular){
//'use strict'

angular
.module ('PrasadApp')
.controller('checkout.controller', ['$scope', '$rootScope', 'retrieveData', checkout]);

function checkout($scope, $rootScope, retrieveData) {
    var ctrl = this;
    ctrl.cartItems = retrieveData.get();   

}
	
//})(angular);