"use strict";

angular.module("DoctorApp", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
  .when("/doctors", {
    templateUrl: "../partials/doctorView.html",
    controller: "DoctorCtrl"
  })
  .when("/doctor/:doctor_id", {
    templateUrl: "../partials/patientList.html",
    controller: "PatientCtrl"
  });
});

