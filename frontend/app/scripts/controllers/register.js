'use strict';

angular.module('jwtNewApp')
  .controller('RegisterCtrl', function ($scope, $http, alert) {
    $scope.submit = function() {
        var url='http://localhost:3000/register';
      var user = {email: $scope.email, password: $scope.password};
        $http.post(url,user)
          .success(function(res) {
            alert('success', 'Ok! ', 'You are now registered');
            authToken.setToken(res.token);
          })
          .error(function(err) {
            alert('warning', 'Oops! ', 'Could not register!');
          })
    };
  });
