var pkg = require('./package.json');

var banner = '';
banner += '//  clod v' + pkg.version + '\n';
banner += '//  https://github.com/bojangles-m/clod\n';
banner += '//  (c) 2020-' + new Date().getFullYear() + ' Bojan Mazej\n';
banner += '//  License: ISC\n';

var input = 'source/index.js';

var config = {
    input: input,
    treeshake: false,
    output: {
        file: 'clod.js',
        exports: 'default',
        format: 'umd',
        name: 'clod',
        banner: banner,
        noConflict: true,
        sourcemap: true,
        sourcemapExcludeSources: true,
        strict: false,
        externalLiveBindings: false,
        freeze: false,
    },

    plugins: [],
};

module.exports = config;
