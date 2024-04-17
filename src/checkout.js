const pricesData = {
    A: 50,
    B: 30,
    C: 20,
    D: 15
}

const discounts = {
    AAA: 20,
    BB: 15
}

function calculateDiscounts(items){
    let discount = 0;

    const discountKeys = Object.keys(discounts);

    discountKeys.forEach(key => {
        const discountAmount = discounts[key];
        const regExp = new RegExp(key, 'g');
        const matches = items.match(regExp);
        if(matches){
            discount += discountAmount * matches.length;
        }
    });
    return discount;
}

module.exports = function checkout(items) {
    let total = 0;

    items.split('').forEach(item => {
        total += pricesData[item];
    });

    const discount = calculateDiscounts(items);

    return total - discount;
}