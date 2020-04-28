"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _models = require('../models'); var _models2 = _interopRequireDefault(_models);

async function getOnlinePlayers() {
  return await _models2.default.characters.count({ where: { online: 1 } });
}

exports.getOnlinePlayers = getOnlinePlayers;
