"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Button = _interopRequireDefault(require("../atoms/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emptyFunction = function emptyFunction() {};

var PrimaryButton = function PrimaryButton() {
  return _react.default.createElement(_reactNative.View, null, _react.default.createElement(_Button.default, {
    onPress: emptyFunction,
    title: "Press me"
  }));
};

var _default = PrimaryButton;
exports.default = _default;