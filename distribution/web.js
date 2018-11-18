"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Image = _interopRequireDefault(require("./atoms/web/Image"));

var _InputWrapper = _interopRequireDefault(require("./atoms/web/InputWrapper"));

var _Text = _interopRequireDefault(require("./atoms/web/Text"));

var _CircularImageView = _interopRequireDefault(require("./molecules/web/CircularImageView"));

var _Loader = _interopRequireDefault(require("./molecules/web/Loader"));

var _SimpleButton = _interopRequireDefault(require("./molecules/web/SimpleButton"));

var _TextBox = _interopRequireDefault(require("./molecules/web/TextBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Atom: {
    Image: _Image.default,
    InputWrapper: _InputWrapper.default,
    Text: _Text.default
  },
  Molecules: {
    CircularImageView: _CircularImageView.default,
    Loader: _Loader.default,
    SimpleButton: _SimpleButton.default,
    TextBox: _TextBox.default
  }
};
exports.default = _default;