import 'mocha'
import chai from 'chai';
import {arithGeo} from '../source/index.js';

const assert = chai.assert;

describe('ArithGeo', () => {
    describe('for invalid inputs', () => {
        it('should return Invalid imput when input is not an array', () => {
            assert.deepEqual(arithGeo('not array'), 'Invalid input');
        });
    })
    describe('for valid inputs', () => {
        it('should return 0 for an empty array', () => {
            assert.deepEqual(arithGeo([]), 0);
        });
    })
    describe('for valid inputs', () => {
        it('should return -1 for an array that is neither arithmetic nor geometric', () => {
            assert.deepEqual(arithGeo([1,2,4,7]), -1);
        });
    })
    describe('for valid inputs', () => {
        it('should return -1 for an array that is neither arithmetic nor geometric', () => {
            assert.deepEqual(arithGeo([2,4,6,7,9]), -1);
        });
    })
    describe('for valid inputs', () => {
        it('should return Arithmetic for an array that is arithmetic in progression', () => {
            assert.deepEqual(arithGeo([1,2,3,4]), 'Arithmetic' );
        });
    })
    describe('for valid inputs', () => {
        it('should return Arithmetic for an array that is arithmetic in progression', () => {
            assert.deepEqual(arithGeo([1,3,5,7]), 'Arithmetic' );
        });
    })
    describe('for valid inputs', () => {
        it('should return Arithmetic for an array that is arithmetic in progression', () => {
            assert.deepEqual(arithGeo([3,6,9,12,15,18,21]), 'Arithmetic' );
        });
    })
    describe('for valid inputs', () => {
        it('should return Geometric for an array that is geometric in progression', () => {
            assert.deepEqual(arithGeo([2,4,8,16]), 'Geometric');
        });
    })
    describe('for valid inputs', () => {
        it('should return Geometric for an array that is geometric in progression', () => {
            assert.deepEqual(arithGeo([2,6,18,54,162]), 'Geometric');
        });
    })
    describe('for valid inputs', () => {
        it('should return Geometric for an array that is geometric in progression', () => {
            assert.deepEqual(arithGeo([5,25,125,625,3125]), 'Geometric');
        });
    })
})