function MainController($scope) {
  $scope.name = 'Miranda'
  $scope.hometown = 'Seattle, WA'
  $scope.age = '24'
}


angular
  .module('app');
  .controller('MainController', MainController);
