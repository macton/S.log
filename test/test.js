var S = require('s');

S.log = require('../s.log');

S.log.info( 'fyi', JSON.stringify( { foo: 'Foo', bar: 'Bar' }, null, 2 ) );
S.log.warn( 'somewhat bad', JSON.stringify( { foo: 'Foo', bar: 'Bar' }, null, 2 ) );
S.log.error( 'really bad', JSON.stringify( { foo: 'Foo', bar: 'Bar' }, null, 2 ) );
S.log.save( 'out.log' );
