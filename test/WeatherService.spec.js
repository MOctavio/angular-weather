describe('Weather App services', function() {

    beforeEach(module('weatherApp'));

    var $httpBackend, weatherService;

    beforeEach(function() {
        inject(function(_weatherService_, _$httpBackend_) {
            weatherService = _weatherService_;
            $httpBackend = _$httpBackend_;
        });
        $httpBackend.whenGET('views/home/home.html').respond(200, '');
    });
    describe('weather service', function() {
        it("makes a request with callback `JSON_CALLBACK`", function() {
            $httpBackend.expectJSONP(/callback=JSON_CALLBACK/).respond({});
        });
    });
  });
