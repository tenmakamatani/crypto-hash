"use strict";

const crypto = require("crypto");

const shasum = crypto.createHash("sha1");
shasum.update("赤巻紙青巻紙気巻紙");
let hash = shasum.digest("hex");

console.log(hash);