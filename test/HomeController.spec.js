describe('Weather App controllers', function() {

    beforeEach(module('weatherApp'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('home controller', function() {
        it('should be defined', function() {
            const homeCtrl = $controller('HomeController');
            expect(homeCtrl).toBeDefined();
        });
    });
});
