
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

  console.log("helo");

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


