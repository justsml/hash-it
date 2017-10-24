import test from 'ava';
import hashIt from './';

test('can hash a string', t => {
  hashIt('Pa$$w0rd', (err, hash) => {
    t.ifError(err)
    t.true(hash.length > 10)
  })
})