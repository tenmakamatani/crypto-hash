"use strict";

const crypto = require("crypto");

const shasum = crypto.createHash("sha1");

const sentence = process.argv[2];
if (sentence == undefined) {
    console.log("\n---- How to use ----\n");
    console.log("node index.js something\n");
    process.exit(1);
}

shasum.update(sentence);
let hash = shasum.digest("hex");

console.log(hash);