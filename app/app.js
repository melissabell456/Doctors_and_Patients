"use strict";

angular.module("DoctorApp", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
  .when("/doctors", {
    templateUrl: "../partials/doctorView.html",
    controller: "DoctorCtrl"
  });
});

