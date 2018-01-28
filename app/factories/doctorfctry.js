"use strict";

angular.module("DoctorApp").factory("DoctorFctry", function ($q, $http) {

  const getDoctorStats = () => {
    return $q( (resolve, reject) => {
      $http
      .get("https://fir-a5a79.firebaseio.com/doctors.json")
      .then( (doctorData) => {
        console.log(doctorData.data);
        resolve(doctorData);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
    });
  };
  return { getDoctorStats };
});