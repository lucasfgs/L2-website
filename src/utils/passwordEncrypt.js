import { Buffer } from "buffer";
import sha1 from "sha1";
import utf8 from "utf8";

export default function encryptPassword(password) {
  return Buffer.from(sha1(utf8.encode(password)), "hex").toString("base64");
}
