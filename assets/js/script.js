import { FullYearCalculator } from "./calculable/fullYearCalculator.js";
import { HalfYearCalculator } from "./calculable/halfYearCalculator.js";

document.addEventListener('DOMContentLoaded', () => {
    calculatePricesByPriceType(document.getElementById("tariffType"), isFresh);
})

function calculatePriceByCount(inputCount, isFresh) {
    
    const calculator = createCalculator(document.getElementById("tariffType").value, isFresh);
    const result = calculator.calculatePriceByCount(getContractsCount(inputCount));

    const row = inputCount.closest('tr');
    const cells = row.getElementsByTagName('td');
    const priceCell = cells[2];
    priceCell.textContent = numberFormat(result);
}

function createCalculator(priceType, isFresh) {
    let calculator;
    if (priceType == 'halfYear') {
        calculator = new HalfYearCalculator(isFresh);
    }
    else {
        calculator = new FullYearCalculator(isFresh);
    }
    return calculator;
}

function calculatePricesByPriceType(inputPriceType, isFresh) {
    const calculator = createCalculator(inputPriceType.value, isFresh);
    const prices = calculator.calculatePrices();
    for (let key in prices) {
        const item = document.getElementById(key);
        item.textContent = numberFormat(prices[key].price);
    };
}

function getContractsCount(inputCount = null) {
    if (inputCount == null) {
        inputCount = document.getElementById("countFrom400");
    }
    let itsCount = parseFloat(inputCount.value);
    return itsCount;
}

function numberFormat(price) {
    return new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price.toFixed(2));
}

window.calculatePriceByCount = calculatePriceByCount;
window.calculatePricesByPriceType = calculatePricesByPriceType;
window.getContractsCount = getContractsCount;
