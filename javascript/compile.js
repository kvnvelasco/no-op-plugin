const swc = require("@swc/core");

const source = require('fs').readFileSync("input.js", "utf-8");

swc
    .transform(source, require('./.swcrc'))
    .then((output) => {
        console.log(output.code); // transformed code
        output.map; // source map (in string)
    })