require 'spec_helper'
require_relative '../lib/prime_factors'

RSpec.describe PrimeFactors do
  it 'returns factors of 1' do
    expect(described_class.of(1)).to eq([])
  end
end
