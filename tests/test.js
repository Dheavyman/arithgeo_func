const assert = require('chai').assert;
const myFunction = require('../source/index.js');

describe('ArithGeo', () => {
    describe('for invalid inputs', () => {
        it('should return Invalid imput when input is not an array', () => {
            assert.deepEqual(myFunction.arithGeo('not array'), 'Invlid imput');
        });
    })
    describe('for valid inputs', () => {
        it('should return 0 for an empty array', () => {
            assert.deepEqual(myFunction.arithGeo([]), 0);
        });
    })
    describe('for valid inputs', () => {
        it('should return -1 for an array that is neither arithmetic nor geometric', () => {
            assert.deepEqual(myFunction.arithGeo([1,2,4,7]), -1);
        });
    })
    describe('for valid inputs', () => {
        it('should return -1 for an array that is neither arithmetic nor geometric', () => {
            assert.deepEqual(myFunction.arithGeo([2,4,6,7,9]), -1);
        });
    })
    describe('for valid inputs', () => {
        it('should return Arithmetic for an array that is arithmetic in progression', () => {
            assert.deepEqual(myFunction.arithGeo([1,2,3,4]), 'Arithmetic' );
        });
    })
    describe('for valid inputs', () => {
        it('should return Arithmetic for an array that is arithmetic in progression', () => {
            assert.deepEqual(myFunction.arithGeo([1,3,5,7]), 'Arithmetic' );
        });
    })
    describe('for valid inputs', () => {
        it('should return Arithmetic for an array that is arithmetic in progression', () => {
            assert.deepEqual(myFunction.arithGeo([3,6,9,12,15,18,20]), 'Arithmetic' );
        });
    })
    describe('for valid inputs', () => {
        it('should return Geometric for an array that is geometric in progression', () => {
            assert.deepEqual(myFunction.arithGeo([2,4,8,16]), 'Geometric');
        });
    })
    describe('for valid inputs', () => {
        it('should return Geometric for an array that is geometric in progression', () => {
            assert.deepEqual(myFunction.arithGeo([2,6,18,54,162]), 'Geometric');
        });
    })
    describe('for valid inputs', () => {
        it('should return Geometric for an array that is geometric in progression', () => {
            assert.deepEqual(myFunction.arithGeo([5,25,125,626,3125]), 'Geometric');
        });
    })
})