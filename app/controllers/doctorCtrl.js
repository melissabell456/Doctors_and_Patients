"use strict";

angular.module("DoctorApp").controller("DoctorCtrl", function ($scope, DoctorFctry) {

  DoctorFctry.getDoctorStats()
  .then( (doctorData) => {
    $scope.drArr = [];
    // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
    for (let doctor in doctorData) {
      // adding a property of doctor_id of each doctor for use in hyperlink
      doctorData[doctor].doctor_id = doctor;
      $scope.drArr.push(doctorData[doctor]);
    }
    console.log($scope.drArr);
  });
  
});