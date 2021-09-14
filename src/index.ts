export {};
declare global {
	interface Array<T = number> {
		getUniqueCombinations(sum: number, size: number): number[][];
		getPermutations(): number[][];
	}
}
import * as CombinationMethods from './combinations';
import * as PermutationMethods from './permutations';

Array.prototype.getUniqueCombinations = function (sum, size) {
	return CombinationMethods.getUniqueCombinations(this, sum, size);
};
Array.prototype.getPermutations = function () {
	return PermutationMethods.getPermutations(this);
};
