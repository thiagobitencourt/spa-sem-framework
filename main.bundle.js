/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/components/pagina-dois/pagina-dois-component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/pagina-dois/pagina-dois-component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    function __html_es6_template_loader__() {\n      return `<h2>Você está agora na página 2!</h2>`;\n    }\n    module.exports = function(context) {\n      return __html_es6_template_loader__.call(context, context);\n    }\n  \n\n//# sourceURL=webpack:///./src/app/components/pagina-dois/pagina-dois-component.html?");

/***/ }),

/***/ "./src/app/components/pagina-dois/pagina-dois-component.js":
/*!*****************************************************************!*\
  !*** ./src/app/components/pagina-dois/pagina-dois-component.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PaginaDoisComponent; });\n/* harmony import */ var _pagina_dois_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagina-dois-component.html */ \"./src/app/components/pagina-dois/pagina-dois-component.html\");\n/* harmony import */ var _pagina_dois_component_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pagina_dois_component_html__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass PaginaDoisComponent {\n    constructor(container) {\n        this.container = container;\n    }\n\n    render() {\n        this.container.innerHTML = _pagina_dois_component_html__WEBPACK_IMPORTED_MODULE_0___default()();\n    }\n}\n\n//# sourceURL=webpack:///./src/app/components/pagina-dois/pagina-dois-component.js?");

/***/ }),

/***/ "./src/app/components/pagina-tres/pagina-tres-component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/pagina-tres/pagina-tres-component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    function __html_es6_template_loader__() {\n      return `<h3>Bem vendo a terceira página da aplicação!</h3>`;\n    }\n    module.exports = function(context) {\n      return __html_es6_template_loader__.call(context, context);\n    }\n  \n\n//# sourceURL=webpack:///./src/app/components/pagina-tres/pagina-tres-component.html?");

/***/ }),

/***/ "./src/app/components/pagina-tres/pagina-tres-component.js":
/*!*****************************************************************!*\
  !*** ./src/app/components/pagina-tres/pagina-tres-component.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PaginaTresComponent; });\n/* harmony import */ var _pagina_tres_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagina-tres-component.html */ \"./src/app/components/pagina-tres/pagina-tres-component.html\");\n/* harmony import */ var _pagina_tres_component_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pagina_tres_component_html__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass PaginaTresComponent {\n    constructor(container) {\n        this.container = container;\n    }\n\n    render() {\n        this.container.innerHTML = _pagina_tres_component_html__WEBPACK_IMPORTED_MODULE_0___default()();\n    }\n}\n\n//# sourceURL=webpack:///./src/app/components/pagina-tres/pagina-tres-component.js?");

/***/ }),

/***/ "./src/app/components/pagina-um/pagina-um-component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/pagina-um/pagina-um-component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    function __html_es6_template_loader__() {\n      return `<section>\n    <h1>Este é o componente da página um!</h1>\n    <p>Renderizado em ${ this.date }</p>\n</section>`;\n    }\n    module.exports = function(context) {\n      return __html_es6_template_loader__.call(context, context);\n    }\n  \n\n//# sourceURL=webpack:///./src/app/components/pagina-um/pagina-um-component.html?");

/***/ }),

/***/ "./src/app/components/pagina-um/pagina-um-component.js":
/*!*************************************************************!*\
  !*** ./src/app/components/pagina-um/pagina-um-component.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PaginaUmComponent; });\n/* harmony import */ var _pagina_um_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagina-um-component.html */ \"./src/app/components/pagina-um/pagina-um-component.html\");\n/* harmony import */ var _pagina_um_component_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pagina_um_component_html__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass PaginaUmComponent {\n    constructor(container) {\n        this.container = container;\n    }\n\n    render() {\n        this.container.innerHTML = _pagina_um_component_html__WEBPACK_IMPORTED_MODULE_0___default()({ date: new Date() });\n    }\n}\n\n//# sourceURL=webpack:///./src/app/components/pagina-um/pagina-um-component.js?");

/***/ }),

/***/ "./src/app/router-service.js":
/*!***********************************!*\
  !*** ./src/app/router-service.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RouterService; });\nclass RouterService {\n    constructor(routes = [], selector = '#root') {\n        this.routes = routes;\n        this.container = document.querySelector(selector);\n        this.initRouter();\n    }\n\n    initRouter() {\n        window.addEventListener(\"hashchange\", this.handleRouteChange.bind(this), false);\n    }\n\n    handleRouteChange({ newURL }) {\n        const routePath = `#/${ newURL.split('#/')[1] }`;\n        const Component = this.routes.find(route => route.path === routePath).component;\n        new Component(this.container).render();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/app/router-service.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_router_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/router-service */ \"./src/app/router-service.js\");\n/* harmony import */ var _app_components_pagina_um_pagina_um_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/components/pagina-um/pagina-um-component */ \"./src/app/components/pagina-um/pagina-um-component.js\");\n/* harmony import */ var _app_components_pagina_dois_pagina_dois_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/components/pagina-dois/pagina-dois-component */ \"./src/app/components/pagina-dois/pagina-dois-component.js\");\n/* harmony import */ var _app_components_pagina_tres_pagina_tres_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/components/pagina-tres/pagina-tres-component */ \"./src/app/components/pagina-tres/pagina-tres-component.js\");\n\n\n\n\n\nnew _app_router_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([\n    {\n        path: '#/pagina-um',\n        component: _app_components_pagina_um_pagina_um_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    {\n        path: '#/pagina-dois',\n        component: _app_components_pagina_dois_pagina_dois_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    {\n        path: '#/pagina-tres',\n        component: _app_components_pagina_tres_pagina_tres_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }\n]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });