'use strict';

angular.module('jwtNewApp')
  .controller('RegisterCtrl', function ($scope, alert, auth) {
    $scope.submit = function() {

        auth.register($scope.email,$scope.password)
          .success(function(res) {
            alert('success', 'Account created! ', 'Welcome, ' + res.user.email + ' !');
            })
          .error(function(err) {
            alert('warning', 'Oops! ', 'Could not register!', err.message);
          });
    };
  });
