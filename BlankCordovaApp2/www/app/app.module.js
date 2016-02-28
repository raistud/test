//(function(){
//'use strict';
angular.module('PrasadApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
          url: "/home",         
          templateUrl: "app/home/home.template.html"
      })
});
angular.module('HelloApp', ['PrasadApp']);

//})

