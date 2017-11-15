(function(){

    "use strict";

    angular
        .module('Dashboard', [

        ])
        .controller('DashboardController', ['$scope', DashboardController]);

    function DashboardController(scope){
        scope.message = 'Dashboard View loaded from controller';
    }

})();