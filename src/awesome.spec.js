'use strict';

let path = require('path');
let Sassaby = require('sassaby');

describe('awesome library', () => {
    let file = path.resolve('src/awesome.scss');
    let sb = new Sassaby(file);

    describe('imports dependencies', () => {
        it('lib/vars', () => sb.imports('lib/vars'));
        it('lib/functions');
        it('lib/mixins');
    });

    describe('imports component', () => {
        it('should import components/alert');
        it('should import components/label');
    });
});
