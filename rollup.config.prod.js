const config = require('./rollup.config');

var terser = require('rollup-plugin-terser').terser;

config.plugins.push(terser());

module.exports = config;
