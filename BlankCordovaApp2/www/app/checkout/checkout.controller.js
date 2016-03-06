//(function(angular){
//'use strict'

angular
.module ('PrasadApp')
.controller('checkout.controller', ['$scope', '$rootScope', 'retrieveData','$location', checkout]);

function checkout($scope, $rootScope, retrieveData,$location) {
    var ctrl = this;
    ctrl.cartItems = retrieveData.get();


    ctrl.goToLogin = function () {
        
        var get = retrieveData.get();
        $location.path("login");
    }


}
	
//})(angular);