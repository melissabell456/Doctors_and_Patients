"use strict";

angular.module("DoctorApp").controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {
  
    PatientFctry.getPatients()
    .then( (patientData) => {
      $scope.drsPatients = [];
      for(let patient in patientData) {
        let patientsDr = patientData[patient].doctor_id;
        if (patientsDr === $routeParams.doctor_id) {
          $scope.drsPatients.push(patientData[patient]);
        }
      }
    });
  
  });