"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _verifyJwt = require('../utils/verifyJwt');

 function verifyJWT_MW(req, res, next) {
  let token = req.method === "POST" ? req.body.token : req.query.token;

  _verifyJwt.verifyJWTToken.call(void 0, token)
    .then(decodedToken => {
      req.user = decodedToken.data;
      next();
    })
    .catch(err => {
      res.status(400).json({ message: "Invalid auth token provided." });
    });
} exports.verifyJWT_MW = verifyJWT_MW;
