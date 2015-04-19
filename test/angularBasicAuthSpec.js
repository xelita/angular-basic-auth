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

        var $http;
        var $httpBackend;

        beforeEach(function () {
            module('basicAuthModule');
            inject(function (_basicAuthService_, _basicAuthConstants_, _$http_, _$httpBackend_) {
                basicAuthService = _basicAuthService_;
                basicAuthConstants = _basicAuthConstants_;
                $http = _$http_;
                $httpBackend = _$httpBackend_;
            });
        });

        it("generateAuthorizationHeader", function () {
            expect(basicAuthService.generateAuthorizationHeader('john', 'this is my password')).toBe('Basic am9obg==:dGhpcyBpcyBteSBwYXNzd29yZA==');
        });

        it("login on error should call failure callback if provided", function () {
            var obj = jasmine.createSpyObj('obj', ['successCB', 'failureCB']);

            $httpBackend.expectPOST('http://www.mysite.com/login').respond(500, '');
            basicAuthService.login('http://www.mysite.com/login', {}, obj.successCB, obj.failureCB);
            $httpBackend.flush();

            expect(obj.failureCB).toHaveBeenCalled();
        });

        it("login on success should call success callback if provided", function () {
            var authData = {username: 'john', password: 'this is my password'};
            var basicHeader = 'Basic am9obg==:dGhpcyBpcyBteSBwYXNzd29yZA==';
            var serviceResponse = {firstname: 'john', lastname: 'doe'};
            var obj = jasmine.createSpyObj('obj', ['successCB', 'failureCB']);

            $httpBackend.expectPOST('http://www.mysite.com/login').respond(serviceResponse);
            basicAuthService.login('http://www.mysite.com/login', authData, obj.successCB, obj.failureCB);
            $httpBackend.flush();

            expect($http.defaults.headers.common.Authorization).toBe(basicHeader);
            expect(obj.successCB).toHaveBeenCalledWith(basicHeader, jasmine.objectContaining({data: serviceResponse}));
        });

        it("logout on error should call failure callback if provided", function () {
            var obj = jasmine.createSpyObj('obj', ['successCB', 'failureCB']);

            $httpBackend.expectPOST('http://www.mysite.com/logout').respond(500, '');
            basicAuthService.login('http://www.mysite.com/logout', {}, obj.successCB, obj.failureCB);
            $httpBackend.flush();

            expect(obj.failureCB).toHaveBeenCalled();
        });

        it("logout on success should call success callback if provided", function () {
            var serviceResponse = {firstname: 'n/a', lastname: 'n/a'};
            var obj = jasmine.createSpyObj('obj', ['successCB', 'failureCB']);

            $httpBackend.expectPOST('http://www.mysite.com/logout').respond(serviceResponse);
            basicAuthService.logout('http://www.mysite.com/logout', obj.successCB, obj.failureCB);
            $httpBackend.flush();

            expect($http.defaults.headers.common.Authorization).toBe(basicAuthConstants.basicHeaderPrefix);
            expect(obj.successCB).toHaveBeenCalledWith(jasmine.objectContaining({data: serviceResponse}));
        });

    });
});