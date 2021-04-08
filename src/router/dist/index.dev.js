"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("@/pages/home/Home"));

var _City = _interopRequireDefault(require("@/pages/city/City"));

var _Detail = _interopRequireDefault(require("@/pages/detail/Detail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routes: [{
    path: '/',
    name: 'Home',
    component: _Home["default"]
  }, {
    path: '/city',
    name: 'City',
    component: _City["default"]
  }, {
    path: '/detail/:id',
    // 动态路由
    name: 'Detail',
    component: _Detail["default"]
  }]
});

exports["default"] = _default;