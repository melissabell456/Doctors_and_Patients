"use strict"; 

angular.module("DoctorApp").factory("PatientFctry", function ($scope, $routeParams, PatientFctry) {

  console.log($routeParams);

  PatientFctry.getPatients()
  .then( (patientData) => {
    console.log("you got it", patientData);
  });

});