(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/CommonService.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/CommonService.ts ***!
  \*****************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _http_HTTPService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http/HTTPService */ "./src/app/shared/http/HTTPService.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CommonService = /*@__PURE__*/ (function () {
    function CommonService(httpService) {
        this.httpService = httpService;
    }
    CommonService.prototype.bindDropDown = function (baseUrl, valueKey, viewValueKey) {
        var resArray = [];
        this.httpService.get(baseUrl + 'view', '').subscribe(function (responseData) {
            //console.log(responseData);
            if (responseData['status'] == 1) {
                var json = responseData['details'];
                $.each(json, function (index, object) {
                    resArray.push({ value: object[valueKey], viewValue: object[viewValueKey] });
                });
            }
        }, function (error) {
            //console.log(error);
        });
        return resArray;
    };
    CommonService.prototype.formateDate = function (date) {
        return date.split(" ")[1].split(",")[0] + "-" + date.split(" ")[0] + "-" + date.split(" ")[2];
    };
    CommonService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function CommonService_Factory() { return new CommonService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_http_HTTPService__WEBPACK_IMPORTED_MODULE_0__["HTTPService"])); }, token: CommonService, providedIn: "root" });
    return CommonService;
}());



/***/ })

}]);