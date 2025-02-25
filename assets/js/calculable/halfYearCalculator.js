import { TariffCalculator } from "./tariffCalculator.js";

export class HalfYearCalculator extends TariffCalculator{
    constructor(isFresh) {
        super(isFresh);
        this.baseRatio = 8580;
    }

    profRatio() { 
        return 26543;
    }
    
    korpRatio() { 
        return 53086;
    } 
}
