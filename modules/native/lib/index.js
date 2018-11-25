"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "defaultTheme", {
  enumerable: true,
  get: function get() {
    return _theme.defaultTheme;
  }
});
exports.Molecules = exports.Atom = void 0;

var _Button = _interopRequireDefault(require("./atoms/Button"));

var _CenteredView = _interopRequireDefault(require("./atoms/CenteredView"));

var _CenteredActivityIndicator = _interopRequireDefault(require("./molecules/CenteredActivityIndicator"));

var _PrimaryButton = _interopRequireDefault(require("./molecules/PrimaryButton"));

var _theme = require("./theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Atom = {
  Button: _Button.default,
  CenteredView: _CenteredView.default
};
exports.Atom = Atom;
var Molecules = {
  CenteredActivityIndicator: _CenteredActivityIndicator.default,
  PrimaryButton: _PrimaryButton.default
};
exports.Molecules = Molecules;