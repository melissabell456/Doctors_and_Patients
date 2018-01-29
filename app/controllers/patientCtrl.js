"use strict";

angular.module("DoctorApp").controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {
  
    console.log($routeParams);
  
    PatientFctry.getPatients()
    .then( (patientData) => {
      console.log("you got it", patientData);
    });
  
  });