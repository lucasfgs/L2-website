"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _buffer = require('buffer');
var _sha1 = require('sha1'); var _sha12 = _interopRequireDefault(_sha1);
var _utf8 = require('utf8'); var _utf82 = _interopRequireDefault(_utf8);

 function encryptPassword(password) {
  return _buffer.Buffer.from(_sha12.default.call(void 0, _utf82.default.encode(password)), "hex").toString("base64");
} exports.default = encryptPassword;
