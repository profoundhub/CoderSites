"use strict";
angular.module("ziplineFcc2App", ["ngCookies", "ngResource", "ngSanitize", "ngRoute", "ui.bootstrap", "angularUtils.directives.dirPagination"]).config(["$routeProvider", "$locationProvider", function(a, b) {
  a.otherwise({
    redirectTo: "/"
  }), b.html5Mode(!0)
}]), angular.module("ziplineFcc2App").controller("MainCtrl", ["$scope", "$http", function(a, b) {
  a.awesomeThings = [], b.get("/api/things").success(function(b) {
    a.awesomePens = b
  }), a.addThing = function() {
    "" !== a.newThing && (b.post("/api/things", {
      name: a.newThing
    }), a.newThing = "")
  }, a.deleteThing = function(a) {
    b["delete"]("/api/things/" + a._id)
  }
}]), angular.module("ziplineFcc2App").config(["$routeProvider", function(a) {
  a.when("/", {
    templateUrl: "app/main/main.html",
    controller: "MainCtrl"
  })
}]), angular.module("ziplineFcc2App").controller("PenCtrl", ["$scope", "$http", function(a, b) {
  a.message = "Hello", a.awesomePens = [], a.awesomeTags = [], a.sort = function(b) {
    a.sortKey = b, a.reverse = !a.reverse
  }, b.get("/api/pens").success(function(b) {
    a.awesomePens = b[0], a.awesomeTags = b[1]
  })
}]), angular.module("ziplineFcc2App").config(["$routeProvider", function(a) {
  a.when("/pen", {
    templateUrl: "app/pen/pen.html",
    controller: "PenCtrl"
  })
}]), angular.module("ziplineFcc2App").filter("penTags", [function(a) {
  return function(a) {
    return "penTags filter: " + a
  }
}]), angular.module("ziplineFcc2App").controller("UpdatedbCtrl", ["$scope", "$http", function(a, b) {
  a.message = "Hello", b.get("/api/updatedb").then(function(a) {
    console.log(a)
  })
}]), angular.module("ziplineFcc2App").config(["$routeProvider", function(a) {
  a.when("/updatedb", {
    templateUrl: "app/updatedb/updatedb.html",
    controller: "UpdatedbCtrl"
  })
}]), angular.module("ziplineFcc2App").factory("Modal", ["$rootScope", "$modal", function(a, b) {
  function c(c, d) {
    var e = a.$new();
    return c = c || {}, d = d || "modal-default", angular.extend(e, c), b.open({
      templateUrl: "components/modal/modal.html",
      windowClass: d,
      scope: e
    })
  }
  return {
    confirm: {
      "delete": function(a) {
        return a = a || angular.noop,
          function() {
            var b, d = Array.prototype.slice.call(arguments),
              e = d.shift();
            b = c({
              modal: {
                dismissable: !0,
                title: "Confirm Delete",
                html: "<p>Are you sure you want to delete <strong>" + e + "</strong> ?</p>",
                buttons: [{
                  classes: "btn-danger",
                  text: "Delete",
                  click: function(a) {
                    b.close(a)
                  }
                }, {
                  classes: "btn-default",
                  text: "Cancel",
                  click: function(a) {
                    b.dismiss(a)
                  }
                }]
              }
            }, "modal-danger"), b.result.then(function(b) {
              a.apply(b, d)
            })
          }
      }
    }
  }
}]), angular.module("ziplineFcc2App").controller("NavbarCtrl", ["$scope", "$location", function(a, b) {
  a.menu = [{
    title: "Home",
    link: "/"
  }, {
    title: "Pen Index",
    link: "/pen"
  }], a.isCollapsed = !0, a.isActive = function(a) {
    return a === b.path()
  }
}]), angular.module("ziplineFcc2App").run(["$templateCache", function(a) {
  a.put("app/main/main.html", '<div ng-include="\'components/navbar/navbar.html\'"></div><header class=hero-unit id=banner><div class=container><h1>FreeCodeCamp\'s codepens</h1><p class=lead>A re-indexed list of some pens for easy search!</p></div></header><div class=container><div class=row><div class=col-lg-12><h2 class=page-header>Features:</h2><ul class="nav-tabs nav-stacked"><li>A list of more than 2000 pens (more planned...)</li><li>A powerful search tool to easily filtering pens and do your benchmark!</li><li>You can sort by relevant columns</li><li>Implemented in MEAN stack (by 18-11-2015 still the recommended stack for basejumps at FCC)</li><br></ul></div></div></div><div class=btt><a href=/pen class="btn-lg btn-info" role=button>Check out!</a></div><footer class=footer><div class=container><p>made with Angular Fullstack v2.1.1 generator | <a href=https://twitter.com/ecccs_fcc>@evaristoc</a> | thanks to <a href="http://codepen.io/">codepen.io</a></p></div></footer>'), a.put("app/pen/pen.html", '<div ng-include="\'components/navbar/navbar1.html\'"></div><div class=col-md-12><div class=container><div class=row><div class=col-lg-12><h1 class=page-header>PENS INDEX</h1><form><div class=form-group><label>General Search</label><input style=width:300px ng-model=search class=form-control placeholder=Search></div></form><table class="table table-striped table-bordered"><tr><th ng-click="sort(\'owner\')"><p>owner</p><p><span class="glyphicon sort-icon" ng-show="sortKey==\'owner\'" ng-class="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span></p></th><th>pen</th><th>title</th><th ng-click="sort(\'views\')"><p>views</p><p><span class="glyphicon sort-icon" ng-show="sortKey==\'views\'" ng-class="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span></p></th><th ng-click="sort(\'comments\')"><p>comments</p><p><span class="glyphicon sort-icon" ng-show="sortKey==\'comments\'" ng-class="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span></p></th><th ng-click="sort(\'hearts\')"><p>hearts</p><p><span class="glyphicon sort-icon" ng-show="sortKey==\'hearts\'" ng-class="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span></p></th><th ng-click="sort(\'created\')"><p>created</p><p><span class="glyphicon sort-icon" ng-show="sortKey==\'created\'" ng-class="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span></p></th><th ng-click="sort(\'modified\')"><p>modified</p><p><span class="glyphicon sort-icon" ng-show="sortKey==\'modified\'" ng-class="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span></p></th><th>tags</th></tr><!--<tr class="allpens" ng-repeat="pen in awesomePens|orderBy:sortKey:reverse|filter:search">--><tr class=allpens dir-paginate="pen in awesomePens|orderBy:sortKey:reverse|filter:search|itemsPerPage:5">-<td>{{pen.owner}}</td><td><a href={{pen.uri}} target=_blank><span class=user-name>{{pen.uri}}</span></a></td><td class=count><strong>{{pen.title}}</strong></td><!--<td class="count">\n<ul ng-repeat=\'tg._id in awesomeTags | filter: {{pen.tags}}\'>\n    <li>text</li>\n</ul>--><td class=count>{{pen.views}}</td><td class=count>{{pen.comments}}</td><td class=count>{{pen.hearts}}</td><!--http://www.angulartutorial.net/2014/04/date-filtering-and-formatting-in.html--><!--http://stackoverflow.com/questions/22392328/how-to-format-date-in-angularjs--><td class=count>{{pen.created | date:\'dd-MM-yyyy\'}}</td><td class=count>{{pen.modified | date:\'dd-MM-yyyy\'}}</td><!--http://stackoverflow.com/questions/20942878/angularjs-use-a-function-in-a-controller-to-return-data-from-a-service-to-be-use--><td class=count><!--http://stackoverflow.com/questions/8289805/getting-rid-of-bullet-points-from-ul--><!--<div ng-repeat="tag in findTgs(pen.tags)">--><!--<p>{{tag.tag}}</p> --><div ng-repeat="tag in pen.tags|orderBy:tag"><p>{{tag}}</p></div></td><!--<td class="refresh"><button class="btn btn-default" ng-click="refreshUser(camper.username)"><i class="glyphicon glyphicon-refresh"></i></button></td>\n</tr>--></tr></table><dir-pagination-controls max-size=5 direction-links=true boundary-links=true></dir-pagination-controls><!--<ul class="nav nav-tabs nav-stacked col-md-4 col-lg-4 col-sm-6" ng-repeat="">\n\n<li><a href="#" tooltip="{{thing.info}}">{{thing.name}}</a></li>\n</ul>--></div></div></div></div>'), a.put("app/updatedb/updatedb.html", "<div class=col-md-12>This is the updatedb view.</div>"), a.put("components/modal/modal.html", '<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat="button in modal.buttons" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>'), a.put("components/navbar/navbar.html", '<div class="navbar navbar-default navbar-static-top" ng-controller=NavbarCtrl><div class=container><div class=navbar-header><button class=navbar-toggle type=button ng-click="isCollapsed = !isCollapsed"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href="/" class=navbar-brand>zipline-fcc2</a></div><div collapse=isCollapsed class="navbar-collapse collapse" id=navbar-main><ul class="nav navbar-nav"><li ng-repeat="item in menu" ng-class="{active: isActive(item.link)}"><a ng-href={{item.link}}>{{item.title}}</a></li></ul></div></div></div>'), a.put("components/navbar/navbar1.html", '<div class="navbar navbar-default navbar-static-top" ng-controller=NavbarCtrl><div class=container><div class=navbar-header><button class=navbar-toggle type=button ng-click="isCollapsed = !isCollapsed"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href="/" class=navbar-brand>zipline-fcc2</a></div><div collapse=isCollapsed class="navbar-collapse collapse" id=navbar-main><ul class="nav navbar-nav"><li ng-repeat="item in menu" ng-class="{active: isActive(item.link)}"><a ng-if=Home ng-href={{item.link}}>{{item.title}}</a></li></ul></div></div></div>')
}]);