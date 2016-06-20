'use strict';

angular.module('jwtNewApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert, authToken) {
    $scope.submit = function() {
        var url='http://localhost:3000/register';
        var user = {email: $scope.email, password: $scope.password};
        $http.post(url,user)
          .success(function(res) {
            alert('success', 'Account created! ', 'Welcome, ' + res.user.email + ' !');
            authToken.setToken(res.token);
          })
          .error(function(err) {
            alert('warning', 'Oops! ', 'Could not register!');
          })
    };
  });
