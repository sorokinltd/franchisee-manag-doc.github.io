import { TariffCalculator } from "./tariffCalculator.js";

export class FullYearCalculator extends TariffCalculator{
    constructor(isFresh) {
        super(isFresh);
        this.baseRatio = 18100;
    }

    profRatio() { 
        return 57000;
    }
    
    korpRatio() { 
        return 114000;
    }
}
