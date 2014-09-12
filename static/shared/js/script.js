<!doctype html>
<html ng-app>
  <head>
    <!-- LOAD BOOTSTRAP CSS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">

    <!-- LOAD JQUERY -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script src="http://code.angularjs.org/1.2.6/angular.min.js"></script>
    <script>
    // define angular module/app
    var formApp = angular.module('formApp', []);

    // create angular controller and pass in $scope and $http
    function formController($scope, $http) {
      // create a blank object to hold our form information
      // $scope will allow this to pass between controller and view
      $scope.formData = {};
      // process the form
      $scope.processForm = function() {
        $http({
          method  : 'POST',
          url     : 'process.php',
          data    : $.param($scope.formData),  // pass in data as strings
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })
        .success(function(data) {
          console.log(data);

          if (!data.success) {
            // if not successful, bind errors to error variables
            $scope.errorName = data.errors.name;
            $scope.errorEmail = data.errors.email;
            $scope.errorOrganization = data.errors.organization;
          } else {
            // if successful, bind success message to message
            $scope.message = data.message;
          }
        });

      };
    }
    </script>
  </head>
  <body ng-app="formApp">
    <div ng-controller="formController">
      <form novalidate class="simple-form" ng-submit="processForm()">
        Name: <input type="text" ng-model="formData.name" /><br />
        <span class="help-block" ng-show="errorName">{{ errorName }}</span>
        E-mail: <input type="email" ng-model="formData.email" /><br />
        <span class="help-block" ng-show="errorEmail">{{ errorEmail }}</span>
        Organization: <input type="organization" ng-model="formData.organization" /><br />
        <span class="help-block" ng-show="errorOrganization">{{ errorOrganization }}</span>


        <button ng-click="reset()">RESET</button>
        <button ng-click="update(user)">SAVE</button>
      </form>
      <!-- SHOW DATA FROM INPUTS AS THEY ARE BEING TYPED -->
      <pre>
        {{ formData }}
      </pre>

    </div>
  </body>
</html>