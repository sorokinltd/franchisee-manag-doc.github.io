import { TariffCalculator } from "./tariffCalculator.js";

export class HalfYearCalculator extends TariffCalculator{
    constructor(isFresh) {
        super(isFresh);
        this.baseRatio = 9500;
    }

    profRatio() { 
        return 30259;
    }
    
    korpRatio() { 
        return 60518;
    } 
}
