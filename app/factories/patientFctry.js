"use strict"; 

angular.module("DoctorApp").factory("PatientFctry", function ($q, $http) {
  
    const getPatients = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/patients.json")
        .then( (patientData) => {
          console.log(patientData.data);
          resolve(patientData.data);
        })
        .catch( (err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getPatients };
  });