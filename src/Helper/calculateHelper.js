const storageCosts = 100;

const calculateUserFees = (type, price) => {
    let min,max;
    let amount = price*(10/100);
    if(1 == type) {
        min = 10;
        max = 50;
    } else {
        min = 25;
        max = 200;
    }

    if(min <= amount && amount <= max) {
        return amount.toFixed(2);
    } else if(amount < min) {
        return min.toFixed(2);
    } else if(amount > max) { 
        return max.toFixed(2);
    }
};

const calculateSpecialFees = (type, price) => {
    let special = type == 1 ? 2 : 4;
    return price * (special/100);
};

const calculateAssociationFees = (price) => {
    if(1 <= price && 500 >= price) {
        return 5;
    } else if(500 < price && 1000 >= price) {
        return 10;
    } else if(1000 < price && 3000>= price) {
        return 15;
    } else {
        return 20;
    }
};

const calculateTotalPrice = (type, price) => {
    const userFees = (+calculateUserFees(price,type));
    const specialFees = (+calculateSpecialFees(price, type));
    const associationFees = (+calculateAssociationFees(price));
    // Adding (+) to cast to number because concatenation make it string
    const totalPrice = userFees+specialFees+associationFees+(+storageCosts)+(+price);
    //console.log(`User fees : ${userFees} / Special fees : ${specialFees} / Association fess : ${associationFees} / Storage costs : ${storageCosts}`);
    return totalPrice.toFixed(2);
};

export const calculateFeesFunctions = {
    calculateUserFees,
    calculateSpecialFees,
    calculateAssociationFees,
    calculateTotalPrice,
    storageCosts
}