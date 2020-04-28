"use strict";Object.defineProperty(exports, "__esModule", {value: true});const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

function sendMail(to, subject, html, from = '"Equipe Lineage" <admin@l2.net>') {
  return new Promise((resolve, reject) => {
    transporter.sendMail({ from, to, subject, html }, (error, info) => {
      if (error) reject(error);
      resolve(info);
    });
  });
}

exports.sendMail = sendMail;
