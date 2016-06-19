'use strict';

angular.module('jwtNewApp')
  .controller('RegisterCtrl', function ($scope, $http, alert) {
    $scope.submit = function() {
        var url='/';
      var user = {};
        $http.post(url,user)
          .success(function(res) {
            alert('success', 'Ok! ', 'You are now registered');
          })
          .error(function(err) {
            alert('warning', 'Oops! ', 'Could not register!');
          })
    };
  });
