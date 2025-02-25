import { TariffCalculator } from "./tariffCalculator.js";

export class FullYearCalculator extends TariffCalculator{
    constructor(isFresh) {
        super(isFresh);
        this.baseRatio = 16400;
    }

    profRatio() { 
        return 49992;
    }
    
    korpRatio() { 
        return 99984;
    }
}
