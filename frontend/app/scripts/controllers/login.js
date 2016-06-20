'use strict';

angular.module('jwtNewApp')
  .controller('LoginCtrl', function ($scope, alert, auth) {
    $scope.submit = function() {

     auth.login($scope.email,$scope.password)
        .success(function(res) {
          alert('success', 'Welcome! ', 'Thanks for coming ' + res.user.email + ' !');
        }).error(function(err) {
          alert('warning', 'Something wrong :(', 'Could not register!', err.message);
        });
    };
  });
