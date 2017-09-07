let chai = require('chai');
let expect = chai.expect;

let primeFactorsOf = require('../src/prime-factors.js');

describe('PrimeFactors', function() {
  it('returns prime factors of 1', function() {
    expect(primeFactorsOf(1)).to.deep.equal([]);
  });
});
