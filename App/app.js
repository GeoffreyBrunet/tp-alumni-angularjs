angular
    .module("module.portfolio")
    .directive("portfolio", function(){
        return {
            templateUrl: "portfolio/portfolio.template.html",
        };
    });

angular
    .module("module.navbar")
    .directive("alumni.navbar", function(){
        return {
            templateUrl: "navbar/alumni.navbar.template.html",
        };
    });

angular
    .module("module.footer")
    .directive("alumni.footer", function(){
        return {
            templateUrl: "footer/alumni.footer.template.html",
        };
    });