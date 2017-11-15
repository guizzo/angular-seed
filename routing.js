(function(){

    "use strict";

    angular
        .module('Routing', [
            'ngRoute'
        ])
        .config(['$locationProvider', '$routeProvider', setRouting]);

    function setRouting($locationProvider, $routeProvider){
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/', {
                templateUrl: 'components/dashboard/dashboard.html',
                controller: 'DashboardController'
            })
            .when('/posts', {
                templateUrl: 'components/posts/posts.html',
                controller: 'PostController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();