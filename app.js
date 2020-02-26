var app = angular.module("tinaApp", ["ngRoute"]) //modulen heter tinaApp och använder ngRoute

// ROUTERN
// Hur routern ska presentera controllern
app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/start.html",
        controller: "trendingController", 
        //controller: "startController", 
    })
    .when("/veckomatsedel", {
        templateUrl: "views/veckomatsedel.html",
        controller: "veckanController",
    })
    .when("/drickbart", {
        templateUrl: "views/drickbart.html",
        controller: "drickbartController",
    })
    .when("/omoss", {
        templateUrl: "views/omoss.html",
        controller: "omossController",
    })
    .when("/kontakt", {
        templateUrl: "views/kontakt.html",
        //controller: "kontaktController",
        controller: "personController",
    })
})




//routescope är för hela hemsidan
//scope är en del

//Routescope
app.run(function($rootScope) {
    $rootScope.testRubbe = 'Phasellus nibh dolor  facilisis i dapibus uto sollicitudin et odio cras';
  });
  app.run(function($rootScope) {
    $rootScope.testText1 = 'Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod tempor incididunt ut labore et dolore roipi magna aliqua. Ut enim ad minim veeniam, quis nostruklad exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in tufpoy voluptate velit esse cillum dolore eu fugiat nulla parieratur. Excepteur sint.';
  });
  app.run(function($rootScope) {
    $rootScope.testText2 = 'Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptartem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ropeior.';
  });
  app.run(function($rootScope) {
    $rootScope.testText3 = 'Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptartem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ropeior architecto beatae vitae dicta sunt explicabo.Culpa qui officia deserunt mollit anim id est laborum.';
  });
  app.run(function($rootScope) {
    $rootScope.testText4 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptartem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ropeior architecto beatae vitae dicta sunt explicabo.';
  });


//CONTROLLERS
// Trending ng-repeat - Controller
app.controller("trendingController", function($scope) {
    $scope.trending = [
        { image: "beetroots.jpg", title: "Dolore magna aliqua", text: "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.", time: "30", ingredients: "5" },
        { image: "smoothie.jpg", title: "Dolore magna aliqua", text: "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.", time: "75", ingredients: "8"   },
        { image: "bread.jpg", title: "Dolore magna aliqua", text: "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat. Lipsum labitur lucilius mel.", time: "50", ingredients: "11"   },
    ]
    $scope.pageTitle = "Trending";
})
// PageTitle - Controllers
// app.controller("startController", function($scope) {
//     $scope.pageTitle = "Trending";
// })
.controller("veckanController", function($scope) {
    $scope.pageTitle = "Veckomatsedel";
})
.controller("drickbartController", function($scope) {
    $scope.pageTitle = "Drickbart";
})
.controller("omossController", function($scope) {
    $scope.pageTitle = "Om oss";
})
// .controller("kontaktController", function($scope) {
//     $scope.pageTitle = "Kontakt";
// })

// Two-way-binding
.controller("personController", function($scope) {
    $scope.person = {
        firstName: "Kalle",
        lastName: "Kula",
        email: "kalle@mail.se",
        message: "Skriv gärna ett meddelande"
    };
    $scope.pageTitle = "Kontakt";
})

// DIRECTIVES = Partial Views
app.directive("appheader", function() {
    return {
        template: '<header> <nav class="navbar navbar-expand-lg navbar-dark navColor fixed-top"> <div class="container"> <a class="navbar-brand" href="#"><img src="images/foodie_logo.png" alt="" height="80px"></a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse text-right" id="navbarNav"> <ul class="navbar-nav ml-auto flex-nowrap"> <li class="nav-item active"><a class="nav-link" href="#/!">Startsida <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="#!veckomatsedel">Veckomatsedel</a></li><li class="nav-item"><a class="nav-link" href="#!drickbart">Drickbart</a> </li><li class="nav-item"><a class="nav-link" href="#!omoss">Om oss</a> </li><li class="nav-item"><a class="nav-link" href="#!kontakt">Kontakt</a> </li></ul> </div></div></nav> </header>'
    }
})
app.directive("appfooter", function() {
    return {
        template: '<footer class="footer"> <div class="container footWrap "> <div class=""><a href="#"><img src="images/foodie_logo.png" alt="" height="73px"></a></div><div class="">Stora Gatan 13, Eskilstuna<br>+46 70 123 456 78<br><a href="#">hej@foodie.se</a></div><div id="newsletter" class="">Anmäl dig till vårat Nyhetsbrev <div> <form> <input type="text" id="inputEmail" placeholder="E-post"> <button id="btnEmail" type="submit">OK</button> </form> </div></div><div class="socials "> <a href="#"> <div class="fb"><i class="fab fa-facebook-f"></i> <div class="fbTxt">Facebook</div></div></a> <a href="#"> <div class="insta"><i class="fab fa-instagram"></i> <div class="instaTxt">Instagram</div></div></a> </div></div></footer>'
    }
})