"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// src/Modal.js

var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    children = _ref.children;
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "modal",
    className: "modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, children), /*#__PURE__*/_react["default"].createElement("div", {
    className: "footer"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    className: "close-button"
  }, "Close")))));
};
var _default = exports["default"] = Modal;