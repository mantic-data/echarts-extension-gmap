(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("echarts"));
	else if(typeof define === 'function' && define.amd)
		define(["echarts"], factory);
	else if(typeof exports === 'object')
		exports["amap"] = factory(require("echarts"));
	else
		root["amap"] = factory(root["echarts"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_echarts__) {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, dependencies, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"echarts-extension-amap\\\",\\\"version\\\":\\\"1.1.0\\\",\\\"description\\\":\\\"An AMap(https://lbs.amap.com) extension for echarts(https://github.com/apache/incubator-echarts)\\\",\\\"main\\\":\\\"dist/echarts-extension-amap.min.js\\\",\\\"scripts\\\":{\\\"build\\\":\\\"webpack -p\\\",\\\"dev\\\":\\\"webpack -d\\\",\\\"test\\\":\\\"echo \\\\\\\"Error: no test specified\\\\\\\" && exit 1\\\"},\\\"repository\\\":{\\\"type\\\":\\\"git\\\",\\\"url\\\":\\\"git+https://github.com/plainheart/echarts-extension-amap.git\\\"},\\\"keywords\\\":[\\\"echarts\\\",\\\"amap\\\",\\\"autonavi\\\",\\\"echarts-extention\\\",\\\"data-visualization\\\",\\\"map\\\",\\\"gaode\\\"],\\\"author\\\":\\\"plainheart\\\",\\\"license\\\":\\\"MIT\\\",\\\"bugs\\\":{\\\"url\\\":\\\"https://github.com/plainheart/echarts-extension-amap/issues\\\"},\\\"homepage\\\":\\\"https://github.com/plainheart/echarts-extension-amap#readme\\\",\\\"devDependencies\\\":{\\\"webpack\\\":\\\"^4.29.5\\\",\\\"webpack-cli\\\":\\\"^3.2.3\\\"},\\\"dependencies\\\":{\\\"echarts\\\":\\\"^4.7.0\\\"}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlLmpzb24uanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./package.json\n");

/***/ }),

/***/ "./src/AMapCoordSys.js":
/*!*****************************!*\
  !*** ./src/AMapCoordSys.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ \"echarts\");\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_0__);\n/* global AMap */\n\n\n\nfunction AMapCoordSys(amap, api) {\n  this._amap = amap;\n  this.dimensions = [\"lng\", \"lat\"];\n  this._mapOffset = [0, 0];\n  this._api = api;\n}\n\nAMapCoordSys.prototype.dimensions = [\"lng\", \"lat\"];\n\nAMapCoordSys.prototype.setZoom = function(zoom) {\n  this._zoom = zoom;\n};\n\nAMapCoordSys.prototype.setCenter = function(center) {\n  this._center = this._amap.lnglatToPixel(\n    new AMap.LngLat(center[0], center[1])\n  );\n};\n\nAMapCoordSys.prototype.setMapOffset = function(mapOffset) {\n  this._mapOffset = mapOffset;\n};\n\nAMapCoordSys.prototype.getAMap = function() {\n  return this._amap;\n};\n\nAMapCoordSys.prototype.dataToPoint = function(data) {\n  var lnglat = new AMap.LngLat(data[0], data[1]);\n  var px = this._amap.lngLatToContainer(lnglat);\n  var mapOffset = this._mapOffset;\n  return [px.x - mapOffset[0], px.y - mapOffset[1]];\n};\n\nAMapCoordSys.prototype.pointToData = function(pt) {\n  var mapOffset = this._mapOffset;\n  var lnglat = this._amap.containerToLngLat(\n    AMap.Pixel(pt[0] + mapOffset[0], pt[1] + mapOffset[1])\n  );\n  return [lnglat.lng, lnglat.lat];\n};\n\nAMapCoordSys.prototype.getViewRect = function() {\n  var api = this._api;\n  return new echarts__WEBPACK_IMPORTED_MODULE_0__[\"graphic\"].BoundingRect(0, 0, api.getWidth(), api.getHeight());\n};\n\nAMapCoordSys.prototype.getRoamTransform = function() {\n  return echarts__WEBPACK_IMPORTED_MODULE_0__[\"matrix\"].create();\n};\n\nAMapCoordSys.prototype.prepareCustoms = function(data) {\n  var rect = this.getViewRect();\n  return {\n    coordSys: {\n      // The name exposed to user is always 'cartesian2d' but not 'grid'.\n      type: \"amap\",\n      x: rect.x,\n      y: rect.y,\n      width: rect.width,\n      height: rect.height\n    },\n    api: {\n      coord: echarts__WEBPACK_IMPORTED_MODULE_0__[\"util\"].bind(this.dataToPoint, this),\n      size: echarts__WEBPACK_IMPORTED_MODULE_0__[\"util\"].bind(dataToCoordSize, this)\n    }\n  };\n};\n\nfunction dataToCoordSize(dataSize, dataItem) {\n  dataItem = dataItem || [0, 0];\n  return echarts__WEBPACK_IMPORTED_MODULE_0__[\"util\"].map(\n    [0, 1],\n    function(dimIdx) {\n      var val = dataItem[dimIdx];\n      var halfSize = dataSize[dimIdx] / 2;\n      var p1 = [];\n      var p2 = [];\n      p1[dimIdx] = val - halfSize;\n      p2[dimIdx] = val + halfSize;\n      p1[1 - dimIdx] = p2[1 - dimIdx] = dataItem[1 - dimIdx];\n      return Math.abs(\n        this.dataToPoint(p1)[dimIdx] - this.dataToPoint(p2)[dimIdx]\n      );\n    },\n    this\n  );\n}\n\n// For deciding which dimensions to use when creating list data\nAMapCoordSys.dimensions = AMapCoordSys.prototype.dimensions;\n\nfunction addCssRule(selector, rules, index) {\n  var sheet = document.getElementsByClassName(\"AMap.style\")[0].sheet;\n  index = index || 0;\n  if (sheet.insertRule) {\n    sheet.insertRule(selector + \"{\" + rules + \"}\", index);\n  } else if (sheet.addRule) {\n    sheet.addRule(selector, rules, index);\n  }\n}\n\nAMapCoordSys.create = function(ecModel, api) {\n  var amapCoordSys;\n  var root = api.getDom();\n\n  // TODO Dispose\n  ecModel.eachComponent(\"amap\", function(amapModel) {\n    var painter = api.getZr().painter;\n    var viewportRoot = painter.getViewportRoot();\n    if (typeof AMap === \"undefined\") {\n      throw new Error(\"AMap api is not loaded\");\n    }\n    if (amapCoordSys) {\n      throw new Error(\"Only one amap component can exist\");\n    }\n    var amap = amapModel.getAMap();\n    if (!amap) {\n      // Not support IE8\n      var amapRoot = root.querySelector(\".ec-extension-amap\");\n      if (amapRoot) {\n        // Reset viewport left and top, which will be changed\n        // in moving handler in AMapView\n        viewportRoot.style.left = \"0px\";\n        viewportRoot.style.top = \"0px\";\n        root.removeChild(amapRoot);\n      }\n      amapRoot = document.createElement(\"div\");\n      amapRoot.style.cssText = \"width:100%;height:100%\";\n      // Not support IE8\n      amapRoot.classList.add(\"ec-extension-amap\");\n      root.appendChild(amapRoot);\n\n      var options = amapModel.get();\n      amap = new AMap.Map(amapRoot, options);\n      amapModel.setAMap(amap);\n\n      var echartsLayer = new AMap.CustomLayer(viewportRoot, {\n        zIndex: options.echartsLayerZIndex\n      });\n      amapModel.setEchartsLayer(echartsLayer);\n      amap.add(echartsLayer);\n\n      options.renderOnMoving && viewportRoot.parentNode.classList.add('not-zoom');\n\n      addCssRule(\".amap-e.not-zoom\", \"left: 0!important;top: 0!important;\", Infinity);\n\n      // Override\n      painter.getViewportRootOffset = function() {\n        return { offsetLeft: 0, offsetTop: 0 };\n      };\n    }\n\n    var center = amapModel.get(\"center\");\n    var zoom = amapModel.get(\"zoom\");\n    if (center && zoom) {\n      var amapCenter = amap.getCenter();\n      var amapZoom = amap.getZoom();\n      var centerOrZoomChanged = amapModel.centerOrZoomChanged([amapCenter.lng, amapCenter.lat], amapZoom);\n      if (centerOrZoomChanged) {\n        var pt = new AMap.LngLat(center[0], center[1]);\n        amap.setZoomAndCenter(zoom, pt);\n      }\n    }\n\n    amapCoordSys = new AMapCoordSys(amap, api);\n    amapCoordSys.setMapOffset(amapModel.__mapOffset || [0, 0]);\n    amapCoordSys.setZoom(zoom);\n    amapCoordSys.setCenter(center);\n\n    amapModel.coordinateSystem = amapCoordSys;\n  });\n\n  ecModel.eachSeries(function(seriesModel) {\n    if (seriesModel.get(\"coordinateSystem\") === \"amap\") {\n      seriesModel.coordinateSystem = amapCoordSys;\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AMapCoordSys);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQU1hcENvb3JkU3lzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL0FNYXBDb29yZFN5cy5qcz8xZDUzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBBTWFwICovXG5cbmltcG9ydCB7IHV0aWwgYXMgenJVdGlsLCBncmFwaGljLCBtYXRyaXggfSBmcm9tIFwiZWNoYXJ0c1wiO1xuXG5mdW5jdGlvbiBBTWFwQ29vcmRTeXMoYW1hcCwgYXBpKSB7XG4gIHRoaXMuX2FtYXAgPSBhbWFwO1xuICB0aGlzLmRpbWVuc2lvbnMgPSBbXCJsbmdcIiwgXCJsYXRcIl07XG4gIHRoaXMuX21hcE9mZnNldCA9IFswLCAwXTtcbiAgdGhpcy5fYXBpID0gYXBpO1xufVxuXG5BTWFwQ29vcmRTeXMucHJvdG90eXBlLmRpbWVuc2lvbnMgPSBbXCJsbmdcIiwgXCJsYXRcIl07XG5cbkFNYXBDb29yZFN5cy5wcm90b3R5cGUuc2V0Wm9vbSA9IGZ1bmN0aW9uKHpvb20pIHtcbiAgdGhpcy5fem9vbSA9IHpvb207XG59O1xuXG5BTWFwQ29vcmRTeXMucHJvdG90eXBlLnNldENlbnRlciA9IGZ1bmN0aW9uKGNlbnRlcikge1xuICB0aGlzLl9jZW50ZXIgPSB0aGlzLl9hbWFwLmxuZ2xhdFRvUGl4ZWwoXG4gICAgbmV3IEFNYXAuTG5nTGF0KGNlbnRlclswXSwgY2VudGVyWzFdKVxuICApO1xufTtcblxuQU1hcENvb3JkU3lzLnByb3RvdHlwZS5zZXRNYXBPZmZzZXQgPSBmdW5jdGlvbihtYXBPZmZzZXQpIHtcbiAgdGhpcy5fbWFwT2Zmc2V0ID0gbWFwT2Zmc2V0O1xufTtcblxuQU1hcENvb3JkU3lzLnByb3RvdHlwZS5nZXRBTWFwID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9hbWFwO1xufTtcblxuQU1hcENvb3JkU3lzLnByb3RvdHlwZS5kYXRhVG9Qb2ludCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgdmFyIGxuZ2xhdCA9IG5ldyBBTWFwLkxuZ0xhdChkYXRhWzBdLCBkYXRhWzFdKTtcbiAgdmFyIHB4ID0gdGhpcy5fYW1hcC5sbmdMYXRUb0NvbnRhaW5lcihsbmdsYXQpO1xuICB2YXIgbWFwT2Zmc2V0ID0gdGhpcy5fbWFwT2Zmc2V0O1xuICByZXR1cm4gW3B4LnggLSBtYXBPZmZzZXRbMF0sIHB4LnkgLSBtYXBPZmZzZXRbMV1dO1xufTtcblxuQU1hcENvb3JkU3lzLnByb3RvdHlwZS5wb2ludFRvRGF0YSA9IGZ1bmN0aW9uKHB0KSB7XG4gIHZhciBtYXBPZmZzZXQgPSB0aGlzLl9tYXBPZmZzZXQ7XG4gIHZhciBsbmdsYXQgPSB0aGlzLl9hbWFwLmNvbnRhaW5lclRvTG5nTGF0KFxuICAgIEFNYXAuUGl4ZWwocHRbMF0gKyBtYXBPZmZzZXRbMF0sIHB0WzFdICsgbWFwT2Zmc2V0WzFdKVxuICApO1xuICByZXR1cm4gW2xuZ2xhdC5sbmcsIGxuZ2xhdC5sYXRdO1xufTtcblxuQU1hcENvb3JkU3lzLnByb3RvdHlwZS5nZXRWaWV3UmVjdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYXBpID0gdGhpcy5fYXBpO1xuICByZXR1cm4gbmV3IGdyYXBoaWMuQm91bmRpbmdSZWN0KDAsIDAsIGFwaS5nZXRXaWR0aCgpLCBhcGkuZ2V0SGVpZ2h0KCkpO1xufTtcblxuQU1hcENvb3JkU3lzLnByb3RvdHlwZS5nZXRSb2FtVHJhbnNmb3JtID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBtYXRyaXguY3JlYXRlKCk7XG59O1xuXG5BTWFwQ29vcmRTeXMucHJvdG90eXBlLnByZXBhcmVDdXN0b21zID0gZnVuY3Rpb24oZGF0YSkge1xuICB2YXIgcmVjdCA9IHRoaXMuZ2V0Vmlld1JlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICBjb29yZFN5czoge1xuICAgICAgLy8gVGhlIG5hbWUgZXhwb3NlZCB0byB1c2VyIGlzIGFsd2F5cyAnY2FydGVzaWFuMmQnIGJ1dCBub3QgJ2dyaWQnLlxuICAgICAgdHlwZTogXCJhbWFwXCIsXG4gICAgICB4OiByZWN0LngsXG4gICAgICB5OiByZWN0LnksXG4gICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgICB9LFxuICAgIGFwaToge1xuICAgICAgY29vcmQ6IHpyVXRpbC5iaW5kKHRoaXMuZGF0YVRvUG9pbnQsIHRoaXMpLFxuICAgICAgc2l6ZTogenJVdGlsLmJpbmQoZGF0YVRvQ29vcmRTaXplLCB0aGlzKVxuICAgIH1cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGRhdGFUb0Nvb3JkU2l6ZShkYXRhU2l6ZSwgZGF0YUl0ZW0pIHtcbiAgZGF0YUl0ZW0gPSBkYXRhSXRlbSB8fCBbMCwgMF07XG4gIHJldHVybiB6clV0aWwubWFwKFxuICAgIFswLCAxXSxcbiAgICBmdW5jdGlvbihkaW1JZHgpIHtcbiAgICAgIHZhciB2YWwgPSBkYXRhSXRlbVtkaW1JZHhdO1xuICAgICAgdmFyIGhhbGZTaXplID0gZGF0YVNpemVbZGltSWR4XSAvIDI7XG4gICAgICB2YXIgcDEgPSBbXTtcbiAgICAgIHZhciBwMiA9IFtdO1xuICAgICAgcDFbZGltSWR4XSA9IHZhbCAtIGhhbGZTaXplO1xuICAgICAgcDJbZGltSWR4XSA9IHZhbCArIGhhbGZTaXplO1xuICAgICAgcDFbMSAtIGRpbUlkeF0gPSBwMlsxIC0gZGltSWR4XSA9IGRhdGFJdGVtWzEgLSBkaW1JZHhdO1xuICAgICAgcmV0dXJuIE1hdGguYWJzKFxuICAgICAgICB0aGlzLmRhdGFUb1BvaW50KHAxKVtkaW1JZHhdIC0gdGhpcy5kYXRhVG9Qb2ludChwMilbZGltSWR4XVxuICAgICAgKTtcbiAgICB9LFxuICAgIHRoaXNcbiAgKTtcbn1cblxuLy8gRm9yIGRlY2lkaW5nIHdoaWNoIGRpbWVuc2lvbnMgdG8gdXNlIHdoZW4gY3JlYXRpbmcgbGlzdCBkYXRhXG5BTWFwQ29vcmRTeXMuZGltZW5zaW9ucyA9IEFNYXBDb29yZFN5cy5wcm90b3R5cGUuZGltZW5zaW9ucztcblxuZnVuY3Rpb24gYWRkQ3NzUnVsZShzZWxlY3RvciwgcnVsZXMsIGluZGV4KSB7XG4gIHZhciBzaGVldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJBTWFwLnN0eWxlXCIpWzBdLnNoZWV0O1xuICBpbmRleCA9IGluZGV4IHx8IDA7XG4gIGlmIChzaGVldC5pbnNlcnRSdWxlKSB7XG4gICAgc2hlZXQuaW5zZXJ0UnVsZShzZWxlY3RvciArIFwie1wiICsgcnVsZXMgKyBcIn1cIiwgaW5kZXgpO1xuICB9IGVsc2UgaWYgKHNoZWV0LmFkZFJ1bGUpIHtcbiAgICBzaGVldC5hZGRSdWxlKHNlbGVjdG9yLCBydWxlcywgaW5kZXgpO1xuICB9XG59XG5cbkFNYXBDb29yZFN5cy5jcmVhdGUgPSBmdW5jdGlvbihlY01vZGVsLCBhcGkpIHtcbiAgdmFyIGFtYXBDb29yZFN5cztcbiAgdmFyIHJvb3QgPSBhcGkuZ2V0RG9tKCk7XG5cbiAgLy8gVE9ETyBEaXNwb3NlXG4gIGVjTW9kZWwuZWFjaENvbXBvbmVudChcImFtYXBcIiwgZnVuY3Rpb24oYW1hcE1vZGVsKSB7XG4gICAgdmFyIHBhaW50ZXIgPSBhcGkuZ2V0WnIoKS5wYWludGVyO1xuICAgIHZhciB2aWV3cG9ydFJvb3QgPSBwYWludGVyLmdldFZpZXdwb3J0Um9vdCgpO1xuICAgIGlmICh0eXBlb2YgQU1hcCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQU1hcCBhcGkgaXMgbm90IGxvYWRlZFwiKTtcbiAgICB9XG4gICAgaWYgKGFtYXBDb29yZFN5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25seSBvbmUgYW1hcCBjb21wb25lbnQgY2FuIGV4aXN0XCIpO1xuICAgIH1cbiAgICB2YXIgYW1hcCA9IGFtYXBNb2RlbC5nZXRBTWFwKCk7XG4gICAgaWYgKCFhbWFwKSB7XG4gICAgICAvLyBOb3Qgc3VwcG9ydCBJRThcbiAgICAgIHZhciBhbWFwUm9vdCA9IHJvb3QucXVlcnlTZWxlY3RvcihcIi5lYy1leHRlbnNpb24tYW1hcFwiKTtcbiAgICAgIGlmIChhbWFwUm9vdCkge1xuICAgICAgICAvLyBSZXNldCB2aWV3cG9ydCBsZWZ0IGFuZCB0b3AsIHdoaWNoIHdpbGwgYmUgY2hhbmdlZFxuICAgICAgICAvLyBpbiBtb3ZpbmcgaGFuZGxlciBpbiBBTWFwVmlld1xuICAgICAgICB2aWV3cG9ydFJvb3Quc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICAgIHZpZXdwb3J0Um9vdC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICByb290LnJlbW92ZUNoaWxkKGFtYXBSb290KTtcbiAgICAgIH1cbiAgICAgIGFtYXBSb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGFtYXBSb290LnN0eWxlLmNzc1RleHQgPSBcIndpZHRoOjEwMCU7aGVpZ2h0OjEwMCVcIjtcbiAgICAgIC8vIE5vdCBzdXBwb3J0IElFOFxuICAgICAgYW1hcFJvb3QuY2xhc3NMaXN0LmFkZChcImVjLWV4dGVuc2lvbi1hbWFwXCIpO1xuICAgICAgcm9vdC5hcHBlbmRDaGlsZChhbWFwUm9vdCk7XG5cbiAgICAgIHZhciBvcHRpb25zID0gYW1hcE1vZGVsLmdldCgpO1xuICAgICAgYW1hcCA9IG5ldyBBTWFwLk1hcChhbWFwUm9vdCwgb3B0aW9ucyk7XG4gICAgICBhbWFwTW9kZWwuc2V0QU1hcChhbWFwKTtcblxuICAgICAgdmFyIGVjaGFydHNMYXllciA9IG5ldyBBTWFwLkN1c3RvbUxheWVyKHZpZXdwb3J0Um9vdCwge1xuICAgICAgICB6SW5kZXg6IG9wdGlvbnMuZWNoYXJ0c0xheWVyWkluZGV4XG4gICAgICB9KTtcbiAgICAgIGFtYXBNb2RlbC5zZXRFY2hhcnRzTGF5ZXIoZWNoYXJ0c0xheWVyKTtcbiAgICAgIGFtYXAuYWRkKGVjaGFydHNMYXllcik7XG5cbiAgICAgIG9wdGlvbnMucmVuZGVyT25Nb3ZpbmcgJiYgdmlld3BvcnRSb290LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnbm90LXpvb20nKTtcblxuICAgICAgYWRkQ3NzUnVsZShcIi5hbWFwLWUubm90LXpvb21cIiwgXCJsZWZ0OiAwIWltcG9ydGFudDt0b3A6IDAhaW1wb3J0YW50O1wiLCBJbmZpbml0eSk7XG5cbiAgICAgIC8vIE92ZXJyaWRlXG4gICAgICBwYWludGVyLmdldFZpZXdwb3J0Um9vdE9mZnNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4geyBvZmZzZXRMZWZ0OiAwLCBvZmZzZXRUb3A6IDAgfTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGNlbnRlciA9IGFtYXBNb2RlbC5nZXQoXCJjZW50ZXJcIik7XG4gICAgdmFyIHpvb20gPSBhbWFwTW9kZWwuZ2V0KFwiem9vbVwiKTtcbiAgICBpZiAoY2VudGVyICYmIHpvb20pIHtcbiAgICAgIHZhciBhbWFwQ2VudGVyID0gYW1hcC5nZXRDZW50ZXIoKTtcbiAgICAgIHZhciBhbWFwWm9vbSA9IGFtYXAuZ2V0Wm9vbSgpO1xuICAgICAgdmFyIGNlbnRlck9yWm9vbUNoYW5nZWQgPSBhbWFwTW9kZWwuY2VudGVyT3Jab29tQ2hhbmdlZChbYW1hcENlbnRlci5sbmcsIGFtYXBDZW50ZXIubGF0XSwgYW1hcFpvb20pO1xuICAgICAgaWYgKGNlbnRlck9yWm9vbUNoYW5nZWQpIHtcbiAgICAgICAgdmFyIHB0ID0gbmV3IEFNYXAuTG5nTGF0KGNlbnRlclswXSwgY2VudGVyWzFdKTtcbiAgICAgICAgYW1hcC5zZXRab29tQW5kQ2VudGVyKHpvb20sIHB0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhbWFwQ29vcmRTeXMgPSBuZXcgQU1hcENvb3JkU3lzKGFtYXAsIGFwaSk7XG4gICAgYW1hcENvb3JkU3lzLnNldE1hcE9mZnNldChhbWFwTW9kZWwuX19tYXBPZmZzZXQgfHwgWzAsIDBdKTtcbiAgICBhbWFwQ29vcmRTeXMuc2V0Wm9vbSh6b29tKTtcbiAgICBhbWFwQ29vcmRTeXMuc2V0Q2VudGVyKGNlbnRlcik7XG5cbiAgICBhbWFwTW9kZWwuY29vcmRpbmF0ZVN5c3RlbSA9IGFtYXBDb29yZFN5cztcbiAgfSk7XG5cbiAgZWNNb2RlbC5lYWNoU2VyaWVzKGZ1bmN0aW9uKHNlcmllc01vZGVsKSB7XG4gICAgaWYgKHNlcmllc01vZGVsLmdldChcImNvb3JkaW5hdGVTeXN0ZW1cIikgPT09IFwiYW1hcFwiKSB7XG4gICAgICBzZXJpZXNNb2RlbC5jb29yZGluYXRlU3lzdGVtID0gYW1hcENvb3JkU3lzO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBTWFwQ29vcmRTeXM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/AMapCoordSys.js\n");

/***/ }),

/***/ "./src/AMapModel.js":
/*!**************************!*\
  !*** ./src/AMapModel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ \"echarts\");\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction v2Equal(a, b) {\n  return a && b && a[0] === b[0] && a[1] === b[1];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (echarts__WEBPACK_IMPORTED_MODULE_0__[\"extendComponentModel\"]({\n  type: \"amap\",\n\n  setAMap: function(amap) {\n    this.__amap = amap;\n  },\n\n  getAMap: function() {\n    // __amap is set when creating AMapCoordSys\n    return this.__amap;\n  },\n\n  setEchartsLayer: function(layer) {\n    this.__echartsLayer = layer;\n  },\n\n  getEChartsLayer: function() {\n    return this.__echartsLayer;\n  },\n\n  setCenterAndZoom: function(center, zoom) {\n    this.option.center = center;\n    this.option.zoom = zoom;\n  },\n\n  centerOrZoomChanged: function(center, zoom) {\n    var option = this.option;\n    return !(v2Equal(center, option.center) && zoom === option.zoom);\n  },\n\n  defaultOption: {\n    center: [116.397428, 39.90923],\n    zoom: 5,\n    isHotspot: false,\n    echartsLayerZIndex: 2000,\n    renderOnMoving: true\n  }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQU1hcE1vZGVsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL0FNYXBNb2RlbC5qcz8zYWVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGVjaGFydHMgZnJvbSBcImVjaGFydHNcIjtcblxuZnVuY3Rpb24gdjJFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhICYmIGIgJiYgYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlY2hhcnRzLmV4dGVuZENvbXBvbmVudE1vZGVsKHtcbiAgdHlwZTogXCJhbWFwXCIsXG5cbiAgc2V0QU1hcDogZnVuY3Rpb24oYW1hcCkge1xuICAgIHRoaXMuX19hbWFwID0gYW1hcDtcbiAgfSxcblxuICBnZXRBTWFwOiBmdW5jdGlvbigpIHtcbiAgICAvLyBfX2FtYXAgaXMgc2V0IHdoZW4gY3JlYXRpbmcgQU1hcENvb3JkU3lzXG4gICAgcmV0dXJuIHRoaXMuX19hbWFwO1xuICB9LFxuXG4gIHNldEVjaGFydHNMYXllcjogZnVuY3Rpb24obGF5ZXIpIHtcbiAgICB0aGlzLl9fZWNoYXJ0c0xheWVyID0gbGF5ZXI7XG4gIH0sXG5cbiAgZ2V0RUNoYXJ0c0xheWVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VjaGFydHNMYXllcjtcbiAgfSxcblxuICBzZXRDZW50ZXJBbmRab29tOiBmdW5jdGlvbihjZW50ZXIsIHpvb20pIHtcbiAgICB0aGlzLm9wdGlvbi5jZW50ZXIgPSBjZW50ZXI7XG4gICAgdGhpcy5vcHRpb24uem9vbSA9IHpvb207XG4gIH0sXG5cbiAgY2VudGVyT3Jab29tQ2hhbmdlZDogZnVuY3Rpb24oY2VudGVyLCB6b29tKSB7XG4gICAgdmFyIG9wdGlvbiA9IHRoaXMub3B0aW9uO1xuICAgIHJldHVybiAhKHYyRXF1YWwoY2VudGVyLCBvcHRpb24uY2VudGVyKSAmJiB6b29tID09PSBvcHRpb24uem9vbSk7XG4gIH0sXG5cbiAgZGVmYXVsdE9wdGlvbjoge1xuICAgIGNlbnRlcjogWzExNi4zOTc0MjgsIDM5LjkwOTIzXSxcbiAgICB6b29tOiA1LFxuICAgIGlzSG90c3BvdDogZmFsc2UsXG4gICAgZWNoYXJ0c0xheWVyWkluZGV4OiAyMDAwLFxuICAgIHJlbmRlck9uTW92aW5nOiB0cnVlXG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/AMapModel.js\n");

/***/ }),

/***/ "./src/AMapView.js":
/*!*************************!*\
  !*** ./src/AMapView.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ \"echarts\");\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (echarts__WEBPACK_IMPORTED_MODULE_0__[\"extendComponentView\"]({\n  type: \"amap\",\n\n  render: function(aMapModel, ecModel, api) {\n    var rendering = true;\n\n    var amap = aMapModel.getAMap();\n    var viewportRoot = api.getZr().painter.getViewportRoot();\n    var coordSys = aMapModel.coordinateSystem;\n    var offsetEl = amap.getContainer();\n    var renderOnMoving = aMapModel.get(\"renderOnMoving\");\n    var resizeEnable = amap.getStatus().resizeEnable;\n\n    var moveHandler = function(e) {\n      if (rendering) {\n        return;\n      }\n      var mapOffset = [\n        -parseInt(offsetEl.style.left, 10) || 0,\n        -parseInt(offsetEl.style.top, 10) || 0\n      ];\n      viewportRoot.style.left = mapOffset[0] + \"px\";\n      viewportRoot.style.top = mapOffset[1] + \"px\";\n\n      coordSys.setMapOffset(mapOffset);\n      aMapModel.__mapOffset = mapOffset;\n\n      api.dispatchAction({\n        type: \"amapRoam\"\n      });\n    };\n\n    var zoomStartHandler = function(e) {\n      if (renderOnMoving) {\n        var amape = offsetEl.querySelector(\".amap-e\");\n        amape.classList.remove(\"not-zoom\");\n      }\n\n      moveHandler.call(this, e);\n    };\n\n    var zoomEndHandler = function(e) {\n      if (rendering) {\n        return;\n      }\n      if (renderOnMoving) {\n        var amape = offsetEl.querySelector(\".amap-e\");\n        amape.classList.add(\"not-zoom\");\n      }\n\n      api.dispatchAction({\n        type: \"amapRoam\",\n      });\n    };\n\n    var resizeHandler = function(e) {\n      echarts__WEBPACK_IMPORTED_MODULE_0__[\"getInstanceByDom\"](api.getDom()).resize();\n      moveHandler.call(this, e);\n    };\n\n    if (renderOnMoving) {\n      amap.off(\"mapmove\", this._oldMoveHandler);\n    } else {\n      amap.off(\"moveend\", this._oldMoveHandler);\n    }\n    amap.off(\"zoomstart\", this._oldZoomStartHandler);\n    amap.off(\"zoomend\", this._oldZoomEndHandler);\n\n    resizeEnable && amap.off(\"resize\", this._oldResizeHandler);\n\n    if (renderOnMoving) {\n      amap.on(\"mapmove\", moveHandler);\n    } else {\n      amap.on(\"moveend\", moveHandler);\n    }\n    amap.on(\"zoomstart\", zoomStartHandler);\n    amap.on(\"zoomend\", zoomEndHandler);\n\n    resizeEnable && amap.on(\"resize\", resizeHandler);\n\n    this._oldMoveHandler = moveHandler;\n    this._oldZoomStartHandler = zoomStartHandler;\n    this._oldZoomEndHandler = zoomEndHandler;\n\n    resizeEnable && (this._oldResizeHandler = resizeHandler);\n\n    rendering = false;\n  },\n\n  dispose: function(ecModel, api) {\n    var component = ecModel.getComponent(\"amap\");\n    var amapInstance = component.getAMap();\n    amapInstance.destroy();\n    component.setAMap(null);\n    component.setEchartsLayer(null);\n  }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQU1hcFZpZXcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvQU1hcFZpZXcuanM/NDdlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gXCJlY2hhcnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGVjaGFydHMuZXh0ZW5kQ29tcG9uZW50Vmlldyh7XG4gIHR5cGU6IFwiYW1hcFwiLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oYU1hcE1vZGVsLCBlY01vZGVsLCBhcGkpIHtcbiAgICB2YXIgcmVuZGVyaW5nID0gdHJ1ZTtcblxuICAgIHZhciBhbWFwID0gYU1hcE1vZGVsLmdldEFNYXAoKTtcbiAgICB2YXIgdmlld3BvcnRSb290ID0gYXBpLmdldFpyKCkucGFpbnRlci5nZXRWaWV3cG9ydFJvb3QoKTtcbiAgICB2YXIgY29vcmRTeXMgPSBhTWFwTW9kZWwuY29vcmRpbmF0ZVN5c3RlbTtcbiAgICB2YXIgb2Zmc2V0RWwgPSBhbWFwLmdldENvbnRhaW5lcigpO1xuICAgIHZhciByZW5kZXJPbk1vdmluZyA9IGFNYXBNb2RlbC5nZXQoXCJyZW5kZXJPbk1vdmluZ1wiKTtcbiAgICB2YXIgcmVzaXplRW5hYmxlID0gYW1hcC5nZXRTdGF0dXMoKS5yZXNpemVFbmFibGU7XG5cbiAgICB2YXIgbW92ZUhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAocmVuZGVyaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBtYXBPZmZzZXQgPSBbXG4gICAgICAgIC1wYXJzZUludChvZmZzZXRFbC5zdHlsZS5sZWZ0LCAxMCkgfHwgMCxcbiAgICAgICAgLXBhcnNlSW50KG9mZnNldEVsLnN0eWxlLnRvcCwgMTApIHx8IDBcbiAgICAgIF07XG4gICAgICB2aWV3cG9ydFJvb3Quc3R5bGUubGVmdCA9IG1hcE9mZnNldFswXSArIFwicHhcIjtcbiAgICAgIHZpZXdwb3J0Um9vdC5zdHlsZS50b3AgPSBtYXBPZmZzZXRbMV0gKyBcInB4XCI7XG5cbiAgICAgIGNvb3JkU3lzLnNldE1hcE9mZnNldChtYXBPZmZzZXQpO1xuICAgICAgYU1hcE1vZGVsLl9fbWFwT2Zmc2V0ID0gbWFwT2Zmc2V0O1xuXG4gICAgICBhcGkuZGlzcGF0Y2hBY3Rpb24oe1xuICAgICAgICB0eXBlOiBcImFtYXBSb2FtXCJcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgem9vbVN0YXJ0SGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChyZW5kZXJPbk1vdmluZykge1xuICAgICAgICB2YXIgYW1hcGUgPSBvZmZzZXRFbC5xdWVyeVNlbGVjdG9yKFwiLmFtYXAtZVwiKTtcbiAgICAgICAgYW1hcGUuY2xhc3NMaXN0LnJlbW92ZShcIm5vdC16b29tXCIpO1xuICAgICAgfVxuXG4gICAgICBtb3ZlSGFuZGxlci5jYWxsKHRoaXMsIGUpO1xuICAgIH07XG5cbiAgICB2YXIgem9vbUVuZEhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAocmVuZGVyaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChyZW5kZXJPbk1vdmluZykge1xuICAgICAgICB2YXIgYW1hcGUgPSBvZmZzZXRFbC5xdWVyeVNlbGVjdG9yKFwiLmFtYXAtZVwiKTtcbiAgICAgICAgYW1hcGUuY2xhc3NMaXN0LmFkZChcIm5vdC16b29tXCIpO1xuICAgICAgfVxuXG4gICAgICBhcGkuZGlzcGF0Y2hBY3Rpb24oe1xuICAgICAgICB0eXBlOiBcImFtYXBSb2FtXCIsXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHJlc2l6ZUhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICBlY2hhcnRzLmdldEluc3RhbmNlQnlEb20oYXBpLmdldERvbSgpKS5yZXNpemUoKTtcbiAgICAgIG1vdmVIYW5kbGVyLmNhbGwodGhpcywgZSk7XG4gICAgfTtcblxuICAgIGlmIChyZW5kZXJPbk1vdmluZykge1xuICAgICAgYW1hcC5vZmYoXCJtYXBtb3ZlXCIsIHRoaXMuX29sZE1vdmVIYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYW1hcC5vZmYoXCJtb3ZlZW5kXCIsIHRoaXMuX29sZE1vdmVIYW5kbGVyKTtcbiAgICB9XG4gICAgYW1hcC5vZmYoXCJ6b29tc3RhcnRcIiwgdGhpcy5fb2xkWm9vbVN0YXJ0SGFuZGxlcik7XG4gICAgYW1hcC5vZmYoXCJ6b29tZW5kXCIsIHRoaXMuX29sZFpvb21FbmRIYW5kbGVyKTtcblxuICAgIHJlc2l6ZUVuYWJsZSAmJiBhbWFwLm9mZihcInJlc2l6ZVwiLCB0aGlzLl9vbGRSZXNpemVIYW5kbGVyKTtcblxuICAgIGlmIChyZW5kZXJPbk1vdmluZykge1xuICAgICAgYW1hcC5vbihcIm1hcG1vdmVcIiwgbW92ZUhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbWFwLm9uKFwibW92ZWVuZFwiLCBtb3ZlSGFuZGxlcik7XG4gICAgfVxuICAgIGFtYXAub24oXCJ6b29tc3RhcnRcIiwgem9vbVN0YXJ0SGFuZGxlcik7XG4gICAgYW1hcC5vbihcInpvb21lbmRcIiwgem9vbUVuZEhhbmRsZXIpO1xuXG4gICAgcmVzaXplRW5hYmxlICYmIGFtYXAub24oXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlcik7XG5cbiAgICB0aGlzLl9vbGRNb3ZlSGFuZGxlciA9IG1vdmVIYW5kbGVyO1xuICAgIHRoaXMuX29sZFpvb21TdGFydEhhbmRsZXIgPSB6b29tU3RhcnRIYW5kbGVyO1xuICAgIHRoaXMuX29sZFpvb21FbmRIYW5kbGVyID0gem9vbUVuZEhhbmRsZXI7XG5cbiAgICByZXNpemVFbmFibGUgJiYgKHRoaXMuX29sZFJlc2l6ZUhhbmRsZXIgPSByZXNpemVIYW5kbGVyKTtcblxuICAgIHJlbmRlcmluZyA9IGZhbHNlO1xuICB9LFxuXG4gIGRpc3Bvc2U6IGZ1bmN0aW9uKGVjTW9kZWwsIGFwaSkge1xuICAgIHZhciBjb21wb25lbnQgPSBlY01vZGVsLmdldENvbXBvbmVudChcImFtYXBcIik7XG4gICAgdmFyIGFtYXBJbnN0YW5jZSA9IGNvbXBvbmVudC5nZXRBTWFwKCk7XG4gICAgYW1hcEluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICBjb21wb25lbnQuc2V0QU1hcChudWxsKTtcbiAgICBjb21wb25lbnQuc2V0RWNoYXJ0c0xheWVyKG51bGwpO1xuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/AMapView.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: version, name */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ \"./package.json\", 1);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"version\", function() { return _package_json__WEBPACK_IMPORTED_MODULE_0__[\"version\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return _package_json__WEBPACK_IMPORTED_MODULE_0__[\"name\"]; });\n\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ \"echarts\");\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AMapCoordSys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AMapCoordSys */ \"./src/AMapCoordSys.js\");\n/* harmony import */ var _AMapModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AMapModel */ \"./src/AMapModel.js\");\n/* harmony import */ var _AMapView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AMapView */ \"./src/AMapView.js\");\n/**\r\n * AMap component extension\r\n */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\necharts__WEBPACK_IMPORTED_MODULE_1__[\"registerCoordinateSystem\"](\"amap\", _AMapCoordSys__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\r\n// Action\r\necharts__WEBPACK_IMPORTED_MODULE_1__[\"registerAction\"](\r\n  {\r\n    type: \"amapRoam\",\r\n    event: \"amapRoam\",\r\n    update: \"updateLayout\"\r\n  },\r\n  function(payload, ecModel) {\r\n    ecModel.eachComponent(\"amap\", function(aMapModel) {\r\n      var amap = aMapModel.getAMap();\r\n      var center = amap.getCenter();\r\n      aMapModel.setCenterAndZoom([center.lng, center.lat], amap.getZoom());\r\n    });\r\n  }\r\n);\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQU1hcCBjb21wb25lbnQgZXh0ZW5zaW9uXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgdmVyc2lvbiwgbmFtZSB9IGZyb20gXCIuLi9wYWNrYWdlLmpzb25cIjtcclxuXHJcbmltcG9ydCAqIGFzIGVjaGFydHMgZnJvbSBcImVjaGFydHNcIjtcclxuaW1wb3J0IEFNYXBDb29yZFN5cyBmcm9tIFwiLi9BTWFwQ29vcmRTeXNcIjtcclxuXHJcbmltcG9ydCBcIi4vQU1hcE1vZGVsXCI7XHJcbmltcG9ydCBcIi4vQU1hcFZpZXdcIjtcclxuXHJcbmVjaGFydHMucmVnaXN0ZXJDb29yZGluYXRlU3lzdGVtKFwiYW1hcFwiLCBBTWFwQ29vcmRTeXMpO1xyXG5cclxuLy8gQWN0aW9uXHJcbmVjaGFydHMucmVnaXN0ZXJBY3Rpb24oXHJcbiAge1xyXG4gICAgdHlwZTogXCJhbWFwUm9hbVwiLFxyXG4gICAgZXZlbnQ6IFwiYW1hcFJvYW1cIixcclxuICAgIHVwZGF0ZTogXCJ1cGRhdGVMYXlvdXRcIlxyXG4gIH0sXHJcbiAgZnVuY3Rpb24ocGF5bG9hZCwgZWNNb2RlbCkge1xyXG4gICAgZWNNb2RlbC5lYWNoQ29tcG9uZW50KFwiYW1hcFwiLCBmdW5jdGlvbihhTWFwTW9kZWwpIHtcclxuICAgICAgdmFyIGFtYXAgPSBhTWFwTW9kZWwuZ2V0QU1hcCgpO1xyXG4gICAgICB2YXIgY2VudGVyID0gYW1hcC5nZXRDZW50ZXIoKTtcclxuICAgICAgYU1hcE1vZGVsLnNldENlbnRlckFuZFpvb20oW2NlbnRlci5sbmcsIGNlbnRlci5sYXRdLCBhbWFwLmdldFpvb20oKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgeyB2ZXJzaW9uLCBuYW1lIH07XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "echarts":
/*!**************************!*\
  !*** external "echarts" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_echarts__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNoYXJ0cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1tuYW1lXS9leHRlcm5hbCBcImVjaGFydHNcIj84YzY3Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lY2hhcnRzX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///echarts\n");

/***/ })

/******/ });
});