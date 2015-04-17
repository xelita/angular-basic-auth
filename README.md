[![Bower version](https://badge.fury.io/bo/angular-basic-auth.svg)](http://badge.fury.io/bo/angular-basic-auth)
[![Build Status](https://travis-ci.org/xelita/angular-basic-auth.png?branch=master)](https://travis-ci.org/xelita/angular-basic-auth)
[![Coverage Status](https://coveralls.io/repos/xelita/angular-basic-auth/badge.svg)](https://coveralls.io/r/xelita/angular-basic-auth)
# [angular-basic-auth]
  
 Basic authentication for AngularJS applications.
  
 IMPORTANT: This library relies on angular-basic-auth-codec library (http://github.com/xelita/angular-basic-auth) to encode /decode data to/from basic-auth.
  
 ## Install
  
 ### Using Bower
  
 ``` bash
 bower install angular-basic-auth
 ```
  
 ## Quick start
  
 + Include the library in your application.
  
 ```html
 <script src="js/angular-basic-auth.js"></script>
 ```
 or use the minified version:
  
 ```html
 <script src="js/angular-basic-auth.min.js"></script>
 ```
  
 + Add the module `basicAuthModule` as a dependency to your app module:
  
 ```javascript
 var myapp = angular.module('myapp', ['basicAuthModule']);
 ```
  
 + Use the basicAuthService as dependency and call basicAuthService API:
  
 ### Generating an authorization header based on given username and password
  
 ```javascript
 $scope.testGenerateAuthorizationHeader = function() {
     basicAuthService.generateAuthorizationHeader('john', this is my password'); // return 'Basic am9obg==:dGhpcyBpcyBteSBwYXNzd29yZA=='
 };
 ```
  
 ### Logging a user in
  
 The logging process is made with a post request on a given url.
 Sent data (auth data) is a json object that should contain at least a username and a password.
 These last are controlled by the backend service. 
 Of course, you can add more information in the authData object.
 
 e.g
 ```javascript
 {
    username: 'john',
    password: 'this is my password',
    extra: 'obama'
 }
 ```
 
 During the call, you can provide optional callback that will allow you to interact with potential data coming from the remote server.
 e.g.
 - Display data in the view
 - Store these data in a service for a further usage
 - etc...
 
 A sample call could be:
 
 ```javascript
 $scope.testLogin = function() {
    var authData = {username: 'john', password: 'this is my password'};
    
    var successCB = function(response) {
        // Work with extra data coming from the remote server
        $scope.generatedKey = response.data.generatedKey;
    };
    
    var failureCB = function(error) {
        $scope.status = 'ERROR';
    };
    
    basicAuthService.login('http://www.mysite.com/login', authData, successCB, failureCB);
 };
 ```
  
 If the logging step succeeds, then further HTTP request will be made using a 'Authorization' header (computed by the given username and password).
 e.g. request with 'Authorization' header equals to 'Basic am9obg==:dGhpcyBpcyBteSBwYXNzd29yZA=='.
  
 ### Logging a user out
  
 The logout process is made with a post request on a given url.
 
 During the call, you can provide optional callback that will allow you to interact with potential data coming from the remote server.
 e.g.
 - Display data in the view
 - Store these data in a service for a further usage
 - etc...

 ```javascript

    var successCB = function(response) {
        $scope.generatedKey = '';
    };
    
    var failureCB = function(error) {
        $scope.status = 'ERROR';
    };
     
    $scope.testLogout = function() {
        basicAuthService.logout('http://www.mysite.com/login', successCB, failureCB);
    };
 ```
 
 If the logout step succeeds, then further HTTP request will be made using a cleaned 'Authorization' header ('Basic ').  
  
## Developers

Clone the repo, `git clone git://github.com/xelita/angular-basic-auth.git`.
The project is tested with `jasmine` running on `karma`.

>
``` bash
$ npm install
$ bower install
$ npm test
```

## Contributing

Please submit all pull requests the against master branch. If your unit test contains JavaScript patches or features, you should include relevant unit tests. Thanks!

## Copyright and license

    The MIT License (MIT)

    Copyright (c) 2014 The Enlightened Developer

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
