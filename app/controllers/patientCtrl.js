"use strict";

angular.module("DoctorApp").controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {
  
  let selectedDr = $routeParams.doctor_id;

  PatientFctry.getPatients()
  .then( (patientData) => {
    // declaring empty array to collect selected doctor's patients for display in DOM
    $scope.drsPatients = [];
    // checking for selected doctor's patients
    for(let patient in patientData) {
      let patientsDr = patientData[patient].doctor_id;
      if (patientsDr === selectedDr) {
        $scope.drsPatients.push(patientData[patient]);
      }
    }
  });

  });