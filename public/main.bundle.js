webpackJsonp([1,4],{

/***/ 105:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 105;


/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(117);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(190),
        styles: [__webpack_require__(180)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_firebase_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_addlisting_addlisting_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_editlisting_editlisting_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_listing_listing_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_listings_listings_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(47);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Froms


// Services

// Components








// Routes

// Firebase componets: module, auth, and methods

// Firebase Config
var firebaseConfig = {
    apiKey: 'AIzaSyCE3r-gpJlgbNHXB1_5HZWrzcqi7VT4hwc',
    authDomain: 'real-estate-listings-9c245.firebaseapp.com',
    databaseURL: 'https://real-estate-listings-9c245.firebaseio.com',
    storageBucket: 'real-estate-listings-9c245.appspot.com',
    messagingSenderId: '96434610756>'
};
// Firebase authentication
var myFirebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AuthProviders */].Google,
    method: __WEBPACK_IMPORTED_MODULE_14_angularfire2__["b" /* AuthMethods */].Popup // <-- Type of login (popup)
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_addlisting_addlisting_component__["a" /* AddListingComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_editlisting_editlisting_component__["a" /* EditListingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_listing_listing_component__["a" /* ListingComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_listings_listings_component__["a" /* ListingsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_14_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseConfig, myFirebaseAuthConfig),
            __WEBPACK_IMPORTED_MODULE_13__app_routing__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_firebase_service__["a" /* FirebaseService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_addlisting_addlisting_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_listing_listing_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_listings_listings_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_editlisting_editlisting_component__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
// Import Router modules

// Import components we want to route too





// Export to use
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot([
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'listings', component: __WEBPACK_IMPORTED_MODULE_4__components_listings_listings_component__["a" /* ListingsComponent */] },
    { path: 'listing/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_listing_listing_component__["a" /* ListingComponent */] },
    { path: 'addListing', component: __WEBPACK_IMPORTED_MODULE_1__components_addlisting_addlisting_component__["a" /* AddListingComponent */] },
    { path: 'editlisting/:id', component: __WEBPACK_IMPORTED_MODULE_5__components_editlisting_editlisting_component__["a" /* EditListingComponent */] }
]);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'login',
        template: __webpack_require__(196)
    })
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(af) {
        this.af = af;
        this.menuOpen = false;
    }
    NavbarComponent.prototype.menuToggle = function () {
        this.menuOpen = !this.menuOpen;
    };
    NavbarComponent.prototype.login = function () {
        this.af.auth.login();
    };
    NavbarComponent.prototype.logout = function () {
        this.af.auth.logout();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'navbar',
        template: __webpack_require__(197)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".back-button{\n  padding-top: 30px;\n}\n.add-listing-form{\n  width: 100%;\n  display: inline-block;\n  /*position: relative;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  transform: translate(-50%, -50%);*/\n}\nform{\n  padding: 20px 20px;\n}\n.form-control{\n  box-shadow: none;\n  background: none;\n  border: none;\n  border-bottom: 1px solid gray;\n  border-radius: 0px !important;\n}\n\n.form-control:focus{\n  border-bottom: 1px solid #4DD0E1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".back-button{\n  padding-top: 30px;\n}\n.add-listing-form{\n  display: inline-block;\n  width: 100%;\n  /*position: relative;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  transform: translate(-50%, -50%);*/\n}\nform{\n  padding: 20px 20px;\n}\n.form-control{\n  box-shadow: none;\n  background: none;\n  border: none;\n  border-bottom: 1px solid gray;\n  border-radius: 0px !important;\n}\n.form-control:focus{\n  border-bottom: 1px solid #4DD0E1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "/* L I S T I N G   P A G E */\n.detail-top{\n  padding-top: 15px;\n}\nimg{\n  width: 100%;\n}\n.edit-button,\n.delete-button{\n  width:100%;\n}\n.edit-button{\n  margin-bottom: 10px;\n}\n.no-padding-margin{\n  margin:0px;\n  padding:0px;\n}\n.edit-box{\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "/* L I S T I N G S  P A G E */\n.listings-title{\n  padding-bottom: 18px;\n}\n.listings-title h1{\n  display: inline-block;\n}\n.listings-title button{\n  float: right;\n  position: relative;\n  top: 25px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<div class=\"container add-listing\">\n  <div class=\"back-button\">\n    <button type=\"button\" name=\"button\" class=\"btn btn-primary\" [routerLink]='[\"/listings\"]'>Back</button>\n  </div>\n  <div class=\"col-md-offset-2 col-md-8\">\n    <div class=\"thumbnail add-listing-form\">\n      <div class=\"col-md-12\">\n        <h1>Add Property</h1>\n      </div>\n      <form class=\"col-md-12\" [formGroup]=\"form\" (submit)=\"submitForm()\">\n        <div class=\"form-group col-md-12\">\n          <input type=\"text\" name=\"title\" placeholder=\"Title\"\n          [(ngModel)]=\"title\"\n          class=\"form-control\"\n          formControlName=\"title\">\n        </div>\n        <div class=\"form-group col-md-12\">\n          <input type=\"text\" name=\"owner\" placeholder=\"Owners Name\"\n          [(ngModel)]=\"owner\"\n          class=\"form-control\"\n          formControlName=\"owner\">\n        </div>\n        <div class=\"form-group col-md-6\">\n          <input type=\"text\" name=\"city\" placeholder=\"City\"\n          [(ngModel)]=\"city\"\n          class=\"form-control\"\n          formControlName=\"city\">\n        </div>\n        <div class=\"form-group col-md-6\">\n          <select type=\"text\" name=\"type\" placeholder=\"Property Type\"\n          [(ngModel)]=\"type\"\n          class=\"form-control\"\n          formControlName=\"type\">\n            <option value=\"estate\">Estate</option>\n            <option value=\"condo\">Condo</option>\n            <option value=\"apartment\">Apartment</option>\n        </select>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <input type=\"text\" name=\"bedrooms\" placeholder=\"Number of Bedrooms\"\n          [(ngModel)]=\"bedrooms\"\n          class=\"form-control\"\n          formControlName=\"bedrooms\">\n        </div>\n        <div class=\"form-group col-md-6\">\n          <input type=\"number\" name=\"title\" placeholder=\"price\"\n          [(ngModel)]=\"price\"\n          class=\"form-control\"\n          formControlName=\"price\">\n        </div>\n        <div class=\"form-group col-md-12\">\n          <input type=\"file\" name=\"image\" id=\"image\" [(ngModel)]=\"image\" formControlName=\"image\">\n        </div>\n        <div class=\"col-md-12\">\n          <button type=\"submit\" value=\"submit\" name=\"button\" class=\"btn btn-default\">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<div class=\"container add-listing\">\n  <div class=\"back-button\">\n    <button type=\"button\" name=\"button\" class=\"btn btn-primary\" [routerLink]='[\"/listings\"]'>Back</button>\n  </div>\n  <div class=\"col-md-offset-2 col-md-8\">\n    <div class=\"thumbnail add-listing-form\">\n      <div class=\"col-md-12\">\n        <h1>Edit Property</h1>\n      </div>\n      <form class=\"col-md-12\" [formGroup]=\"form\" (submit)=\"submitEdit()\">\n        <div class=\"form-group col-md-12\">\n          <input type=\"text\" name=\"title\" placeholder=\"Title\"\n          [(ngModel)]=\"title\"\n          class=\"form-control\"\n          formControlName=\"title\">\n        </div>\n        <div class=\"form-group col-md-12\">\n          <input type=\"text\" name=\"owner\" placeholder=\"Owners Name\"\n          [(ngModel)]=\"owner\"\n          class=\"form-control\"\n          formControlName=\"owner\">\n        </div>\n        <div class=\"form-group col-md-6\">\n          <input type=\"text\" name=\"city\" placeholder=\"City\"\n          [(ngModel)]=\"city\"\n          class=\"form-control\"\n          formControlName=\"city\">\n        </div>\n        <div class=\"form-group col-md-6\">\n          <select type=\"text\" name=\"type\" placeholder=\"Property Type\"\n          [(ngModel)]=\"type\"\n          class=\"form-control\"\n          formControlName=\"type\">\n            <option value=\"estate\">Estate</option>\n            <option value=\"condo\">Condo</option>\n            <option value=\"apartment\">Apartment</option>\n        </select>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <input type=\"text\" name=\"bedrooms\" placeholder=\"Number of Bedrooms\"\n          [(ngModel)]=\"bedrooms\"\n          class=\"form-control\"\n          formControlName=\"bedrooms\">\n        </div>\n        <div class=\"form-group col-md-6\">\n          <input type=\"number\" name=\"title\" placeholder=\"price\"\n          [(ngModel)]=\"price\"\n          class=\"form-control\"\n          formControlName=\"price\">\n        </div>\n        <!-- <div class=\"form-group col-md-12\">\n          <input type=\"file\" name=\"image\" id=\"image\" [(ngModel)]=\"image\" formControlName=\"image\">\n        </div> -->\n        <div class=\"col-md-12\">\n          <button type=\"submit\" value=\"submit\" name=\"button\" class=\"btn btn-default\">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-image\">\n  <div class=\"hero-box\">\n    <h1>FIND YOUR FUTTURE HOME</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"listing\">\n  <div class=\"col-md-12 detail-top\">\n    <a routerLink=\"/listings\" class=\"btn btn-primary\">Go Back</a>\n\n    <h2 class=\"well well-lg\">{{listing.title}} <small>{{listing.city}}</small></h2>\n  </div>\n\n  <div class=\"col-md-9\">\n    <img src=\"{{imageUrl}}\" class=\"thumbnail\">\n  </div>\n  <div class=\"col-md-3 thumbnail\">\n    <div class=\"\">\n      <div class=\"caption\">\n        <h2>Owner:</h2>\n        <h4><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> {{listing.owner}}</h4>\n        <h2>Bedrooms:</h2>\n        <h4><span class=\"glyphicon glyphicon-hdd\" aria-hidden=\"true\"></span> {{listing.bedrooms}}</h4>\n        <h2>Property Type:</h2>\n        <h4><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> {{listing.type}}</h4>\n        <h2>Price:</h2>\n        <h4><span class=\"glyphicon glyphicon-tags\" aria-hidden=\"true\"></span> {{listing.price | currency:'USD':true:'4.2-2'}}</h4>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 thumbnail edit-box\">\n    <div class=\"col-md-12\">\n      <p class=\"no-padding-margin\"><a [routerLink]=\"['/editlisting/' + listing.$key ]\" class=\"btn btn-primary edit-button\" role=\"button\">Edit</a></p>\n    </div>\n    <div class=\"col-md-12\">\n      <p class=\"no-padding-margin\"><a (click)=\"onDelete()\" class=\"btn btn-default delete-button\" role=\"button\">Delete</a></p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"listings-title\">\n    <h1>Property Listings</h1>\n    <button type=\"button\" class=\"btn btn-primary add-porp\" [routerLink]='[\"/addListing\"]'>+ Add Property</button>\n  </div>\n\n  <div class=\"row listings-row\">\n    <div class=\"col-sm-6 col-md-4 proptery-box\" *ngFor=\"let listing of listings\">\n      <div class=\"thumbnail\">\n        <div class=\"caption\">\n          <a [routerLink]=\"['/listing/' + listing.$key]\"><h3>{{listing.title}}</h3></a>\n          <p>{{listing.city}}</p>\n        </div>\n         <!-- <img src=\"{{listing.path}}\" class=\"thumbnail\"> -->\n        <div class=\"caption\">\n          <p>Owner: {{listing.owner}}</p>\n          <p>Type: {{listing.type}}</p>\n          <p>Bedrooms: {{listing.bedrooms}}</p>\n          <p>Price: ${{listing.price}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid navbar-container\">\n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"\">Real Estate</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li routerLinkActive=\"active\" *ngIf=\"!(af.auth | async)\"><a (click)=\"login()\">Login</a></li>\n        <li routerLinkActive=\"active\" *ngIf=\"(af.auth | async)\"><a (click)=\"logout()\">Logout</a></li>\n        <li routerLinkActive=\"active\">\n          <a (click)=\"menuToggle()\" class=\"glyphicon glyphicon-align-justify\" aria-hidden=\"true\"></a>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<div *ngIf=\"menuOpen; then show else hide\" class=\"col-md-12 \"></div>\n<ng-template #show>\n   <div class=\"menu\">\n     <div class=\"menu-list\">\n       <ul class=\"nav text-center\">\n         <li><a (click)=\"menuToggle()\" class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></a></li>\n         <li><a (click)=\"menuToggle()\" routerLink=\"home\">Home</a></li>\n         <li *ngIf=\"(af.auth | async)\"><a (click)=\"menuToggle()\" routerLink=\"listings\">Listings</a></li>\n         <li *ngIf=\"(af.auth | async)\"><a (click)=\"menuToggle()\" routerLink=\"addListing\">Add Listings</a></li>\n       </ul>\n     </div>\n   </div>\n</ng-template>\n<ng-template #hide>\n  <div></div>\n</ng-template>\n"

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Helps us fetch from the DB


var FirebaseService = (function () {
    function FirebaseService(_af) {
        this._af = _af;
        // Folder name on the firebase side
        this.folder = "listingimages";
        // Set listings to  be used everywhere in this service
        this.listings = this._af.database.list('/listings');
    }
    // Get all llstings
    FirebaseService.prototype.getListings = function () {
        return this.listings; // <- Return the listings we got from the DB -- getting from the constructor
    };
    // Get single listing
    FirebaseService.prototype.getListingDetail = function (id) {
        this.listing = this._af.database.object('/listings/' + id);
        return this.listing;
    };
    // Add Listing
    FirebaseService.prototype.addListing = function (listing) {
        var _this = this;
        // Create root ref for image
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var _loop_1 = function (selectedFile) {
            // Create path -- template literal
            var path = "/" + this_1.folder + "/" + selectedFile.name; // <-- path: "/foldername/imagename/"
            // Then create a strage ref and pass in path
            var iRef = storageRef.child(path); // <-- points to path
            // In the stroage ref pass the selected image files
            iRef.put(selectedFile).then(function (snapshot) {
                listing.image = selectedFile.name; // <-- set listing image to the name of the selesctd file  -- image: "name.jpg"
                listing.path = path; // <-- so we can have a path to the image -- path: "/foldername/imagename/"
                return _this.listings.push(listing); // <-- this will save everything from from -- pushing to the list
            });
        };
        var this_1 = this;
        // Loop throguh the document to fand all images at index 0
        for (var _i = 0, _a = [document.getElementById('image').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            _loop_1(selectedFile);
        }
    };
    // Update listing
    FirebaseService.prototype.updateListing = function (id, listing) {
        // Getting from constructor -- getting single listing  and updating to the new lsiting
        return this.listings.update(id, listing);
    };
    FirebaseService.prototype.deleteListing = function (id) {
        return this.listings.remove(id); // <-- Simple enough to remove :D 
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
], FirebaseService);

var _a;
//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(106);


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddListingComponent = (function () {
    function AddListingComponent(fb, _fire, _route) {
        this._fire = _fire;
        this._route = _route;
        // Model Driven form
        this.form = fb.group({
            title: [, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            city: [, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            owner: [, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            type: [, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            bedrooms: [, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            price: [, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            image: []
        });
    }
    AddListingComponent.prototype.ngOnInit = function () {
    };
    // On submit Form
    AddListingComponent.prototype.submitForm = function () {
        // Create listing object
        var listing = {
            title: this.title,
            city: this.city,
            owner: this.owner,
            type: this.type,
            price: this.price,
            bedrooms: this.bedrooms
            // imgage: selectedFile.name will be set in the service function
        };
        // @TODO Add condition to mkae sure form is correct before submit
        //  Add condition to check if form is filled out correctly before navigating and submitting
        this._fire.addListing(listing);
        this._route.navigate(['listings']);
    };
    return AddListingComponent;
}());
AddListingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'add-listing',
        template: __webpack_require__(191),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AddListingComponent);

var _a, _b, _c;
//# sourceMappingURL=addlisting.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditListingComponent = (function () {
    function EditListingComponent(fb, _fire, _router, _route) {
        this._fire = _fire;
        this._router = _router;
        this._route = _route;
        // TODO find way to use the same form as add listing form --- refactoring
        // Model Driven form
        this.form = fb.group({
            title: [, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            city: [, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            owner: [, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            type: [, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            bedrooms: [, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            price: [, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            image: []
        });
    }
    EditListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // On page load get the id from the url and set it to id
        this.id = this._route.snapshot.params['id'];
        // Call the getListingDetail function from before to get the single listing from id
        this._fire.getListingDetail(this.id).subscribe(function (listing) {
            // Set each input to the listing info we got from the db
            _this.title = listing.title;
            _this.owner = listing.owner;
            _this.city = listing.city;
            _this.bedrooms = listing.bedrooms;
            _this.price = listing.price;
            _this.type = listing.type;
        });
    };
    EditListingComponent.prototype.submitEdit = function () {
        // When submiting create listing object json with the new values -- if any changed
        var listing = {
            title: this.title,
            owner: this.owner,
            city: this.city,
            bedrroms: this.bedrooms,
            price: this.price,
            type: this.type
        };
        // TODO -- add conition to make sure from is correct
        // Call update funciton from service and pass the id of the listing we want to update and the new listing object
        this._fire.updateListing(this.id, listing);
        // Once updated navigate to listings page
        this._router.navigate(['/listings']);
    };
    return EditListingComponent;
}());
EditListingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'editlisting',
        template: __webpack_require__(192),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], EditListingComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=editlisting.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'home',
        template: __webpack_require__(193)
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// To get Id from url we need this

// Get function from service

// Firebase

var ListingComponent = (function () {
    function ListingComponent(_fire, // <-- Services
        _router, // <-- Route in General
        _route) {
        this._fire = _fire;
        this._router = _router;
        this._route = _route;
    } // <-- Route that we are on
    ListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set the id from url to the id property
        this.id = this._route.snapshot.params['id'];
        this._fire.getListingDetail(this.id).subscribe(function (listing) {
            _this.listing = listing;
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
            var spaceRef = storageRef.child(_this.listing.path);
            storageRef.child(_this.listing.path).getDownloadURL().then(function (url) {
                // set image url
                _this.imageUrl = url;
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    ListingComponent.prototype.onDelete = function () {
        this._fire.deleteListing(this.id);
        this._router.navigate(['/listings']);
    };
    return ListingComponent;
}());
ListingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'listingDetail',
        template: __webpack_require__(194),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ListingComponent);

var _a, _b, _c;
//# sourceMappingURL=listing.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListingsComponent = (function () {
    // Inject as dependancy to the constructor
    function ListingsComponent(_fire) {
        this._fire = _fire;
    }
    ListingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Call get listings function on initialize
        this._fire.getListings().subscribe(function (listings) {
            _this.listings = listings; // <-- Set listings = to the return listings
            // =======
            // Looping images to show
            // in listings -- not best practice
            // =======
            // let storageRef = firebase.storage().ref();
            // for (let x of this.listings) {
            //   storageRef.child(x.path).getDownloadURL().then((url) => {
            //     x.path = url;
            //   }).catch((err) => {
            //     console.log(err);
            //   });
            // }
        });
    };
    return ListingsComponent;
}());
ListingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'listings',
        template: __webpack_require__(195),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object])
], ListingsComponent);

var _a;
//# sourceMappingURL=listings.component.js.map

/***/ })

},[233]);
//# sourceMappingURL=main.bundle.js.map