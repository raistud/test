//(function(){
//'use strict';
angular.module('PrasadApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/app/home/home.template.html',
            
        })
        .state('order', {
            url: '/order',
            //template: '<div class="padding"><h2>Order</h2><button class="button button-assertive" ui-sref="home">To home</button></div>'
            templateUrl: '/app/order/placeOrder.template.html',
            controller: 'placeOrder.controller',
            controllerAs: 'ctrl',
            scope: false
        })
        .state('checkout', {
            url: '/checkout',            
            templateUrl: '/app/checkout/checkout.template.html',
            controller: 'checkout.controller',
            controllerAs: 'ctrl',
            scope: false
    })
    $urlRouterProvider.otherwise('/home');

});

//angular.module('HelloApp', ['PrasadApp']);

//})

