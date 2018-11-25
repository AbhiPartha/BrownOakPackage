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

var _Image = _interopRequireDefault(require("./atoms/Image"));

var _InputWrapper = _interopRequireDefault(require("./atoms/InputWrapper"));

var _Text = _interopRequireDefault(require("./atoms/Text"));

var _CircularImageView = _interopRequireDefault(require("./molecules/CircularImageView"));

var _Loader = _interopRequireDefault(require("./molecules/Loader"));

var _SimpleButton = _interopRequireDefault(require("./molecules/SimpleButton"));

var _theme = require("./theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Atom = {
  Image: _Image.default,
  InputWrapper: _InputWrapper.default,
  Text: _Text.default
};
exports.Atom = Atom;
var Molecules = {
  CircularImageView: _CircularImageView.default,
  Loader: _Loader.default,
  SimpleButton: _SimpleButton.default
};
exports.Molecules = Molecules;