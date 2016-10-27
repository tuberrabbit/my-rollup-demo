'use strict';
var rollup = require('rollup');
var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify');

rollup.rollup({
    entry: 'src/main.js',
    plugins: [babel(), uglify()],
    treeshake: true
}).then(function (bundle) {
    bundle.write({
        dest: 'dest/bundle.js',
        format: 'cjs'
    });
});