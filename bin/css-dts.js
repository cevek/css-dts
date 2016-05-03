#!/usr/bin/env node
"use strict";

var fs = require('fs');
var processCss = require('css-loader/lib/processCss.js');
var camelCase = require("lodash.camelcase");
var options = {
    query: {
        root: {},
        context: process.cwd()
    },
    loaderContext: {
        resourcePath: ''
    }
};

var file = process.argv[2];
if (file && file.match(/\.css$/)) {
    var fileData = fs.readFileSync(file).toString();
    var filedTs = file + '.d.ts';

    processCss(fileData, null, options, (err, result)=> {
        if (err) {
            console.error(err.stack);
            throw err;
        }
        const keys = Object.keys(result.exports).map(camelCase);
        const newData = `export const locals: {\n\t${keys.map(key => `${key}: string`).join('\n\t')}\n}`;
        fs.writeFileSync(filedTs, newData);
    });
} else {
    throw new Error(`Incorrect input file: ${file}`);
}