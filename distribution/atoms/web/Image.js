"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: ", "\n    height: ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImageWrapper = _styledComponents.default.img(_templateObject(), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});

var Image = function Image(props) {
  return _react.default.createElement(ImageWrapper, props);
};

Image.propTypes = {
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string,
  height: _propTypes.default.string,
  width: _propTypes.default.string
};
Image.defaultProps = {
  alt: "myAppName",
  height: "inherit",
  width: "inherit"
};
var _default = Image;
exports.default = _default;