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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_data/options.ts":
/*!**********************************!*\
  !*** ./src/app/_data/options.ts ***!
  \**********************************/
/*! exports provided: options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var options = {
    departments: [
        'Operations',
        'Engineering',
        'Commercial',
        'Management'
    ],
    locations: [
        'South Carlsbad',
        'Artesia'
    ],
    statuses: [
        'Started',
        'In Queue',
        'Near Completion',
        'Under Review'
    ]
};


/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, alertify, router) {
        this.userService = userService;
        this.alertify = alertify;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.userService.isAuthorizedToApprove()) {
            return true;
        }
        this.alertify.error('You are unauthorized to visit this page.');
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_models/pagination.ts":
/*!***************************************!*\
  !*** ./src/app/_models/pagination.ts ***!
  \***************************************/
/*! exports provided: PaginatedResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedResult", function() { return PaginatedResult; });
var PaginatedResult = /** @class */ (function () {
    function PaginatedResult() {
    }
    return PaginatedResult;
}());



/***/ }),

/***/ "./src/app/_pipes/ApprovedBoolean.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/_pipes/ApprovedBoolean.pipe.ts ***!
  \************************************************/
/*! exports provided: ApprovedBooleanPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedBooleanPipe", function() { return ApprovedBooleanPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApprovedBooleanPipe = /** @class */ (function () {
    function ApprovedBooleanPipe() {
    }
    ApprovedBooleanPipe.prototype.transform = function (value, args) {
        var x = value ? 'Approved' : 'Unapproved';
        return x;
    };
    ApprovedBooleanPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'ApprovedBoolean'
        })
    ], ApprovedBooleanPipe);
    return ApprovedBooleanPipe;
}());



/***/ }),

/***/ "./src/app/_pipes/IsApprovedPipe.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/_pipes/IsApprovedPipe.pipe.ts ***!
  \***********************************************/
/*! exports provided: IsApprovedPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsApprovedPipePipe", function() { return IsApprovedPipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IsApprovedPipePipe = /** @class */ (function () {
    function IsApprovedPipePipe() {
    }
    IsApprovedPipePipe.prototype.transform = function (value, args) {
        var x = value ? 'fa fa-check-circle' : 'fa fa-times-circle';
        return x;
    };
    IsApprovedPipePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'IsApprovedPipe'
        })
    ], IsApprovedPipePipe);
    return IsApprovedPipePipe;
}());



/***/ }),

/***/ "./src/app/_pipes/StatusPipe.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/_pipes/StatusPipe.pipe.ts ***!
  \*******************************************/
/*! exports provided: StatusPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPipePipe", function() { return StatusPipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StatusPipePipe = /** @class */ (function () {
    function StatusPipePipe() {
    }
    StatusPipePipe.prototype.transform = function (value, args) {
        var x = value ? 'text-success' : 'text-danger';
        return x;
    };
    StatusPipePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'StatusPipe'
        })
    ], StatusPipePipe);
    return StatusPipePipe;
}());



/***/ }),

/***/ "./src/app/_resolvers/request-approve.resolver.ts":
/*!********************************************************!*\
  !*** ./src/app/_resolvers/request-approve.resolver.ts ***!
  \********************************************************/
/*! exports provided: RequestApproveResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestApproveResolver", function() { return RequestApproveResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/request.service */ "./src/app/_services/request.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestApproveResolver = /** @class */ (function () {
    function RequestApproveResolver(requestService, router) {
        this.requestService = requestService;
        this.router = router;
    }
    RequestApproveResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.requestService.getRequest(route.params['esr'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log(error);
            _this.router.navigate(['/requests']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    RequestApproveResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequestApproveResolver);
    return RequestApproveResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/request-assigned.resolver.ts":
/*!*********************************************************!*\
  !*** ./src/app/_resolvers/request-assigned.resolver.ts ***!
  \*********************************************************/
/*! exports provided: RequestAssignedResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestAssignedResolver", function() { return RequestAssignedResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/request.service */ "./src/app/_services/request.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestAssignedResolver = /** @class */ (function () {
    function RequestAssignedResolver(requestService, router) {
        this.requestService = requestService;
        this.router = router;
        this.pageNumber = 1;
        this.pageSize = 10;
        this.requestParams = {};
    }
    RequestAssignedResolver.prototype.resolve = function (route) {
        var _this = this;
        this.requestParams.user = 'jjones';
        return this.requestService.getAssignedRequests(this.pageNumber, this.pageSize, this.requestParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log(error);
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    RequestAssignedResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequestAssignedResolver);
    return RequestAssignedResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/request-detail.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/_resolvers/request-detail.resolver.ts ***!
  \*******************************************************/
/*! exports provided: RequestDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailResolver", function() { return RequestDetailResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/request.service */ "./src/app/_services/request.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestDetailResolver = /** @class */ (function () {
    function RequestDetailResolver(requestService, router) {
        this.requestService = requestService;
        this.router = router;
    }
    RequestDetailResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.requestService.getRequest(route.params['esr'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log(error);
            _this.router.navigate(['/requests']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    RequestDetailResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequestDetailResolver);
    return RequestDetailResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/request-view.resolver.ts":
/*!*****************************************************!*\
  !*** ./src/app/_resolvers/request-view.resolver.ts ***!
  \*****************************************************/
/*! exports provided: RequestViewResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestViewResolver", function() { return RequestViewResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/request.service */ "./src/app/_services/request.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestViewResolver = /** @class */ (function () {
    function RequestViewResolver(requestService, router) {
        this.requestService = requestService;
        this.router = router;
        this.pageNumber = 1;
        this.pageSize = 10;
    }
    RequestViewResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.requestService.getRequests(this.pageNumber, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log(error);
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    RequestViewResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequestViewResolver);
    return RequestViewResolver;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/error.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/_services/error.interceptor.ts ***!
  \************************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    console.error(applicationError);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(applicationError);
                }
            }
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_services/request.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/request.service.ts ***!
  \**********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequestService = /** @class */ (function () {
    function RequestService(http, alertify) {
        this.http = http;
        this.alertify = alertify;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    RequestService.prototype.getRequests = function (page, itemsPerPage, requestParams) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        if (requestParams != null) {
            params = params.append('department', requestParams.department);
            params = params.append('approved', requestParams.approved);
            params = params.append('locationOfProject', requestParams.locationOfProject);
            params = params.append('engineerAssigned', requestParams.engineerAssigned);
            params = params.append('esr', requestParams.esr);
            params = params.append('orderBy', requestParams.orderBy);
        }
        return this.http.get(this.baseUrl + 'requests', { observe: 'response', params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    RequestService.prototype.getRequest = function (esr) {
        return this.http.get(this.baseUrl + 'requests/' + esr);
    };
    RequestService.prototype.getAssignedRequests = function (page, itemsPerPage, requestParams) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        if (requestParams != null) {
            params = params.append('user', requestParams.user);
        }
        return this.http.get(this.baseUrl + 'requests/assigned', { observe: 'response', params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    RequestService.prototype.submit = function (request) {
        return this.http.post(this.baseUrl + 'requests/submit', request);
    };
    RequestService.prototype.approve = function (request) {
        return this.http.put(this.baseUrl + 'requests/' + request.esr, request);
    };
    RequestService.prototype.changeStatus = function (request) {
        return this.http.put(this.baseUrl + 'requests/status/' + request.esr, request);
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.members = this.getGroupMembers();
    }
    UserService.prototype.getUsername = function () {
        return this.http.get(this.baseUrl + 'user/username');
    };
    UserService.prototype.getGroupMembers = function () {
        return this.http.get(this.baseUrl + 'user/groupmembers');
    };
    UserService.prototype.isAuthorizedToCreate = function () {
        return this.http.get(this.baseUrl + 'user/authorizedtocreate');
    };
    UserService.prototype.isAuthorizedToApprove = function () {
        return this.http.get(this.baseUrl + 'user/authorizedtoapprove');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav></app-nav>\n<router-outlet></router-outlet>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Engineering';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _request_request_create_request_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request/request-create/request-create.component */ "./src/app/request/request-create/request-create.component.ts");
/* harmony import */ var _request_request_view_request_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request/request-view/request-view.component */ "./src/app/request/request-view/request-view.component.ts");
/* harmony import */ var _pipes_IsApprovedPipe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_pipes/IsApprovedPipe.pipe */ "./src/app/_pipes/IsApprovedPipe.pipe.ts");
/* harmony import */ var _request_request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request/request-detail/request-detail.component */ "./src/app/request/request-detail/request-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/request.service */ "./src/app/_services/request.service.ts");
/* harmony import */ var _resolvers_request_detail_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_resolvers/request-detail.resolver */ "./src/app/_resolvers/request-detail.resolver.ts");
/* harmony import */ var _resolvers_request_view_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_resolvers/request-view.resolver */ "./src/app/_resolvers/request-view.resolver.ts");
/* harmony import */ var _pipes_StatusPipe_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_pipes/StatusPipe.pipe */ "./src/app/_pipes/StatusPipe.pipe.ts");
/* harmony import */ var _pipes_ApprovedBoolean_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_pipes/ApprovedBoolean.pipe */ "./src/app/_pipes/ApprovedBoolean.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _request_request_approve_request_approve_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./request/request-approve/request-approve.component */ "./src/app/request/request-approve/request-approve.component.ts");
/* harmony import */ var _resolvers_request_approve_resolver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_resolvers/request-approve.resolver */ "./src/app/_resolvers/request-approve.resolver.ts");
/* harmony import */ var _request_request_assigned_request_assigned_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./request/request-assigned/request-assigned.component */ "./src/app/request/request-assigned/request-assigned.component.ts");
/* harmony import */ var _resolvers_request_assigned_resolver__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_resolvers/request-assigned.resolver */ "./src/app/_resolvers/request-assigned.resolver.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_services/error.interceptor */ "./src/app/_services/error.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _request_request_create_request_create_component__WEBPACK_IMPORTED_MODULE_6__["RequestCreateComponent"],
                _request_request_view_request_view_component__WEBPACK_IMPORTED_MODULE_7__["RequestViewComponent"],
                _request_request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_9__["RequestDetailComponent"],
                _pipes_IsApprovedPipe_pipe__WEBPACK_IMPORTED_MODULE_8__["IsApprovedPipePipe"],
                _pipes_StatusPipe_pipe__WEBPACK_IMPORTED_MODULE_16__["StatusPipePipe"],
                _pipes_ApprovedBoolean_pipe__WEBPACK_IMPORTED_MODULE_17__["ApprovedBooleanPipe"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _request_request_approve_request_approve_component__WEBPACK_IMPORTED_MODULE_21__["RequestApproveComponent"],
                _request_request_assigned_request_assigned_component__WEBPACK_IMPORTED_MODULE_23__["RequestAssignedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_12__["appRoutes"]),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]
            ],
            providers: [
                _services_request_service__WEBPACK_IMPORTED_MODULE_13__["RequestService"],
                _resolvers_request_detail_resolver__WEBPACK_IMPORTED_MODULE_14__["RequestDetailResolver"],
                _resolvers_request_view_resolver__WEBPACK_IMPORTED_MODULE_15__["RequestViewResolver"],
                _resolvers_request_approve_resolver__WEBPACK_IMPORTED_MODULE_22__["RequestApproveResolver"],
                _resolvers_request_assigned_resolver__WEBPACK_IMPORTED_MODULE_24__["RequestAssignedResolver"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_19__["AlertifyService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"],
                _services_error_interceptor__WEBPACK_IMPORTED_MODULE_26__["ErrorInterceptorProvider"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-request-assigned></app-request-assigned>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark p-2\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Engineering Portal</a>\n\n  <ul class=\"navbar-nav mr-auto ml-3\">\n    <div class=\"dropdown\" dropdown>\n        <a class=\"dropdown-toggle text-light\" dropdownToggle>\n          Service Requests\n        </a>\n\n        <div class=\"dropdown-menu mt-3\" *dropdownMenu>\n          <!-- <a class=\"dropdown-item\" [routerLink]=\"['/request-create']\">Create Service Request</a> -->\n          <a class=\"dropdown-item\" [routerLink]=\"['/requests']\">View All Service Requests</a>\n        </div>\n      </div>\n  </ul>\n  <!-- <div class=\"container d-flex text-right justify-content-right\">\n    <p class=\"mr-3 font-weight-bold\">{{username}}</p>\n  </div>\n  <img src=\"../../assets/lucidlogoWhite.png\" alt=\"\" class=\"logo\"> -->\n  <div class=\"container d-flex flex-row-reverse p-0 m-0\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n      </div>\n      <div class=\"col-sm\">\n      </div>\n      <div class=\"col-sm text-white text-center\">\n        <img src=\"../../assets/lucidlogoWhite.png\" alt=\"\" class=\"logo\">\n        <h6 class=\"mt-2\">Welcome {{username}}!</h6>\n      </div>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(userService) {
        this.userService = userService;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.getUsername();
    };
    NavComponent.prototype.getUsername = function () {
        var _this = this;
        this.userService.getUsername().subscribe(function (response) {
            _this.username = response;
        }, function (error) {
            console.log(error);
        });
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/request/request-approve/request-approve.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/request/request-approve/request-approve.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w-2 {\r\n  width: 2%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/request/request-approve/request-approve.component.html":
/*!************************************************************************!*\
  !*** ./src/app/request/request-approve/request-approve.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 w-75\">\n    <div class=\"container p-0\">\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <button type=\"button\" class=\"btn btn-dark mb-2\" [routerLink]=\"['/requests', request.esr]\"><i class=\"fa fa-arrow-circle-left mr-2\"></i>Back</button>\n        </div>\n        <div class=\"col-sm\">\n        </div>\n        <div class=\"col-sm d-flex flex-row-reverse\">\n        </div>\n      </div>\n    </div>\n    <div class=\"card text-center border-dark\">\n        <div class=\"card-header\">\n            <h3 class=\"card-title font-weight-bolder mb-0\">{{request.esr}}</h3>\n        </div>\n        <form #approvalForm=\"ngForm\" (ngSubmit)=\"approve()\">\n          <div class=\"card-body form-group\">\n            <div class=\"container p-3 text-left\">\n              <label for=\"group\" class=\"card-subtitle font-weight-bold\">Department</label>\n              <select class=\"form-control p-0\" style=\"width: 130px\" id=\"department\" [(ngModel)]=\"request.department\" name=\"department\">\n                  <option *ngFor=\"let department of departments\" [attr.selected]=\"request.department\">\n                    {{department}}\n                  </option>\n              </select>\n            </div>\n            <div class=\"container p-3 text-left\">\n              <label class=\"card-subtitle font-weight-bold\" for=\"locationOfProject\">Location of Project</label>\n              <select name=\"locationOfProject\" id=\"locationOfProject\" class=\"form-control p-0\" style=\"width: 130px\" [(ngModel)]=\"request.locationOfProject\">\n                <option *ngFor=\"let location of locationsList\" [attr.selected]=\"request.locationOfProject\">\n                  {{location}}\n                </option>\n              </select>\n            </div>\n            <div class=\"container p-3 text-left\">\n              <label class=\"font-weight-bold\" for=\"description\">Description</label>\n              <textarea class=\"form-control mb-3\" id=\"description\" rows=\"3\" required name=\"description\" [(ngModel)]=\"request.description\"></textarea>\n            </div>\n            <div class=\"container p-3 text-left\">\n              <label for=\"engineerAssigned\" class=\"card-subtitle font-weight-bold\">Engineer Assigned</label>\n              <select name=\"engineersAssigned\" id=\"engineerAssigned\" class=\"form-control p-0\" style=\"width: 130px\" [(ngModel)]=\"request.engineerAssigned\">\n                <option [ngValue]=\"null\"></option>\n                <option *ngFor=\"let engineer of engineersList\" [value]=\"engineer.value\">\n                  {{engineer.key}}\n                </option>\n              </select>\n            </div>\n            <div class=\"container p-3 text-left\">\n              <label class=\"font-weight-bold\" for=\"requestedDateForCompletion\">Requested Date For Completion</label>\n              <input type=\"text\"\n                      required\n                      name=\"requestedDateForCompletion\"\n                      [(ngModel)]=\"request.requestedDateForCompletion\"\n                      id=\"requestedDateForCompletion\"\n                      class=\"form-control mb-3\"\n                      bsDatepicker\n                      style=\"width: 130px\"\n                      [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD', containerClass: 'theme-default' }\">\n            </div>\n            <div class=\"container p-3 text-left\">\n              <label class=\"card-subtitle font-weight-bold\" for=\"priority\">Priority</label>\n              <div class=\"row d-flex align-items-center ml-1\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"height: 25px; width: 25px\" (click)=\"decreasePriority()\"><p class=\"font-weight-bolder\">-</p></button>\n                <input type=\"text\" class=\"form-control text-center\" name=\"priority\" style=\"max-width: 40px;\" [value]=\"priority.value\" [formControl]=\"priority\" [(ngModel)]=\"request.priority\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"height: 25px; width: 25px\" (click)=\"increasePriority()\"><p class=\"font-weight-bold\">+</p></button>\n              </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-success\">Approve</button>\n          </div>\n        </form>\n        <div class=\"card-footer p-2 font-weight-bold\">\n          <p class=\"mb-0 {{request.approved | StatusPipe}}\">Pending Approval</p>\n        </div>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/request/request-approve/request-approve.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/request/request-approve/request-approve.component.ts ***!
  \**********************************************************************/
/*! exports provided: RequestApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestApproveComponent", function() { return RequestApproveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/request.service */ "./src/app/_services/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_data_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_data/options */ "./src/app/_data/options.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestApproveComponent = /** @class */ (function () {
    // model: any = {};
    function RequestApproveComponent(requestService, route, router, alertify, userService) {
        this.requestService = requestService;
        this.route = route;
        this.router = router;
        this.alertify = alertify;
        this.userService = userService;
        this.approvedRequest = {};
        this.departments = src_app_data_options__WEBPACK_IMPORTED_MODULE_4__["options"].departments;
        this.locationsList = src_app_data_options__WEBPACK_IMPORTED_MODULE_4__["options"].locations;
        this.firstVal = undefined;
        this.priority = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
    }
    RequestApproveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.request = data['request'];
        });
        this.getEngineers();
        this.priority.setValue(this.request.priority);
    };
    RequestApproveComponent.prototype.increasePriority = function () {
        var current = this.priority.value;
        if (current < 3) {
            current++;
            this.priority.setValue(current);
        }
    };
    RequestApproveComponent.prototype.decreasePriority = function () {
        var current = this.priority.value;
        if (current > 1) {
            current--;
            this.priority.setValue(current);
        }
    };
    RequestApproveComponent.prototype.getEngineers = function () {
        var _this = this;
        this.userService.getGroupMembers().subscribe(function (response) {
            _this.engineersList = response;
        }, function (error) {
            _this.alertify.error('Error retrieving list of engineers.');
        });
    };
    RequestApproveComponent.prototype.approve = function () {
        var _this = this;
        if (this.request.engineerAssigned != null) {
            this.request.approved = true;
            this.requestService.approve(this.request).subscribe(function (response) {
                _this.approvedRequest = Object.assign({}, response);
                _this.router.navigate(['/requests/' + _this.approvedRequest.esr]);
                _this.alertify.success('Request has been approved.');
            }, function (error) {
                _this.alertify.error('There was an error approving the request.');
            });
        }
        else {
            this.alertify.error('Please assign an engineer to the request');
        }
    };
    RequestApproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-approve',
            template: __webpack_require__(/*! ./request-approve.component.html */ "./src/app/request/request-approve/request-approve.component.html"),
            styles: [__webpack_require__(/*! ./request-approve.component.css */ "./src/app/request/request-approve/request-approve.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], RequestApproveComponent);
    return RequestApproveComponent;
}());



/***/ }),

/***/ "./src/app/request/request-assigned/request-assigned.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/request/request-assigned/request-assigned.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/request/request-assigned/request-assigned.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/request/request-assigned/request-assigned.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 p-2\">\n  <div class=\"row\">\n    <div class=\"col-1\"></div>\n    <div class=\"col-md-3 shadow rounded\">\n      <app-request-create></app-request-create>\n    </div>\n    <div class=\"col-md-6 mh-50 px-md-4\">\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <h3 class=\"ml-5\">My Assigned Requests</h3>\n        </div>\n      <!-- <div class=\"container d-flex justify-content-end mt-0 mb-3\"> -->\n        <div class=\"col-lg-4\"></div>\n        <div class=\"col-lg-4 d-flex justify-content-end mb-2\">\n          <button class=\"btn btn-primary btn-sm\" (click)=\"toggleApproved()\">{{ assigned ? \"Show All Requests\" : \"Show My Requests\" }}</button>\n        </div>\n      <!-- </div> -->\n      </div>\n        <div class=\"shadow rounded ml-4\">\n          <table class=\"table table-striped table-hover table-sm table-bordered text-center\">\n              <thead class=\"thead-dark\">\n                <tr>\n                  <th style=\"width: 2%\" class=\"align-middle\" scope=\"col\">View</th>\n                  <th style=\"width: 5%\" class=\"align-middle\" scope=\"col\">ESR</th>\n                  <th style=\"width: 7%\" class=\"align-middle\" scope=\"col\">Date Initiated</th>\n                  <th style=\"width: 7%\" class=\"align-middle\" scope=\"col\">Requested Completion Date</th>\n                  <th style=\"width: 7%\" class=\"align-middle\" scope=\"col\">Department</th>\n                  <th style=\"width: 7%\" class=\"align-middle\" scope=\"col\">Location</th>\n                  <th style=\"width: 20%\" class=\"align-middle\" scope=\"col\">Description</th>\n                  <th style=\"width: 7%\" class=\"align-middle\" scope=\"col\">Status</th>\n                  <th style=\"width: 2%\" class=\"align-middle\" scope=\"col\">Priority</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let request of requests\">\n                  <th><button class=\"btn btn-link p-0\" [routerLink]=\"['/requests', request.esr]\"><i class=\"fa fa-plus-square\"></i></button></th>\n                  <th>{{request.esr}}</th>\n                  <td>{{request.dateInitiated | date}}</td>\n                  <td>{{request.requestedDateForCompletion | date}}</td>\n                  <td>{{request.department}}</td>\n                  <td>{{request.locationOfProject}}</td>\n                  <td>{{request.description.slice(0, 51)}}...</td>\n                  <td>{{request.status}}</td>\n                  <td>{{request.priority}}</td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n      <div class=\"d-flex justify-content-center\">\n        <pagination\n          [boundaryLinks]=\"true\"\n          [totalItems]=\"pagination.totalItems\"\n          [(ngModel)]=\"pagination.currentPage\"\n          [itemsPerPage]=\"pagination.itemsPerPage\"\n          (pageChanged)=\"pageChanged($event)\"\n          previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/request/request-assigned/request-assigned.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/request/request-assigned/request-assigned.component.ts ***!
  \************************************************************************/
/*! exports provided: RequestAssignedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestAssignedComponent", function() { return RequestAssignedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/request.service */ "./src/app/_services/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestAssignedComponent = /** @class */ (function () {
    function RequestAssignedComponent(requestService, route) {
        this.requestService = requestService;
        this.route = route;
        this.requestParams = {};
        this.assigned = true;
    }
    RequestAssignedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.requests = data['requests'].result;
            _this.pagination = data['requests'].pagination;
        });
    };
    RequestAssignedComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadAssignedRequests();
    };
    RequestAssignedComponent.prototype.toggleApproved = function () {
        this.assigned = !this.assigned;
        (this.assigned) ? this.loadAssignedRequests() : this.resetFilters();
    };
    RequestAssignedComponent.prototype.loadAssignedRequests = function () {
        var _this = this;
        this.requestService.getAssignedRequests(this.pagination.currentPage, this.pagination.itemsPerPage, this.requestParams)
            .subscribe(function (res) {
            _this.requests = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            console.log(error);
        });
    };
    RequestAssignedComponent.prototype.resetFilters = function () {
        this.requestParams.department = '';
        this.requestParams.esr = '';
        this.requestParams.approved = false;
        this.requestParams.locationOfProject = '';
        this.requestParams.engineerAssigned = '';
        this.loadRequests();
    };
    RequestAssignedComponent.prototype.loadRequests = function () {
        var _this = this;
        this.requestService.getRequests(this.pagination.currentPage, this.pagination.itemsPerPage, this.requestParams)
            .subscribe(function (res) {
            _this.requests = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            console.log(error);
        });
    };
    RequestAssignedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-assigned',
            template: __webpack_require__(/*! ./request-assigned.component.html */ "./src/app/request/request-assigned/request-assigned.component.html"),
            styles: [__webpack_require__(/*! ./request-assigned.component.css */ "./src/app/request/request-assigned/request-assigned.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RequestAssignedComponent);
    return RequestAssignedComponent;
}());



/***/ }),

/***/ "./src/app/request/request-create/request-create.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/request/request-create/request-create.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/request/request-create/request-create.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/request/request-create/request-create.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container p-3\"> -->\n  <form #submitForm=\"ngForm\" (ngSubmit)=\"submit()\">\n\n    <div class=\"form-group p-4\">\n      <h3 class=\"mb-5 mt-2 font-weight-bold\">Create a Service Request</h3>\n      <div class=\"border p-4 mb-2\">\n      <label class=\"font-weight-bold\" for=\"requestedDateForCompletion\">Requested Date For Completion</label>\n      <input type=\"text\"\n              autocomplete=\"off\"\n              required\n              name=\"requestedDateForCompletion\"\n              [(ngModel)]=\"model.requestedDateForCompletion\"\n              id=\"requestedDateForCompletion\"\n              class=\"form-control mb-3\"\n              style=\"width: 30%\"\n              bsDatepicker\n              [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD', containerClass: 'theme-default', adaptivePosition: true }\">\n\n        <label class=\"font-weight-bold\" for=\"department\">Department</label>\n        <select class=\"form-control mb-3\" id=\"department\" required name=\"department\" style=\"width: 30%\" [(ngModel)]=\"model.department\">\n          <option *ngFor=\"let department of departments\">{{department}}</option>\n        </select>\n\n        <label class=\"font-weight-bold\" for=\"locationOfProject\">Location of Project</label>\n        <select class=\"form-control mb-3\" id=\"locationOfProject\" required name=\"locationOfProject\" style=\"width: 30%\" [(ngModel)]=\"model.locationOfProject\">\n          <option *ngFor=\"let location of locationsList\">{{location}}</option>\n        </select>\n\n        <label for=\"initiatedBy\" class=\"font-weight-bold\">Initiated By</label>\n        <input type=\"text\" class=\"form-control mb-3\" readonly required name=\"initiatedBy\" [(ngModel)]=\"model.initiatedBy\" style=\"width: 30%\" value=\"{{username}}\">\n\n        <label class=\"font-weight-bold\" for=\"description\">Description</label>\n        <textarea class=\"form-control mb-3\" id=\"description\" rows=\"2\" required name=\"description\" style=\"width: 90%\" [(ngModel)]=\"model.description\"></textarea>\n      </div>\n        <input class=\"btn btn-sm btn-success mr-2\" type=\"submit\" value=\"Submit\">\n        <!-- <button type=\"button\" class=\"btn btn-sm btn-danger\" [routerLink]=\"['/requests']\">Cancel</button> -->\n      </div>\n\n  </form>\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/request/request-create/request-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/request/request-create/request-create.component.ts ***!
  \********************************************************************/
/*! exports provided: RequestCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCreateComponent", function() { return RequestCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/request.service */ "./src/app/_services/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var src_app_data_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_data/options */ "./src/app/_data/options.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestCreateComponent = /** @class */ (function () {
    function RequestCreateComponent(requestService, router, alertify, userService) {
        this.requestService = requestService;
        this.router = router;
        this.alertify = alertify;
        this.userService = userService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.model = {};
        this.request = {};
        this.departments = src_app_data_options__WEBPACK_IMPORTED_MODULE_5__["options"].departments;
        this.locationsList = src_app_data_options__WEBPACK_IMPORTED_MODULE_5__["options"].locations;
    }
    RequestCreateComponent.prototype.ngOnInit = function () {
        this.getUsername();
        // this.getRole();
    };
    RequestCreateComponent.prototype.getUsername = function () {
        var _this = this;
        this.userService.getUsername().subscribe(function (response) {
            // this.alertify.success('Welcome!');
            _this.username = response;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    // getRole() {
    //   this.userService.isAuthorizedToApprove().subscribe(response => {
    //     console.log(response);
    //   });
    // }
    RequestCreateComponent.prototype.submit = function () {
        var _this = this;
        this.model.initiatedBy = this.username;
        this.requestService.submit(this.model).subscribe(function (response) {
            _this.alertify.success('Successfully created request.');
            _this.request = Object.assign({}, response);
            _this.router.navigate(['/requests/' + _this.request.esr]);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RequestCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-create',
            template: __webpack_require__(/*! ./request-create.component.html */ "./src/app/request/request-create/request-create.component.html"),
            styles: [__webpack_require__(/*! ./request-create.component.css */ "./src/app/request/request-create/request-create.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], RequestCreateComponent);
    return RequestCreateComponent;
}());



/***/ }),

/***/ "./src/app/request/request-detail/request-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/request/request-detail/request-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-check-circle {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/request/request-detail/request-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/request/request-detail/request-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 w-75\">\n  <div class=\"container p-0\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <button type=\"button\" class=\"btn btn-dark mb-2\" [routerLink]=\"['/home']\"><i class=\"fa fa-arrow-circle-left mr-2\"></i>Back</button>\n      </div>\n      <div class=\"col-sm\">\n\n      </div>\n      <div class=\"col-sm d-flex flex-row-reverse\">\n          <!-- *ngIf=\"authorizedToApprove && !approved\" -->\n        <button *ngIf=\"authorizedToApprove && !approved\" type=\"button\" class=\"btn btn-success mb-2\" [routerLink]=\"['/request-approve', request.esr]\"><i class=\"fa fa-check-circle mr-2\"></i>Approve</button>\n        <button *ngIf=\"approved\" type=\"button\" class=\"btn btn-warning mb-2\" (click)=\"openModal(template)\"><i class=\"fa fa-exclamation-circle mr-2\"></i>Update Status</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"card text-center border-dark shadow\">\n      <div class=\"card-header\">\n          <h3 class=\"card-title font-weight-bolder mb-0\">{{request.esr}}</h3>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"container p-3 text-left\">\n            <h6 class=\"card-subtitle mb-1 font-weight-bold\">Department</h6>\n            <p class=\"card-text text-muted\">{{request.department}}</p>\n        </div>\n        <div class=\"container p-3 text-left\">\n            <h6 class=\"card-subtitle mb-1 font-weight-bold\">Location of Project</h6>\n            <p class=\"card-text text-muted\">{{request.locationOfProject}}</p>\n        </div>\n        <div class=\"container p-3 text-left\">\n          <h6 class=\"card-subtitle mb-1 font-weight-bold\">Description</h6>\n          <p class=\"card-text text-muted\">{{request.description}}</p>\n        </div>\n        <div class=\"container p-3 text-left\">\n            <h6 class=\"card-subtitle mb-1 font-weight-bold\">Date Initiated</h6>\n            <p class=\"card-text text-muted\">{{request.dateInitiated | date}}</p>\n        </div>\n        <div class=\"container p-3 text-left\">\n            <h6 class=\"card-subtitle mb-1 font-weight-bold\">Initiated By</h6>\n            <p class=\"card-text text-muted\">{{request.initiatedBy}}</p>\n        </div>\n        <div class=\"container p-3 text-left\">\n            <h6 class=\"card-subtitle mb-1 font-weight-bold\">Engineer Assigned</h6>\n            <p class=\"card-text text-muted\">{{request.engineerAssigned}}</p>\n        </div>\n        <div class=\"container p-3 text-left\">\n            <h6 class=\"card-subtitle mb-1 font-weight-bold\">Requested Date For Completion</h6>\n            <p class=\"card-text text-muted\">{{request.requestedDateForCompletion | date}}</p>\n        </div>\n        <div class=\"container p-3 text-left\">\n          <h6 class=\"card-subtitle mb-1 font-weight-bold\">Status</h6>\n          <p class=\"card-text text-muted\">{{status.value}}</p>\n        </div>\n        <div class=\"container p-3 text-left\">\n          <h6 class=\"card-subtitle mb-1 font-weight-bold\">Priority</h6>\n          <p class=\"card-text text-muted text-center\" style=\"max-width: 40px;\">{{request.priority}}</p>\n        </div>\n      </div>\n      <div class=\"card-footer p-2 font-weight-bold\">\n        <p class=\"mb-0 {{request.approved | StatusPipe}}\">{{request.approved | ApprovedBoolean}}</p>\n      </div>\n    </div>\n</div>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Status Update - {{request.esr}}</h4>\n  </div>\n  <div class=\"modal-body\">\n    <form #statusForm=\"ngForm\" (ngSubmit)=\"changeStatus()\">\n      <select class=\"form-control custom-select-lg\" required name=\"status\" [(ngModel)]=\"model.status\">\n        <option *ngFor=\"let status of statuses\" [attr.selected]=\"request.status\">{{status}}</option>\n      </select>\n      <div class=\"mt-4\">\n        <button type=\"submit\" class=\"btn btn-sm btn-primary mr-2\" (click)=\"updateStatus()\">Apply</button>\n        <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"cancel()\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/request/request-detail/request-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/request/request-detail/request-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: RequestDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailComponent", function() { return RequestDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/request.service */ "./src/app/_services/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _data_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_data/options */ "./src/app/_data/options.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestDetailComponent = /** @class */ (function () {
    function RequestDetailComponent(requestService, route, userService, modalService, router) {
        this.requestService = requestService;
        this.route = route;
        this.userService = userService;
        this.modalService = modalService;
        this.router = router;
        this.statuses = _data_options__WEBPACK_IMPORTED_MODULE_6__["options"].statuses;
        this.model = {};
        this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
    }
    RequestDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.request = data['request'];
            _this.approved = _this.request.approved;
        });
        this.status.setValue(this.request.status);
        this.isAuthorizedToApprove();
    };
    RequestDetailComponent.prototype.isAuthorizedToApprove = function () {
        var _this = this;
        this.userService.isAuthorizedToApprove().subscribe(function (response) {
            _this.authorizedToApprove = response;
        }, function (error) {
            console.log(error);
        });
    };
    RequestDetailComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    RequestDetailComponent.prototype.cancel = function () {
        this.modalRef.hide();
    };
    RequestDetailComponent.prototype.updateStatus = function () {
        this.status.setValue(this.model.status);
    };
    RequestDetailComponent.prototype.changeStatus = function () {
        var _this = this;
        this.model.esr = this.request.esr;
        this.requestService.changeStatus(this.model).subscribe(function (response) {
            _this.modalRef.hide();
        }, function (error) {
            console.log(error);
        });
    };
    RequestDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-detail',
            template: __webpack_require__(/*! ./request-detail.component.html */ "./src/app/request/request-detail/request-detail.component.html"),
            styles: [__webpack_require__(/*! ./request-detail.component.css */ "./src/app/request/request-detail/request-detail.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RequestDetailComponent);
    return RequestDetailComponent;
}());



/***/ }),

/***/ "./src/app/request/request-view/request-view.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/request/request-view/request-view.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  font-size: 14px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/request/request-view/request-view.component.html":
/*!******************************************************************!*\
  !*** ./src/app/request/request-view/request-view.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <button class=\"btn btn-primary btn-sm mb-3\" (click)=\"toggleFilterMode()\"><i class=\"fa fa-filter mr-2\"></i>Toggle Filters</button>\n  <div *ngIf=\"filterMode\" class=\"container mb-3 pb-2 d-flex justify-content-end rounded bg-secondary\">\n    <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"loadRequests()\" novalidate>\n        <div class=\"form-group px-2\">\n          <label for=\"filterESR\" class=\"font-weight-bold\">ESR:</label>\n          <input type=\"text\" id=\"filterESR\" class=\"form-control ml-1 mr-3\" style=\"width: 80px\" name=\"esr\" [(ngModel)]=\"requestParams.esr\">\n          <label for=\"group\" class=\"font-weight-bold\">Dept: </label>\n          <select class=\"form-control ml-1 mr-3\" style=\"width: 130px\" id=\"group\" [(ngModel)]=\"requestParams.department\" name=\"department\">\n            <option *ngFor=\"let department of departments\" [value]=\"department\">\n              {{department}}\n            </option>\n          </select>\n          <label for=\"locationOfProject\" class=\"font-weight-bold\">Location:</label>\n          <select class=\"form-control ml-1 mr-3\" style=\"width: 130px\" id=\"locationOfProject\" [(ngModel)]=\"requestParams.locationOfProject\" name=\"locationOfProject\">\n            <option *ngFor=\"let location of locations\" [value]=\"location\">\n              {{location}}\n            </option>\n          </select>\n          <label for=\"engineerAssigned\" class=\"font-weight-bold\">Engineeer:</label>\n          <select class=\"form-control ml-1 mr-3\" style=\"width: 130px\" id=\"engineerAssigned\" [(ngModel)]=\"requestParams.engineerAssigned\" name=\"engineerAssigned\">\n            <option *ngFor=\"let engineer of engineersList\" [value]=\"engineer.value\">\n              {{engineer.key}}\n            </option>\n          </select>\n          <div class=\"form-check ml-2\">\n              <input class=\"form-check-input\" type=\"checkbox\"  id=\"approved\" name=\"approved\" [(ngModel)]=\"requestParams.approved\">\n              <label class=\"form-check-label font-weight-bold\" for=\"approved\">\n                Approved\n              </label>\n            </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary btn-sm ml-4\">Apply Filters</button>\n        <button type=\"button\" class=\"btn btn-secondary btn-sm\" style=\"margin-left:10px\" (click)=\"resetFilters()\">Reset Filter</button>\n      </form>\n      <br>\n  </div>\n<table class=\"table table-striped table-hover table-sm table-bordered text-center shadow\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">View</th>\n      <th scope=\"col\">ESR</th>\n      <th scope=\"col\">Date Initiated</th>\n      <th scope=\"col\">Requested Completion Date</th>\n      <th scope=\"col\">Initiated By</th>\n      <th scope=\"col\">Department</th>\n      <th scope=\"col\">Location</th>\n      <th scope=\"col\">Approved</th>\n      <th scope=\"col\">Engineer</th>\n      <th scope=\"col\">Status</th>\n      <th scope=\"col\">Date Completed</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let request of requests\">\n      <th><button class=\"btn btn-link p-0\" [routerLink]=\"['/requests', request.esr]\"><i class=\"fa fa-plus-square\"></i></button></th>\n      <th>{{request.esr}}</th>\n      <td>{{request.dateInitiated | date}}</td>\n      <td>{{request.requestedDateForCompletion | date}}</td>\n      <td>{{request.initiatedBy}}</td>\n      <td>{{request.department}}</td>\n      <td>{{request.locationOfProject}}</td>\n      <td><i class=\"{{request.approved | IsApprovedPipe}}\"></i></td>\n      <td>{{request.engineerAssigned}}</td>\n      <td>{{request.status}}</td>\n      <td>{{request.dateCompleted}}</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n\n<div class=\"container mb-5\">\n  <div class=\"row align-items-center\">\n    <!-- <div class=\"col-sm\">\n       *ngIf=\"authorizedToCreate\"\n        <button type=\"button\" class=\"btn btn-success btn-sm\" [routerLink]=\"['/request-create']\"><i class=\"fa fa-plus-circle mr-2\"></i>Create New Request</button>\n    </div> -->\n    <div class=\"col-sm\">\n    </div>\n    <div class=\"col-sm d-flex justify-content-end p-0\">\n      <form class=\"form-inline p-0\" #form=\"ngForm\" (ngSubmit)=\"loadRequests()\" novalidate>\n          <label for=\"orderBy\" class=\"font-weight-bold mr-1\">Order By:</label>\n          <select class=\"form-control ml-1 p-0\" style=\"width: 100px\" id=\"orderBy\" [(ngModel)]=\"requestParams.orderBy\" name=\"orderBy\">\n              <option *ngFor=\"let field of orderList\" [value]=\"field.value\">\n                {{field.display}}\n              </option>\n            </select>\n            <button type=\"submit\" class=\"btn btn-primary btn-sm mr-2 ml-4\">Apply</button>\n      </form>\n    </div>\n  </div>\n</div>\n<div class=\"d-flex justify-content-center\">\n  <pagination [boundaryLinks]=\"true\"\n    [totalItems]=\"pagination.totalItems\"\n    [(ngModel)]=\"pagination.currentPage\"\n    (pageChanged)=\"pageChanged($event)\"\n    [itemsPerPage]=\"pagination.itemsPerPage\"\n    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n  </pagination>\n</div>\n<div class=\"text-center mt-2\">\n    <h6>{{pagination.totalItems}} Total Service Requests</h6>\n  </div>\n"

/***/ }),

/***/ "./src/app/request/request-view/request-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/request/request-view/request-view.component.ts ***!
  \****************************************************************/
/*! exports provided: RequestViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestViewComponent", function() { return RequestViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/request.service */ "./src/app/_services/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_data_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_data/options */ "./src/app/_data/options.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequestViewComponent = /** @class */ (function () {
    function RequestViewComponent(requestService, route, userService, alertify) {
        this.requestService = requestService;
        this.route = route;
        this.userService = userService;
        this.alertify = alertify;
        this.departments = src_app_data_options__WEBPACK_IMPORTED_MODULE_3__["options"].departments;
        this.locations = src_app_data_options__WEBPACK_IMPORTED_MODULE_3__["options"].locations;
        this.requestParams = {};
        this.orderList = [{ value: 'esr', display: 'ESR' },
            { value: 'dateInitiated', display: 'Date Initiated' },
            { value: 'approved', display: 'Approved' }];
        this.filterMode = false;
    }
    RequestViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.requests = data['requests'].result;
            _this.pagination = data['requests'].pagination;
        });
        this.getEngineers();
        this.isAuthorized();
        this.requestParams.department = '';
        this.requestParams.locationOfProject = '';
        this.requestParams.engineerAssigned = '';
        this.requestParams.esr = '';
        this.requestParams.approved = false;
        this.requestParams.orderBy = 'esr';
    };
    RequestViewComponent.prototype.isAuthorized = function () {
        var _this = this;
        this.userService.isAuthorizedToCreate().subscribe(function (response) {
            _this.authorizedToCreate = response;
        }, function (error) {
            console.log(error);
        });
    };
    RequestViewComponent.prototype.resetFilters = function () {
        this.requestParams.department = '';
        this.requestParams.esr = '';
        this.requestParams.approved = false;
        this.requestParams.locationOfProject = '';
        this.requestParams.engineerAssigned = '';
        this.loadRequests();
    };
    RequestViewComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadRequests();
    };
    RequestViewComponent.prototype.getEngineers = function () {
        var _this = this;
        this.userService.getGroupMembers().subscribe(function (response) {
            _this.engineersList = response;
        }, function (error) {
            _this.alertify.error('Error retrieving list of engineers.');
        });
    };
    RequestViewComponent.prototype.loadRequests = function () {
        var _this = this;
        this.requestService.getRequests(this.pagination.currentPage, this.pagination.itemsPerPage, this.requestParams)
            .subscribe(function (res) {
            _this.requests = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            console.log(error);
        });
    };
    RequestViewComponent.prototype.toggleFilterMode = function () {
        this.filterMode = !this.filterMode;
    };
    RequestViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-view',
            template: __webpack_require__(/*! ./request-view.component.html */ "./src/app/request/request-view/request-view.component.html"),
            styles: [__webpack_require__(/*! ./request-view.component.css */ "./src/app/request/request-view/request-view.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]])
    ], RequestViewComponent);
    return RequestViewComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _request_request_view_request_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request/request-view/request-view.component */ "./src/app/request/request-view/request-view.component.ts");
/* harmony import */ var _request_request_create_request_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request/request-create/request-create.component */ "./src/app/request/request-create/request-create.component.ts");
/* harmony import */ var _request_request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request/request-detail/request-detail.component */ "./src/app/request/request-detail/request-detail.component.ts");
/* harmony import */ var _resolvers_request_detail_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_resolvers/request-detail.resolver */ "./src/app/_resolvers/request-detail.resolver.ts");
/* harmony import */ var _resolvers_request_view_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_resolvers/request-view.resolver */ "./src/app/_resolvers/request-view.resolver.ts");
/* harmony import */ var _request_request_approve_request_approve_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request/request-approve/request-approve.component */ "./src/app/request/request-approve/request-approve.component.ts");
/* harmony import */ var _resolvers_request_approve_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_resolvers/request-approve.resolver */ "./src/app/_resolvers/request-approve.resolver.ts");
/* harmony import */ var _resolvers_request_assigned_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_resolvers/request-assigned.resolver */ "./src/app/_resolvers/request-assigned.resolver.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");










var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], resolve: { requests: _resolvers_request_assigned_resolver__WEBPACK_IMPORTED_MODULE_8__["RequestAssignedResolver"] } },
    { path: 'requests', component: _request_request_view_request_view_component__WEBPACK_IMPORTED_MODULE_1__["RequestViewComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], resolve: { requests: _resolvers_request_view_resolver__WEBPACK_IMPORTED_MODULE_5__["RequestViewResolver"] } },
    { path: 'request-create', component: _request_request_create_request_create_component__WEBPACK_IMPORTED_MODULE_2__["RequestCreateComponent"] },
    { path: 'requests/:esr', component: _request_request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_3__["RequestDetailComponent"], resolve: { request: _resolvers_request_detail_resolver__WEBPACK_IMPORTED_MODULE_4__["RequestDetailResolver"] } },
    { path: 'request-approve/:esr', component: _request_request_approve_request_approve_component__WEBPACK_IMPORTED_MODULE_6__["RequestApproveComponent"], resolve: { request: _resolvers_request_approve_resolver__WEBPACK_IMPORTED_MODULE_7__["RequestApproveResolver"] } },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:5000/api/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mlinden\Desktop\Code\App Dev\lucid-engineering\Engineering-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map