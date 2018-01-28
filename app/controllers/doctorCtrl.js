"use strict";

angular.module("DoctorApp").controller("DoctorCtrl", function ($scope, DoctorFctry) {

console.log("hello?");

  DoctorFctry.getDoctorStats()
  .then( (doctorData) => {
    console.log("I have the data", doctorData);
  });
  
});