'use strict';

describe('controllers', function(){
    beforeEach(module('myApp.controllers'));

    it('should ...', inject(function($controller) {
        //spec body
        var numberCtrl = $controller('numberCtrl', { $scope: {} });
        expect(typeof numberCtrl).to.not.equal("undefined");
        expect(typeof numberCtrl.incrementNumber).to.not.equal("undefined");
    }));
    
    it('should ...', inject(function($controller) {
        //spec body
        var myCtrl1 = $controller('MyCtrl1', { $scope: {} });
        expect(typeof myCtrl1).to.not.equal("undefined");
    }));

    it('should ...', inject(function($controller) {
        //spec body
        var myCtrl2 = $controller('MyCtrl2', { $scope: {} });
        expect(typeof myCtrl2).to.not.equal("undefined");
    }));
});