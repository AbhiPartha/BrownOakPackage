"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _react = _interopRequireDefault(require("react"));

var _CenteredView = _interopRequireDefault(require("../../atoms/native/CenteredView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Atoms
var CenteredActivityIndicator = function CenteredActivityIndicator() {
  return _react.default.createElement(_CenteredView.default, null, _react.default.createElement(_reactNative.ActivityIndicator, null));
};

var _default = CenteredActivityIndicator;
exports.default = _default;