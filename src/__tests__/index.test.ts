import * as Combinations from '../combinations';
import * as Permutations from '../permutations';
import '../index';

test('Index Test - Combinations Forwards Call', () => {
	var expected = [
		[1, 2, 3],
		[4, 5, 6],
	];
	var spy = jest.spyOn(Combinations, 'getUniqueCombinations').mockReturnValue(expected);
	var result = [].getUniqueCombinations(1, 1);

	expect(spy).toHaveBeenCalled();
	expect(result).toBe(expected);

	spy.mockReset();
	spy.mockRestore();
});

test('Index Test - Permutations Forwards Call', () => {
	var expected = [
		[1, 2],
		[2, 1],
	];
	var spy = jest.spyOn(Permutations, 'getPermutations').mockReturnValue(expected);
	var result = [1, 2].getPermutations();

	expect(spy).toHaveBeenCalled();
	expect(result).toBe(expected);

	spy.mockReset();
	spy.mockRestore();
});
