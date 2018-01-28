"use strict";

angular.module("DoctorApp", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
  .when("/", {
    templateUrl: "../partials/doctorView.html",
    controller: "DoctorCtrl"
  });
});

