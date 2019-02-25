(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    *{\r\n        box-sizing: border-box;\r\n        margin:0px;\r\n        padding: 0px;\r\n    }\r\n    body,html\r\n    {\r\n        width:100%;height:100%;\r\n    }\r\n    .container\r\n    {   width:100%;\r\n        height: 10%;\r\n        margin:0;\r\n    }\r\n    .logo img\r\n    {\r\n        width:150px;height:48px;float:left;\r\n    }\r\n    .text h5{text-align:center;font:40px solid;}\r\n    .welcome\r\n    {   \r\n        width: 100%;\r\n        height:10%;\r\n        background:red;\r\n        color:white;\r\n        \r\n    }\r\n    .wz-slider\r\n    {\r\n      width:100%;height:500px;\r\n    margin:0px auto;\r\n    overflow:hidden;\r\n    }\r\n    .wz-slider figure\r\n    {\r\n    position:relative;\r\n    width:500%;\r\n    margin:0px;\r\n    -webkit-animation:slider 15s infinite linear;\r\n            animation:slider 15s infinite linear;\r\n    left:0px;\r\n    }\r\n    .wz-slider figure img\r\n    {\r\n    width:20%;\r\n    float:left;\r\n    height:490px;\r\n    }\r\n    @-webkit-keyframes slider{\r\n    0%{left:0%;}\r\n    20%{left:0%;}\r\n    25%{left:-100%;}\r\n    45%{left:-100%}\r\n    50%{left:-200%;}\r\n    70%{left:-200%;}\r\n    75%{left:-300%;}\r\n    95%{left:-300%;}\r\n    100%{left:0%;}\r\n    }\r\n    @keyframes slider{\r\n    0%{left:0%;}\r\n    20%{left:0%;}\r\n    25%{left:-100%;}\r\n    45%{left:-100%}\r\n    50%{left:-200%;}\r\n    70%{left:-200%;}\r\n    75%{left:-300%;}\r\n    95%{left:-300%;}\r\n    100%{left:0%;}\r\n    }\r\n    .welcome h5{\r\n        font-size:23px;\r\n        padding:17px;\r\n        text-align:center;\r\n        vertical-align:baseline;\r\n    }\r\n    .footer{width:100%;height:10%;background-color:gray;position:relative;top:0;margin:0;padding:0;}\r\n    .a{text-align:center;width:15%;height:100%;position:absolute;top:0px;left:0;}\r\n    .b{text-align:center;width:70%;height:100%;position:absolute;top:0;left:204px;}\r\n    .c{text-align:center;width:15%;height:100%;position:absolute;top:0;left:1160px;}\r\n    .a p{text-align:center;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0lBQ0E7O1FBRUksVUFBVSxDQUFDLFdBQVc7SUFDMUI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsUUFBUTtJQUNaO0lBQ0E7O1FBRUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVO0lBQ3RDO0lBQ0EsU0FBUyxpQkFBaUIsQ0FBQyxlQUFlLENBQUM7SUFDM0M7O1FBRUksV0FBVztRQUNYLFVBQVU7UUFDVixjQUFjO1FBQ2QsV0FBVzs7SUFFZjtJQUVBOztNQUVFLFVBQVUsQ0FBQyxZQUFZO0lBQ3pCLGVBQWU7SUFDZixlQUFlO0lBQ2Y7SUFDQTs7SUFFQSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFVBQVU7SUFDViw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLFFBQVE7SUFDUjtJQUNBOztJQUVBLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaO0lBQ0E7SUFDQSxHQUFHLE9BQU8sQ0FBQztJQUNYLElBQUksT0FBTyxDQUFDO0lBQ1osSUFBSSxVQUFVLENBQUM7SUFDZixJQUFJLFVBQVU7SUFDZCxJQUFJLFVBQVUsQ0FBQztJQUNmLElBQUksVUFBVSxDQUFDO0lBQ2YsSUFBSSxVQUFVLENBQUM7SUFDZixJQUFJLFVBQVUsQ0FBQztJQUNmLEtBQUssT0FBTyxDQUFDO0lBQ2I7SUFWQTtJQUNBLEdBQUcsT0FBTyxDQUFDO0lBQ1gsSUFBSSxPQUFPLENBQUM7SUFDWixJQUFJLFVBQVUsQ0FBQztJQUNmLElBQUksVUFBVTtJQUNkLElBQUksVUFBVSxDQUFDO0lBQ2YsSUFBSSxVQUFVLENBQUM7SUFDZixJQUFJLFVBQVUsQ0FBQztJQUNmLElBQUksVUFBVSxDQUFDO0lBQ2YsS0FBSyxPQUFPLENBQUM7SUFDYjtJQUVBO1FBQ0ksY0FBYztRQUNkLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsdUJBQXVCO0lBQzNCO0lBQ0EsUUFBUSxVQUFVLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ25HLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzVFLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQzlFLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQy9FLEtBQUssaUJBQWlCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgKntcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gICAgYm9keSxodG1sXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXJcclxuICAgIHsgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgfVxyXG4gICAgLmxvZ28gaW1nXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6MTUwcHg7aGVpZ2h0OjQ4cHg7ZmxvYXQ6bGVmdDtcclxuICAgIH1cclxuICAgIC50ZXh0IGg1e3RleHQtYWxpZ246Y2VudGVyO2ZvbnQ6NDBweCBzb2xpZDt9XHJcbiAgICAud2VsY29tZVxyXG4gICAgeyAgIFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDoxMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDpyZWQ7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnd6LXNsaWRlclxyXG4gICAge1xyXG4gICAgICB3aWR0aDoxMDAlO2hlaWdodDo1MDBweDtcclxuICAgIG1hcmdpbjowcHggYXV0bztcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIH1cclxuICAgIC53ei1zbGlkZXIgZmlndXJlXHJcbiAgICB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHdpZHRoOjUwMCU7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgYW5pbWF0aW9uOnNsaWRlciAxNXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgbGVmdDowcHg7XHJcbiAgICB9XHJcbiAgICAud3otc2xpZGVyIGZpZ3VyZSBpbWdcclxuICAgIHtcclxuICAgIHdpZHRoOjIwJTtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBoZWlnaHQ6NDkwcHg7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHNsaWRlcntcclxuICAgIDAle2xlZnQ6MCU7fVxyXG4gICAgMjAle2xlZnQ6MCU7fVxyXG4gICAgMjUle2xlZnQ6LTEwMCU7fVxyXG4gICAgNDUle2xlZnQ6LTEwMCV9XHJcbiAgICA1MCV7bGVmdDotMjAwJTt9XHJcbiAgICA3MCV7bGVmdDotMjAwJTt9XHJcbiAgICA3NSV7bGVmdDotMzAwJTt9XHJcbiAgICA5NSV7bGVmdDotMzAwJTt9XHJcbiAgICAxMDAle2xlZnQ6MCU7fVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAud2VsY29tZSBoNXtcclxuICAgICAgICBmb250LXNpemU6MjNweDtcclxuICAgICAgICBwYWRkaW5nOjE3cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246YmFzZWxpbmU7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVye3dpZHRoOjEwMCU7aGVpZ2h0OjEwJTtiYWNrZ3JvdW5kLWNvbG9yOmdyYXk7cG9zaXRpb246cmVsYXRpdmU7dG9wOjA7bWFyZ2luOjA7cGFkZGluZzowO31cclxuLmF7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MTUlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowcHg7bGVmdDowO31cclxuLmJ7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6NzAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MjA0cHg7fVxyXG4uY3t0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxNSU7aGVpZ2h0OjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDoxMTYwcHg7fSBcclxuLmEgcHt0ZXh0LWFsaWduOmNlbnRlcjt9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"logo\"><img src=\"assets\\favicon.ico\" /></div>\n    <div class=\"text\">\n        <h5>BHILWARA INFOTECHNOLOGY</h5>\n    </div>\n</div>\n<div class=\"welcome\">\n    <h5>WELCOME TO BHILWARA INFOTECHNOLOGY</h5>\n</div>\n<div class=\"wz-slider\">\n    <figure>\n    <img src=\"assets\\slider1.jpg\" />\n    <img src=\"assets\\slider2.jpg\" />\n    <img src=\"assets\\slider3.jpg\" />\n    <img src=\"assets\\slider4.jpg\" />\n    </figure>\n    </div>\n    \n    \n\n<div class=\"footer\">\n    <div class=\"a\">\n        <p>Phone No:+91-80-46306666</p> \n    </div>\n    <div class=\"b\">\n        <p>Location:#244, Fortune Summit Business Park\n            1st Floor, Hosur Road \n            Near Silk Board Junction\n            Bengaluru, India – 560068</p>\n    </div>\n    <div class=\"c\">\n         <p>Fax:+91-80-41466262</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular7';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kritika-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Documents\code\angular7\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map