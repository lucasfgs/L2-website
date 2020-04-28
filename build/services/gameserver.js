"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _net = require('net'); var _net2 = _interopRequireDefault(_net);

function getGameserverStatus() {
  return new Promise((resolve, reject) => {
    let status = "";
    const client = _net2.default.connect(
      {
        host: process.env.GAMERSERVER_HOST,
        port: process.env.GAMERSERVER_PORT
      },
      () => {
        status = "Online";
        resolve("Online");
      }
    );
    client.setTimeout(500, () => {
      if (status === "") {
        client.end();
        resolve("Offline");
      }
    });
    client.on("error", error => {
      reject(error);
    });
    client.on("close", error => {
      reject(error);
    });
  });
}

exports.getGameserverStatus = getGameserverStatus;
