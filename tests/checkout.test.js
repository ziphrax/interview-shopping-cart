const expect = require('chai').expect;
const checkout = require('../src/checkout');

describe('Checkout', () => {
    [
        ['A', 50], 
        ['B', 30],
        ['C', 20],
        ['D', 15]
    ].forEach(([item, price]) => {
        it(`should return ${price} for item ${item}`, () => {
            expect(checkout(item)).to.equal(price);
        });
    });

    [
        ['AB', 80],
        ['AA', 100],
        ['ABC', 100]
    ].forEach(([items, price]) => {
        it(`should return ${price} for items ${items}`, () => {
            expect(checkout(items)).to.equal(price);
        });
    });

    [
        ['AAA', 130],
        ['BB', 45],
    ].forEach(([items, price]) => {
        it(`should return ${price} for items with a multi-buy-discount ${items}`, () => {
            expect(checkout(items)).to.equal(price);
        });
    });

    [
        ['AAAAAA',260],
        ['AAAAA', 230],
        ['AAABB', 175]
    ].forEach(([items, price]) => {
        it(`should return ${price} for items with multiple discounts ${items}`, () => {
            expect(checkout(items)).to.equal(price);
        });
    });
    
});