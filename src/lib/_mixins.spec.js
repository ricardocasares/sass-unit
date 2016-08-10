'use strict';

let path = require('path');
let Sassaby = require('sassaby');

describe('awesome mixins', () => {
    let file = path.resolve('src/lib/_mixins.scss');
    let sb = new Sassaby(file, {
        dependencies: [
            'src/lib/_vars.scss'
        ]
    });

    describe('contextualize mixin', () =>  {
        it('has context info', () => {
            sb.includedMixin('contextualize')
                .calledWithArgs('info')
                .declares('background-color', 'blue');
        });
        
        it('has context danger');

        it('has context success');
    });
});