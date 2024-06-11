import { TariffCalculator } from "./tariffCalculator.js";

export class FullYearCalculator extends TariffCalculator{
    constructor(isFresh) {
        super(isFresh);
        this.baseRatio = 14900;
    }

    defaultPricesOfTariffs() {
        return defaultPricesOfTariffs(this)
    }

    profRatio() { 
        return 44064;
    }
    
    korpRatio() { 
        return 88128;
    }
}
