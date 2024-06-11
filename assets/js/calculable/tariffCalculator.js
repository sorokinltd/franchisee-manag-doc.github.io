export class TariffCalculator {
    constructor(isFresh) {
        this.isFresh = isFresh;
        this.baseRatio = 0;
    }

    calculatePrices() {
        return {
            priceIts100: { price: this.profRatio() - this.calcBaseRatio() },
            priceIts200: { price: this.profRatio() * this.upTo200Ratio() - this.calcBaseRatio() },
            priceIts300: { price: this.profRatio() * this.upTo300Ratio() - this.calcBaseRatio() },
            priceItsUpTo400: { price: this.korpRatio() - this.calcBaseRatio() },
            priceItsFrom400: { price: this.calculatePriceByCount(getContractsCount(), this.isFresh) }            
        }
    }

    calculatePriceByCount(itsCount) {
        let newPrice = 0;
        if (!isNaN(itsCount) && itsCount > 0) {    
            if (itsCount < 400) {
                itsCount = 400;
            }
            const rounded =  Math.round(itsCount / 10) * 10;
            newPrice = ((rounded / 400) * this.korpRatio() - this.calcBaseRatio());      
        }
        return newPrice;
    }

    calcBaseRatio() { 
        if (this.isFresh) {
            return this.baseRatio;
        }
        return 0;
    }
   
    upTo200Ratio() { 
        return 1.35;
    }
    
    upTo300Ratio() { 
        return 1.7;
    }    
}