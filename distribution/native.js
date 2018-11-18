"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Button = _interopRequireDefault(require("./atoms/native/Button"));

var _CenteredView = _interopRequireDefault(require("./atoms/native/CenteredView"));

var _CenteredActivityIndicator = _interopRequireDefault(require("./molecules/native/CenteredActivityIndicator"));

var _PrimaryButton = _interopRequireDefault(require("./molecules/native/PrimaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Atom: {
    Button: _Button.default,
    CenteredView: _CenteredView.default
  },
  Molecules: {
    CenteredActivityIndicator: _CenteredActivityIndicator.default,
    PrimaryButton: _PrimaryButton.default
  }
};
exports.default = _default;