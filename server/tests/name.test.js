const { sum } = require('../math');

// test(description, cb(), timeout)
//  description - description of the test
//  cb() - test itself
//  timeout - time in ms to complete
// cb(){ expect(valueToCheck) => { toBe, to...} } //to... - matchers

// cb(){ expect(valueToCheck).not.toBe(valueToCheckWith) }

// describe('testsGroup1', cb()=>{ all_tests}) //describe ~~= console.group();

// matchers:
// toBe => === (but normally for obj{})
// toBeGreaterThan
// toBeGreaterThanOrEqual
// toBeLessThan
// toBeLessThanOrEqual
// toBeCloseTo => ~=
// toEqual => //for object-ish //dont see undefined in keys
// toStrictEqual => //see undefined in keys
// toBeNull
// toBeDefined
// toBeUndefined
// toBeTruthy
// toBeFalsy
// toMatch(//)
// toContain('smth')
// expect(()=>smth).toThrow()
// expect(()=>smth).toThrow(TypeError)

describe('tests for sum()', () => {
  test('Add 5+5, expecting 10', () => {
    expect(sum(5, 5)).toBe(10);
  });

  test('Add 5+5, expecting not 15', () => {
    expect(sum(5, 5)).not.toBe(15);
  });

  test('Add number 5 and string 5, expecting 10', () => {
    expect(sum(5, '5')).toBe(10);
  });

  test('Add number 0.1 and number 0.2, expecting ~= 0.3', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
