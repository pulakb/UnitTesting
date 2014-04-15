describe('testing watch', function  () {
    var $scope;
    beforeEach(inject(function ($rootScope){
        $scope = $rootScope.$new();
        $scope.name = 'John';
        $scope.counter = 0;
    }));

    it('should change value when digest is called', function () {
       expect($scope.counter).toEqual(0);

        $scope.$watch('name', function(newValue, oldValue) {
            $scope.counter = $scope.counter + 1;
        });

        expect($scope.counter).toEqual(0);

        $scope.$digest();
        expect($scope.counter).toEqual(1);

        $scope.name = 'adam';
        $scope.$digest();
        expect($scope.counter).toEqual(2);
    });
});