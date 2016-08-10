'use strict';

let path = require('path');
let Sassaby = require('sassaby');

describe('awesome functions', () => {
    let file = path.resolve('src/lib/_functions.scss');
    let sb = new Sassaby(file);

    describe('calc-percent', () =>  {
        it('should return a percentage');
    });
});
