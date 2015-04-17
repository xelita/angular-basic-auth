# [angular-basic-auth]
  
 Basic authentication for AngularJS applications.
  
 IMPORTANT: This library relies on angular-base64-codec library (http://github.com/xelita/angular-basic-auth) to encode /decode data to/from base64.
  
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
  
 ```javascript
 $scope.testLogin = function() {
     basicAuthService.login();
 };
 ```
  
 ### Logging a user out
  
 ```javascript
 $scope.testLogout = function() {
     basicAuthService.logout();
 };
 ```

## Developers

Clone the repo, `git clone git://github.com/xelita/angular-base64.git`.
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
