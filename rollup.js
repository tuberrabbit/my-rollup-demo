'use strict';
var rollup = require('rollup');
var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify');
var path = require('path');

rollup.rollup({
    entry: 'src/main.js',
    plugins: [babel(), uglify()],
    external: ['lodash/reduce'],
    paths: {
        'lodash/reduce': path.resolve('./node_modules/lodash/reduce.js')
    }
}).then(function (bundle) {
    bundle.write({
        dest: 'dest/bundle.js',
        format: 'iife'
    });
});