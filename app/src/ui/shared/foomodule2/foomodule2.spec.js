require('./')

describe('foomodule2', function() {

  var $scope = null;
  var $viewElement = null;

  beforeEach(function() {
    angular.mock.module('foomodule2');

    angular.mock.inject(function($compile, $rootScope) {
      $scope = $rootScope.$new();
      var template = '<foomodule2></foomodule2>';
      $viewElement = $compile(template)($scope);
      $scope.$apply();
    });

  });


  describe('loading the foomodule2 module', function() {

    xit('should render the module', function() {
      expect($viewElement.find('[ng-click="doSomething()"]')).to.exist;
    });

  });


  describe('pressing the doSomething button', function() {

    xit('should change the buttonPressed variable', function() {
      sinon.spy($viewElement.scope().doSomething());
      $viewElement.find('[ng-click="doSomething()"]').click();
      expect($viewElement.scope().buttonPressed).to.have.been.called;
    });

  });

});