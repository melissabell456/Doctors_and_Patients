"use strict";

angular.module("DoctorApp").controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {
  
  let selectedDr = $routeParams.doctor_id;
  // sending request to firebase using OrderBy doctor_id to return only patient data of the selected doctor
  PatientFctry.getPatients(selectedDr)
    .then( (patientData) => {
      $scope.drsPatients = patientData;
    });

  });