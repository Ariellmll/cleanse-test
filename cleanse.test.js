const { foo, result } = require('./data/data');
const { cleanse } = require('./cleanse');
/** ************************************
  Your challenge is to refactor the cleanse function so its return value is a 
  clone of its received object, absent all `null` and `undefined` values.
   - You can use Ramda.js or vanilla JavaScript to solve
   - You may not mutate foo

  Example:
  const foo = { a : 1, b : 2, c : 0, d : false, e : undefined, f : null, g : 'hello' };
  cleanse(foo); // { a : 1, b : 2, c : 0, d : false, g : 'hello' };
  foo remains unmutated // { a : 1, b : 2, c : 0, d : false, e : undefined, f : null, g : 'hello' };
 ************************************ **/

describe('Remove null and undefined values in the foo object', () => {
    test('test ', () => {
        expect(cleanse(foo)).toEqual(result);
    });
});

describe('Foo object was not mutated', () => {
    test('test ', () => {
        expect(cleanse(foo)).toEqual(expect.not.objectContaining(foo));
    });
});