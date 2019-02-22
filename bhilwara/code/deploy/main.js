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

module.exports = "\r\n    *{\r\n        box-sizing: border-box;\r\n        margin:0px;\r\n        padding: 0px;\r\n    }\r\n    body,html\r\n    {\r\n        width:100%;height:100%;\r\n    }\r\n    .container\r\n    {   width:100%;\r\n        height: 10%;\r\n        margin:0;\r\n    }\r\n    .logo img\r\n    {\r\n        width:150px;height:48px;margin:0;padding: 0;float:left;\r\n    }\r\n    .text h5{text-align:center;font:40px solid;}\r\n    .welcome\r\n    {   \r\n        width: 100%;\r\n        height:10%;\r\n        background:red;\r\n        color:white;\r\n        \r\n    }\r\n    .wz-slider\r\n    {\r\n      width:100%;height:500px;\r\n    margin:0px auto;\r\n    overflow:hidden;\r\n    }\r\n    .wz-slider figure\r\n    {\r\n    position:relative;\r\n    width:500%;\r\n    margin:0px;\r\n    -webkit-animation:slider 15s infinite linear;\r\n            animation:slider 15s infinite linear;\r\n    left:0px;\r\n    }\r\n    .wz-slider figure img\r\n    {\r\n    width:20%;\r\n    float:left;\r\n    height:500px;\r\n    }\r\n    @-webkit-keyframes slider{\r\n    0%{left:0%;}\r\n    20%{left:0%;}\r\n    25%{left:-100%;}\r\n    45%{left:-100%}\r\n    50%{left:-200%;}\r\n    70%{left:-200%;}\r\n    75%{left:-300%;}\r\n    95%{left:-300%;}\r\n    100%{left:0%;}\r\n    }\r\n    @keyframes slider{\r\n    0%{left:0%;}\r\n    20%{left:0%;}\r\n    25%{left:-100%;}\r\n    45%{left:-100%}\r\n    50%{left:-200%;}\r\n    70%{left:-200%;}\r\n    75%{left:-300%;}\r\n    95%{left:-300%;}\r\n    100%{left:0%;}\r\n    }\r\n    .welcome h5{\r\n        font-size:23px;\r\n        padding:17px;\r\n        text-align:center;\r\n        vertical-align:baseline;\r\n    }\r\n    .footer{width:100%;height:10%;background-color:gray;position:relative;top:0;margin:0;padding:0;}\r\n    .a{text-align:center;width:15%;height:100%;position:absolute;top:0px;left:0;}\r\n    .b{text-align:center;width:70%;height:100%;position:absolute;top:0;left:204px;}\r\n    .c{text-align:center;width:15%;height:100%;position:absolute;top:0;left:1160px;}\r\n    .a p{text-align:center;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0lBQ0E7O1FBRUksVUFBVSxDQUFDLFdBQVc7SUFDMUI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsUUFBUTtJQUNaO0lBQ0E7O1FBRUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVU7SUFDMUQ7SUFDQSxTQUFTLGlCQUFpQixDQUFDLGVBQWUsQ0FBQztJQUMzQzs7UUFFSSxXQUFXO1FBQ1gsVUFBVTtRQUNWLGNBQWM7UUFDZCxXQUFXOztJQUVmO0lBRUE7O01BRUUsVUFBVSxDQUFDLFlBQVk7SUFDekIsZUFBZTtJQUNmLGVBQWU7SUFDZjtJQUNBOztJQUVBLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsVUFBVTtJQUNWLDRDQUFvQztZQUFwQyxvQ0FBb0M7SUFDcEMsUUFBUTtJQUNSO0lBQ0E7O0lBRUEsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1o7SUFDQTtJQUNBLEdBQUcsT0FBTyxDQUFDO0lBQ1gsSUFBSSxPQUFPLENBQUM7SUFDWixJQUFJLFVBQVUsQ0FBQztJQUNmLElBQUksVUFBVTtJQUNkLElBQUksVUFBVSxDQUFDO0lBQ2YsSUFBSSxVQUFVLENBQUM7SUFDZixJQUFJLFVBQVUsQ0FBQztJQUNmLElBQUksVUFBVSxDQUFDO0lBQ2YsS0FBSyxPQUFPLENBQUM7SUFDYjtJQVZBO0lBQ0EsR0FBRyxPQUFPLENBQUM7SUFDWCxJQUFJLE9BQU8sQ0FBQztJQUNaLElBQUksVUFBVSxDQUFDO0lBQ2YsSUFBSSxVQUFVO0lBQ2QsSUFBSSxVQUFVLENBQUM7SUFDZixJQUFJLFVBQVUsQ0FBQztJQUNmLElBQUksVUFBVSxDQUFDO0lBQ2YsSUFBSSxVQUFVLENBQUM7SUFDZixLQUFLLE9BQU8sQ0FBQztJQUNiO0lBRUE7UUFDSSxjQUFjO1FBQ2QsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQix1QkFBdUI7SUFDM0I7SUFDQSxRQUFRLFVBQVUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDbkcsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDNUUsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDOUUsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDL0UsS0FBSyxpQkFBaUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAqe1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICBib2R5LGh0bWxcclxuICAgIHtcclxuICAgICAgICB3aWR0aDoxMDAlO2hlaWdodDoxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lclxyXG4gICAgeyAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICB9XHJcbiAgICAubG9nbyBpbWdcclxuICAgIHtcclxuICAgICAgICB3aWR0aDoxNTBweDtoZWlnaHQ6NDhweDttYXJnaW46MDtwYWRkaW5nOiAwO2Zsb2F0OmxlZnQ7XHJcbiAgICB9XHJcbiAgICAudGV4dCBoNXt0ZXh0LWFsaWduOmNlbnRlcjtmb250OjQwcHggc29saWQ7fVxyXG4gICAgLndlbGNvbWVcclxuICAgIHsgICBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6MTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6cmVkO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC53ei1zbGlkZXJcclxuICAgIHtcclxuICAgICAgd2lkdGg6MTAwJTtoZWlnaHQ6NTAwcHg7XHJcbiAgICBtYXJnaW46MHB4IGF1dG87XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB9XHJcbiAgICAud3otc2xpZGVyIGZpZ3VyZVxyXG4gICAge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB3aWR0aDo1MDAlO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGFuaW1hdGlvbjpzbGlkZXIgMTVzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgfVxyXG4gICAgLnd6LXNsaWRlciBmaWd1cmUgaW1nXHJcbiAgICB7XHJcbiAgICB3aWR0aDoyMCU7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBzbGlkZXJ7XHJcbiAgICAwJXtsZWZ0OjAlO31cclxuICAgIDIwJXtsZWZ0OjAlO31cclxuICAgIDI1JXtsZWZ0Oi0xMDAlO31cclxuICAgIDQ1JXtsZWZ0Oi0xMDAlfVxyXG4gICAgNTAle2xlZnQ6LTIwMCU7fVxyXG4gICAgNzAle2xlZnQ6LTIwMCU7fVxyXG4gICAgNzUle2xlZnQ6LTMwMCU7fVxyXG4gICAgOTUle2xlZnQ6LTMwMCU7fVxyXG4gICAgMTAwJXtsZWZ0OjAlO31cclxuICAgIH1cclxuICAgIFxyXG4gICAgLndlbGNvbWUgaDV7XHJcbiAgICAgICAgZm9udC1zaXplOjIzcHg7XHJcbiAgICAgICAgcGFkZGluZzoxN3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlcnt3aWR0aDoxMDAlO2hlaWdodDoxMCU7YmFja2dyb3VuZC1jb2xvcjpncmF5O3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDowO21hcmdpbjowO3BhZGRpbmc6MDt9XHJcbi5he3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjE1JTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6MDt9XHJcbi5ie3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjcwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjIwNHB4O31cclxuLmN7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MTUlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MTE2MHB4O30gXHJcbi5hIHB7dGV4dC1hbGlnbjpjZW50ZXI7fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"logo\"><img src=\"assets\\logo.jpg\" /></div>\n    <div class=\"text\">\n        <h5>BHILWARA INFOTECHNOLOGY</h5>\n    </div>\n</div>\n<div class=\"welcome\">\n    <h5>WELCOME TO BHILWARA INFOTECHNOLOGY</h5>\n</div>\n<div class=\"wz-slider\">\n    <figure>\n    <img src=\"assets\\slider1.jpg\" />\n    <img src=\"assets\\slider2.jpg\" />\n    <img src=\"assets\\slider3.jpg\" />\n    <img src=\"assets\\slider4.jpg\" />\n    </figure>\n    </div>\n    \n    \n\n<div class=\"footer\">\n    <div class=\"a\">\n        <p>Phone No:07777883737</p> \n    </div>\n    <div class=\"b\">\n        <p>Location:Bangalore</p>\n    </div>\n    <div class=\"c\">\n         <p>Fax:07777883737</p>\n    </div>\n</div>\n"

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