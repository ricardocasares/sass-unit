'use strict';

let path = require('path');
let Sassaby = require('sassaby');

describe('alert component', () => {
    let file = path.resolve('src/components/alert/_alert.mixins.scss');
    let sb = new Sassaby(file, {
        dependencies: [
            'src/components/alert/_alert.vars.scss'
        ]
    });

    describe('alert mixin', () =>  {
        it('should have default radius', () => {
            sb.includedMixin('alert')
                .called()
                .declares('border-radius', '5px');
        });

        it('should have custom radius');
    });
});