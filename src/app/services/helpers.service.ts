export class HelperService {

    calculatePercentage(currentAmount: number, goalAmount: number): number {
        return Math.round((currentAmount / goalAmount) * 100);
    }

}