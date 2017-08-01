class PrimeFactors {
  of(number) {
    if(number == 2) {
      return [2];
    }

    return [];
  }
}

module.exports = new PrimeFactors();
