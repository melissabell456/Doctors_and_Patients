"use strict"; 

angular.module("DoctorApp").factory("PatientFctry", function ($q, $http) {
  
    const getPatients = (doctorID) => {
      return $q( (resolve, reject) => {
        $http
        .get(`https://fir-a5a79.firebaseio.com/patients.json?orderBy="doctor_id"&equalTo="${doctorID}"`)
        .then( (patientData) => {
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
