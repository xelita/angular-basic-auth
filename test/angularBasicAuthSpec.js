describe("basicAuthModule Tests Suite", function () {

    // basicAuthConstants

    describe("basicAuthConstants Tests", function () {

        var basicAuthConstants;

        beforeEach(function () {
            module('basicAuthModule');
            inject(function (_basicAuthConstants_) {
                basicAuthConstants = _basicAuthConstants_;
            });
        });

        it("basicHeaderPrefix", function () {
            expect(basicAuthConstants.basicHeaderPrefix).toBe('Basic ');
        });
    });

    // basicAuthService

    describe("basicAuthService Tests", function () {

        var basicAuthService;
        var basicAuthConstants;

        var $httpBackend;

        beforeEach(function () {
            module('basicAuthModule');
            inject(function (_basicAuthService_, _basicAuthConstants_, _$httpBackend_) {
                basicAuthService = _basicAuthService_;
                basicAuthConstants = _basicAuthConstants_;
                $httpBackend = _$httpBackend_;
            });
        });

        it("generateAuthorizationHeader", function () {
            expect(basicAuthService.generateAuthorizationHeader('john', 'this is my password')).toBe('Basic am9obg==:dGhpcyBpcyBteSBwYXNzd29yZA==');
        });

        /*
         it("apiVersion when url is omitted", function () {
         var expectedResponse = {
         "uid": "23b86ec8091013d668829fe12791fdab",
         "device_name": "Freebox Server",
         "api_version": "3.0",
         "api_base_url": "/api/",
         "device_type": "FreeboxServer1,1"
         };
         $httpBackend.expectGET('http://mafreebox.freebox.fr/api_version').respond(expectedResponse);
         basicAuthService.apiVersion();
         $httpBackend.flush();
         });

         it("apiVersion when url is provided", function () {
         var expectedResponse = {
         "uid": "23b86ec8091013d668829fe12791fdab",
         "device_name": "Freebox Server",
         "api_version": "3.0",
         "api_base_url": "/api/",
         "device_type": "FreeboxServer1,1"
         };
         $httpBackend.expectGET('http://88.168.32.124:8080/api_version').respond(expectedResponse);
         basicAuthService.apiVersion('http://88.168.32.124:8080');
         $httpBackend.flush();
         });

         it("apiRequestUrl when url is omitted", function () {
         var expectedResponse = {
         "uid": "23b86ec8091013d668829fe12791fdab",
         "device_name": "Freebox Server",
         "api_version": "3.0",
         "api_base_url": "/api/",
         "device_type": "FreeboxServer1,1"
         };
         $httpBackend.expectGET('http://mafreebox.freebox.fr/api_version').respond(expectedResponse);
         var promise = basicAuthService.apiRequestUrl('/login');
         promise.then(function(requestUrl){
         expect(requestUrl).toBe('http://mafreebox.freebox.fr/api/v3/login');
         });
         $httpBackend.flush();
         });

         it("apiRequestUrl when url is provided", function () {
         var expectedResponse = {
         "uid": "23b86ec8091013d668829fe12791fdab",
         "device_name": "Freebox Server",
         "api_version": "3.0",
         "api_base_url": "/api/",
         "device_type": "FreeboxServer1,1"
         };
         $httpBackend.expectGET('http://88.168.32.124:8080/api_version').respond(expectedResponse);
         var promise = basicAuthService.apiRequestUrl('/login', 'http://88.168.32.124:8080');
         promise.then(function(requestUrl){
         expect(requestUrl).toBe('http://88.168.32.124:8080/api/v3/login');
         });
         $httpBackend.flush();
         });
         */
    });
});