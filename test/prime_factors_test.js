let chai = require('chai');
let expect = chai.expect;

let primeFactors = require('../src/prime-factors.js');

describe('PrimeFactors', function() {
  it('returns prime factors of 1', function() {
    expect(primeFactors.of(1)).to.deep.equal([]);
  });

  it('returns prime factors of 2', function() {
    expect(primeFactors.of(2)).to.deep.equal([2]);
  });
});
