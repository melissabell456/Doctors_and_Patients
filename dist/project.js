
//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";



}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";



}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    // const getDoctorStats = () => {
    //   return $q( (resolve, reject) => {
    //     $http
    //     .get("")
    //   })
    // }
    // return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    // const getDoctorStats = () => {
    //   return $q( (resolve, reject) => {
    //     $http
    //     .get("")
    //   })
    // }
    // return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("./", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    // const getDoctorStats = () => {
    //   return $q( (resolve, reject) => {
    //     $http
    //     .get("")
    //   })
    // }
    // return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("./", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    // const getDoctorStats = () => {
    //   return $q( (resolve, reject) => {
    //     $http
    //     .get("")
    //   })
    // }
    // return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("./", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    // const getDoctorStats = () => {
    //   return $q( (resolve, reject) => {
    //     $http
    //     .get("")
    //   })
    // }
    // return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("./", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("../../data/doctors.json")
        .then( (doctorData) => {
          console.log(doctorData);
          resolve(doctorData);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("./", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      console.log("I have the data", doctorData);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("../../data/doctors.json")
        .then( (doctorData) => {
          console.log(doctorData);
          resolve(doctorData);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";


  module
  .config($routeProvider => {
    $routeProvider
    .when("./", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

  console.log("hello?");

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      console.log("I have the data", doctorData);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("../../data/doctors.json")
        .then( (doctorData) => {
          console.log(doctorData);
          resolve(doctorData);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("./", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

  console.log("hello?");

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      console.log("I have the data", doctorData);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("../../data/doctors.json")
        .then( (doctorData) => {
          console.log(doctorData);
          resolve(doctorData);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("./", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

  console.log("hello?");

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      console.log("I have the data", doctorData);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("../../data/doctors.json")
        .then( (doctorData) => {
          console.log(doctorData);
          resolve(doctorData);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

  console.log("hello?");

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      console.log("I have the data", doctorData);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("../../data/doctors.json")
        .then( (doctorData) => {
          console.log(doctorData);
          resolve(doctorData);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

  console.log("hello?");

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      console.log("I have the data", doctorData);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("../../data/doctors.json")
        .then( (doctorData) => {
          console.log(doctorData);
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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

  console.log("hello?");

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      console.log("I have the data", doctorData);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("../../data/doctors.json")
        .then( (doctorData) => {
          console.log(doctorData);
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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

  console.log("hello?");

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      console.log("I have the data", doctorData);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("../../data/doctors.json")
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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

  console.log("hello?");

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      console.log("I have the data", doctorData);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors_and_patients")
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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

  console.log("hello?");

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      console.log("I have the data", doctorData);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors_and_patients.json")
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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

  console.log("hello?");

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      console.log("I have the data", doctorData);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

  console.log("hello?");

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      console.log(doctorData);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

  console.log("hello?");

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      console.log(doctorData);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      // console.log(doctorData);
      for (let doctor in doctorData) {
        console.log(doctor);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      // console.log(doctorData);
      for (let doctor in doctorData) {
        console.log({doctor});
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      // console.log(doctorData);
      for (let doctor in doctorData) {
        console.log(doctor.first_name);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      // console.log(doctorData);
      for (let doctor in doctorData) {
        console.log(doctor);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      // console.log(doctorData);
      for (let doctor in doctorData) {
        console.log(doctorData.doctor);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      // console.log(doctorData);
      for (let doctor in doctorData) {
        console.log(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      // console.log(doctorData);
      $scope.drArr = [];
      for (let doctor in doctorData) {
        // console.log(doctorData[doctor]);
        $scope.drArr.push(doctorData[doctor]);
      }
      console.log($scope.drArr);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      // console.log(doctorData);
      $scope.drArr = [];
      for (let doctor in doctorData) {
        // console.log(doctorData[doctor]);
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
      console.log($scope.drArr);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctors/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorfctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctors/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctors/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($q, $http) {

    const getPatients = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/patients.json")
        .then( (patientData) => {
          console.log(patientData.data);
          resolve(patientData.data);
        })
        .catch( (err) => {
          reject(err);
        });
      });
    };
    return { getPatients };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($scope, $routeParam, PatientFctry) {


  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctors/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($q, $http) {

    const getPatients = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/patients.json")
        .then( (patientData) => {
          console.log(patientData.data);
          resolve(patientData.data);
        })
        .catch( (err) => {
          reject(err);
        });
      });
    };
    return { getPatients };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($scope, $routeParams, PatientFctry) {

    console.log($routeParams);

    PatientFctry.getPatients()
    .then( (patientData) => {
      console.log("you got it", patientData);
    });

  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($q, $http) {

    const getPatients = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/patients.json")
        .then( (patientData) => {
          console.log(patientData.data);
          resolve(patientData.data);
        })
        .catch( (err) => {
          reject(err);
        });
      });
    };
    return { getPatients };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($scope, $routeParams, PatientFctry) {

    console.log($routeParams);

    PatientFctry.getPatients()
    .then( (patientData) => {
      console.log("you got it", patientData);
    });

  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($q, $http) {

    const getPatients = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/patients.json")
        .then( (patientData) => {
          console.log(patientData.data);
          resolve(patientData.data);
        })
        .catch( (err) => {
          reject(err);
        });
      });
    };
    return { getPatients };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($scope, $routeParams, PatientFctry) {

    console.log($routeParams);

    PatientFctry.getPatients()
    .then( (patientData) => {
      console.log("you got it", patientData);
    });

  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("#!/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($q, $http) {

    const getPatients = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/patients.json")
        .then( (patientData) => {
          console.log(patientData.data);
          resolve(patientData.data);
        })
        .catch( (err) => {
          reject(err);
        });
      });
    };
    return { getPatients };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($scope, $routeParams, PatientFctry) {

    console.log($routeParams);

    PatientFctry.getPatients()
    .then( (patientData) => {
      console.log("you got it", patientData);
    });

  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($q, $http) {

    const getPatients = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/patients.json")
        .then( (patientData) => {
          console.log(patientData.data);
          resolve(patientData.data);
        })
        .catch( (err) => {
          reject(err);
        });
      });
    };
    return { getPatients };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($scope, $routeParams, PatientFctry) {

    console.log($routeParams);

    PatientFctry.getPatients()
    .then( (patientData) => {
      console.log("you got it", patientData);
    });

  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("#!/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($q, $http) {

    const getPatients = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/patients.json")
        .then( (patientData) => {
          console.log(patientData.data);
          resolve(patientData.data);
        })
        .catch( (err) => {
          reject(err);
        });
      });
    };
    return { getPatients };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($scope, $routeParams, PatientFctry) {

    console.log($routeParams);

    PatientFctry.getPatients()
    .then( (patientData) => {
      console.log("you got it", patientData);
    });

  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("#!/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($q, $http) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($scope, $routeParams, PatientFctry) {

    console.log($routeParams);

    PatientFctry.getPatients()
    .then( (patientData) => {
      console.log("you got it", patientData);
    });

  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($q, $http) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($scope, $routeParams, PatientFctry) {

    console.log($routeParams);

    PatientFctry.getPatients()
    .then( (patientData) => {
      console.log("you got it", patientData);
    });

  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($q, $http) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($scope, $routeParams, PatientFctry) {

    console.log($routeParams);

    PatientFctry.getPatients()
    .then( (patientData) => {
      console.log("you got it", patientData);
    });

  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctorid", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($q, $http) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($scope, $routeParams, PatientFctry) {

    console.log($routeParams);

    PatientFctry.getPatients()
    .then( (patientData) => {
      console.log("you got it", patientData);
    });

  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($q, $http) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($scope, $routeParams, PatientFctry) {

    console.log($routeParams);

    PatientFctry.getPatients()
    .then( (patientData) => {
      console.log("you got it", patientData);
    });

  });

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      console.log($routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        console.log("you got it", patientData);
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      console.log($routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        console.log("you got it", patientData);
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      console.log($routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        console.log("you got it", patientData);
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      console.log('routeParam', $routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      console.log('routeParam', $routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        $scope.drsPatients = patientData.filter( (patient) => {
          return patient.doctor_id === $routeParams.doctor_id;
        });
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      console.log('routeParam', $routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        $scope.drsPatients = patientData.filter( (patient) => {
          return patient.doctor_id === $routeParams.doctor_id;
        });
        console.log($scope.drsPatients);
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      // console.log('routeParam', $routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        $scope.drsPatients = [];
        for(let patient in patientData) {
          console.log(patient);
        }
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      // console.log('routeParam', $routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        $scope.drsPatients = [];
        for(let patient in patientData) {
          console.log(patientData.patient);
        }
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      // console.log('routeParam', $routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        $scope.drsPatients = [];
        for(let patient in patientData) {
          console.log(patientData[patient]);
        }
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      // console.log('routeParam', $routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        $scope.drsPatients = [];
        for(let patient in patientData) {
          console.log(patientData[patient]);
          $scope.drsPatients.push(patientData[patient].doctor_id === $routeParams.doctor_id);
        }
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      // console.log('routeParam', $routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        $scope.drsPatients = [];
        for(let patient in patientData) {
          console.log(patientData[patient]);
          $scope.drsPatients.push(patientData[patient].doctor_id === $routeParams.doctor_id);
        }
        console.log($scope.drsPatients);
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      // console.log('routeParam', $routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        $scope.drsPatients = [];
        for(let patient in patientData) {
          let patientsDr = patientData[patient].doctor_id;
          if (patientsDr === +$routeParams.doctor_id) {
            $scope.drsPatients.push(patientData[patient]);
          }
        }
        console.log($scope.drsPatients);
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      // console.log('routeParam', $routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        $scope.drsPatients = [];
        for(let patient in patientData) {
          let patientsDr = patientData[patient].doctor_id;
          if (patientsDr === +$routeParams.doctor_id) {
            $scope.drsPatients.push(patientData[patient]);
          }
          console.log($scope.drsPatients);
        }
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      // console.log('routeParam', $routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        $scope.drsPatients = [];
        for(let patient in patientData) {
          let patientsDr = +patientData[patient].doctor_id;
          if (patientsDr === +$routeParams.doctor_id) {
            console.log("Matched", patientData[patient]);
            $scope.drsPatients.push(patientData[patient]);
          }
          console.log($scope.drsPatients);
        }
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      // console.log('routeParam', $routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        $scope.drsPatients = [];
        for(let patient in patientData) {
          let patientsDr = +patientData[patient].doctor_id;
          console.log(patientsDr, "patients dr id");
          if (patientsDr === +$routeParams.doctor_id) {
            console.log("Matched", patientData[patient]);
            $scope.drsPatients.push(patientData[patient]);
          }
          console.log($scope.drsPatients);
        }
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      // console.log('routeParam', $routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        $scope.drsPatients = [];
        for(let patient in patientData) {
          let patientsDr = patientData[patient].doctor_id;
          console.log(patientsDr, "patients dr id");
          if (patientsDr === +$routeParams.doctor_id) {
            console.log("Matched", patientData[patient]);
            $scope.drsPatients.push(patientData[patient]);
          }
          console.log($scope.drsPatients);
        }
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      // console.log('routeParam', $routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        $scope.drsPatients = [];
        for(let patient in patientData) {
          let patientsDr = patientData[patient].doctor_id;
          console.log(patientsDr, "patients dr id");
          if (patientsDr === $routeParams.doctor_id) {
            console.log("Matched", patientData[patient]);
            $scope.drsPatients.push(patientData[patient]);
          }
          console.log($scope.drsPatients);
        }
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

      // console.log('routeParam', $routeParams);

      PatientFctry.getPatients()
      .then( (patientData) => {
        $scope.drsPatients = [];
        for(let patient in patientData) {
          let patientsDr = patientData[patient].doctor_id;
          // console.log(patientsDr, "patients dr id");
          if (patientsDr === $routeParams.doctor_id) {
            console.log("Matched", patientData[patient]);
            $scope.drsPatients.push(patientData[patient]);
          }
          console.log($scope.drsPatients);
        }
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    PatientFctry.getPatients()
    .then( (patientData) => {
      // declaring empty array to collect selected doctor's patients for display in DOM
      $scope.drsPatients = [];
      // checking for patients with selected doctor
      for(let patient in patientData) {
        let patientsDr = patientData[patient].doctor_id;
        if (patientsDr === selectedDr) {
          $scope.drsPatients.push(patientData[patient]);
        }
      }
    });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

      const getPatients = () => {
        return $q( (resolve, reject) => {
          $http
          .get("https://fir-a5a79.firebaseio.com/patients.json")
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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

      const getPatients = () => {
        return $q( (resolve, reject) => {
          $http
          .get("https://fir-a5a79.firebaseio.com/patients.json")
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

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

      const getPatients = (doctorID) => {
        return $q( (resolve, reject) => {
          $http
          .get(`https://fir-a5a79.firebaseio.com/patients.json?orderBy="`)
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

    //  `${dbURL}.json?orderBy="uid"&equalTo="${uid}

}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

      const getPatients = (doctorID) => {
        return $q( (resolve, reject) => {
          $http
          .get(`https://fir-a5a79.firebaseio.com/patients.json?orderBy="doctor_id"&equalTo="${doctorID}`)
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


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    $scope.drsPatients = PatientFctry.getPatients(selectedDr);
    // .then( (patientData) => {
    //   // declaring empty array to collect selected doctor's patients for display in DOM
    //   $scope.drsPatients = [];
    //   // checking for selected doctor's patients
    //   for(let patient in patientData) {
    //     let patientsDr = patientData[patient].doctor_id;
    //     if (patientsDr === selectedDr) {
    //       $scope.drsPatients.push(patientData[patient]);
    //     }
    //   }
    // });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

      const getPatients = (doctorID) => {
        return $q( (resolve, reject) => {
          $http
          .get(`https://fir-a5a79.firebaseio.com/patients.json?orderBy="doctor_id"&equalTo="${doctorID}`)
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


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    $scope.drsPatients = PatientFctry.getPatients(selectedDr);
    // .then( (patientData) => {
    //   // declaring empty array to collect selected doctor's patients for display in DOM
    //   $scope.drsPatients = [];
    //   // checking for selected doctor's patients
    //   for(let patient in patientData) {
    //     let patientsDr = patientData[patient].doctor_id;
    //     if (patientsDr === selectedDr) {
    //       $scope.drsPatients.push(patientData[patient]);
    //     }
    //   }
    // });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    $scope.drsPatients = PatientFctry.getPatients(selectedDr);
    console.log($scope.drsPatients);
    // .then( (patientData) => {
    //   // declaring empty array to collect selected doctor's patients for display in DOM
    //   $scope.drsPatients = [];
    //   // checking for selected doctor's patients
    //   for(let patient in patientData) {
    //     let patientsDr = patientData[patient].doctor_id;
    //     if (patientsDr === selectedDr) {
    //       $scope.drsPatients.push(patientData[patient]);
    //     }
    //   }
    // });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    $scope.drsPatients = PatientFctry.getPatients(selectedDr);
    console.log($scope.drsPatients);
    // .then( (patientData) => {
    //   // declaring empty array to collect selected doctor's patients for display in DOM
    //   $scope.drsPatients = [];
    //   // checking for selected doctor's patients
    //   for(let patient in patientData) {
    //     let patientsDr = patientData[patient].doctor_id;
    //     if (patientsDr === selectedDr) {
    //       $scope.drsPatients.push(patientData[patient]);
    //     }
    //   }
    // });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

      const getPatients = (doctorID) => {
        return $q( (resolve, reject) => {
          $http
          .get(`https://fir-a5a79.firebaseio.com/patients.json?orderBy="doctor_id"&equalTo="${doctorID}"`)
          .then( (patientData) => {
            resolve(patientData);
          })
          .catch( (err) => {
            console.log(err);
            reject(err);
          });
        });
      };
      return { getPatients };
    });


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    $scope.drsPatients = PatientFctry.getPatients(selectedDr);
    console.log($scope.drsPatients);
    // .then( (patientData) => {
    //   // declaring empty array to collect selected doctor's patients for display in DOM
    //   $scope.drsPatients = [];
    //   // checking for selected doctor's patients
    //   for(let patient in patientData) {
    //     let patientsDr = patientData[patient].doctor_id;
    //     if (patientsDr === selectedDr) {
    //       $scope.drsPatients.push(patientData[patient]);
    //     }
    //   }
    // });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    $scope.drsPatients = PatientFctry.getPatients(selectedDr);
    console.log($scope.drsPatients);
    // .then( (patientData) => {
    //   // declaring empty array to collect selected doctor's patients for display in DOM
    //   $scope.drsPatients = [];
    //   // checking for selected doctor's patients
    //   for(let patient in patientData) {
    //     let patientsDr = patientData[patient].doctor_id;
    //     if (patientsDr === selectedDr) {
    //       $scope.drsPatients.push(patientData[patient]);
    //     }
    //   }
    // });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

      const getPatients = (doctorID) => {
        return $q( (resolve, reject) => {
          $http
          .get(`https://fir-a5a79.firebaseio.com/patients.json?orderBy="doctor_id"&equalTo="${doctorID}"`)
          .then( (patientData) => {
            resolve(patientData.data.value);
          })
          .catch( (err) => {
            console.log(err);
            reject(err);
          });
        });
      };
      return { getPatients };
    });


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    $scope.drsPatients = PatientFctry.getPatients(selectedDr);
    console.log($scope.drsPatients);
    // .then( (patientData) => {
    //   // declaring empty array to collect selected doctor's patients for display in DOM
    //   $scope.drsPatients = [];
    //   // checking for selected doctor's patients
    //   for(let patient in patientData) {
    //     let patientsDr = patientData[patient].doctor_id;
    //     if (patientsDr === selectedDr) {
    //       $scope.drsPatients.push(patientData[patient]);
    //     }
    //   }
    // });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    $scope.drsPatients = PatientFctry.getPatients(selectedDr);
    console.log($scope.drsPatients);
    // .then( (patientData) => {
    //   // declaring empty array to collect selected doctor's patients for display in DOM
    //   $scope.drsPatients = [];
    //   // checking for selected doctor's patients
    //   for(let patient in patientData) {
    //     let patientsDr = patientData[patient].doctor_id;
    //     if (patientsDr === selectedDr) {
    //       $scope.drsPatients.push(patientData[patient]);
    //     }
    //   }
    // });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    $scope.drsPatients = PatientFctry.getPatients(selectedDr);
    console.log($scope.drsPatients);
    // .then( (patientData) => {
    //   // declaring empty array to collect selected doctor's patients for display in DOM
    //   $scope.drsPatients = [];
    //   // checking for selected doctor's patients
    //   for(let patient in patientData) {
    //     let patientsDr = patientData[patient].doctor_id;
    //     if (patientsDr === selectedDr) {
    //       $scope.drsPatients.push(patientData[patient]);
    //     }
    //   }
    // });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

      const getPatients = (doctorID) => {
        return $q( (resolve, reject) => {
          $http
          .get(`https://fir-a5a79.firebaseio.com/patients.json?orderBy="doctor_id"&equalTo="${doctorID}"`)
          .then( (patientData) => {
            resolve(patientData.data.value);
          })
          .catch( (err) => {
            console.log(err);
            reject(err);
          });
        });
      };
      return { getPatients };
    });


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    $scope.drsPatients = PatientFctry.getPatients(selectedDr);
    console.log($scope.drsPatients);
    // .then( (patientData) => {
    //   // declaring empty array to collect selected doctor's patients for display in DOM
    //   $scope.drsPatients = [];
    //   // checking for selected doctor's patients
    //   for(let patient in patientData) {
    //     let patientsDr = patientData[patient].doctor_id;
    //     if (patientsDr === selectedDr) {
    //       $scope.drsPatients.push(patientData[patient]);
    //     }
    //   }
    // });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

      const getPatients = (doctorID) => {
        return $q( (resolve, reject) => {
          $http
          .get(`https://fir-a5a79.firebaseio.com/patients.json?orderBy="doctor_id"&equalTo="${doctorID}"`)
          .then( (patientData) => {
            resolve(patientData.data.value );
          })
          .catch( (err) => {
            console.log(err);
            reject(err);
          });
        });
      };
      return { getPatients };
    });


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    $scope.drsPatients = PatientFctry.getPatients(selectedDr);
    console.log($scope.drsPatients);
    // .then( (patientData) => {
    //   // declaring empty array to collect selected doctor's patients for display in DOM
    //   $scope.drsPatients = [];
    //   // checking for selected doctor's patients
    //   for(let patient in patientData) {
    //     let patientsDr = patientData[patient].doctor_id;
    //     if (patientsDr === selectedDr) {
    //       $scope.drsPatients.push(patientData[patient]);
    //     }
    //   }
    // });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

      const getPatients = (doctorID) => {
        return $q( (resolve, reject) => {
          $http
          .get(`https://fir-a5a79.firebaseio.com/patients.json?orderBy="doctor_id"&equalTo="${doctorID}"`)
          .then( (patientData) => {
            resolve(patientData.data.value);
          })
          .catch( (err) => {
            console.log(err);
            reject(err);
          });
        });
      };
      return { getPatients };
    });


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    $scope.drsPatients = PatientFctry.getPatients(selectedDr);
    console.log($scope.drsPatients);
    // .then( (patientData) => {
    //   // declaring empty array to collect selected doctor's patients for display in DOM
    //   $scope.drsPatients = [];
    //   // checking for selected doctor's patients
    //   for(let patient in patientData) {
    //     let patientsDr = patientData[patient].doctor_id;
    //     if (patientsDr === selectedDr) {
    //       $scope.drsPatients.push(patientData[patient]);
    //     }
    //   }
    // });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    PatientFctry.getPatients(selectedDr)
      .then( (data) => {
        console.log(data);
        $scope.drsPatients = data;
      });
    // .then( (patientData) => {
    //   // declaring empty array to collect selected doctor's patients for display in DOM
    //   $scope.drsPatients = [];
    //   // checking for selected doctor's patients
    //   for(let patient in patientData) {
    //     let patientsDr = patientData[patient].doctor_id;
    //     if (patientsDr === selectedDr) {
    //       $scope.drsPatients.push(patientData[patient]);
    //     }
    //   }
    // });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    PatientFctry.getPatients(selectedDr)
      .then( (patientData) => {
        console.log(patientData);
        $scope.drsPatients = patientData;
      });
    // .then( (patientData) => {
    //   // declaring empty array to collect selected doctor's patients for display in DOM
    //   $scope.drsPatients = [];
    //   // checking for selected doctor's patients
    //   for(let patient in patientData) {
    //     let patientsDr = patientData[patient].doctor_id;
    //     if (patientsDr === selectedDr) {
    //       $scope.drsPatients.push(patientData[patient]);
    //     }
    //   }
    // });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    PatientFctry.getPatients(selectedDr)
      .then( (patientData) => {
        console.log(patientData);
        $scope.drsPatients = patientData;
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;

    PatientFctry.getPatients(selectedDr)
      .then( (patientData) => {
        $scope.drsPatients = patientData;
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;
    // sending request to firebase for patient data of the selected doctor
    PatientFctry.getPatients(selectedDr)
      .then( (patientData) => {
        $scope.drsPatients = patientData;
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;
    // sending request to firebase using OrderBy for patient data of the selected doctor
    PatientFctry.getPatients(selectedDr)
      .then( (patientData) => {
        $scope.drsPatients = patientData;
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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


}) (angular.module ('DoctorApp', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/doctors", {
      templateUrl: "../partials/doctorView.html",
      controller: "DoctorCtrl"
    })
    .when("/doctor/:doctor_id", {
      templateUrl: "../partials/patientList.html",
      controller: "PatientCtrl"
    });
  });


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("DoctorCtrl", function ($scope, DoctorFctry) {

    DoctorFctry.getDoctorStats()
    .then( (doctorData) => {
      $scope.drArr = [];
      // receives object of doctor objects from API, pushing each object to drArr for angular use in partial
      for (let doctor in doctorData) {
        // adding a property of doctor_id of each doctor for use in hyperlink
        doctorData[doctor].doctor_id = doctor;
        $scope.drArr.push(doctorData[doctor]);
      }
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/patientCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("PatientCtrl", function ($scope, $routeParams, PatientFctry) {

    let selectedDr = $routeParams.doctor_id;
    // sending request to firebase using OrderBy doctor_id to return only patient data of the selected doctor
    PatientFctry.getPatients(selectedDr)
      .then( (patientData) => {
        $scope.drsPatients = patientData;
      });

    });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/doctorFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("DoctorFctry", function ($q, $http) {

    const getDoctorStats = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://fir-a5a79.firebaseio.com/doctors.json")
        .then( (doctorData) => {
          resolve(doctorData.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    };
    return { getDoctorStats };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/patientFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict"; 

  module.factory("PatientFctry", function ($q, $http) {

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


}) (angular.module ('DoctorApp', ['ngRoute']));


