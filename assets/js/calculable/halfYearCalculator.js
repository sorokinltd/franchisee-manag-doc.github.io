import { TariffCalculator } from "./tariffCalculator.js";

export class HalfYearCalculator extends TariffCalculator{
    constructor(isFresh) {
        super(isFresh);
        this.baseRatio = 7800;
    }

    defaultPricesOfTariffs() {
        return defaultPricesOfTariffs(this)
    }

    profRatio() { 
        return 23383;
    }
    
    korpRatio() { 
        return 46042;
    } 
}
