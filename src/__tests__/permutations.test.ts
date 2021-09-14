import * as Permutations from '../permutations';

test('Permutations Test', () => {
	expect(Permutations.getPermutations([1, 2])).toStrictEqual([
		[1, 2],
		[2, 1],
	]);
	expect(Permutations.getPermutations([])).toStrictEqual([[]]);
	expect(Permutations.getPermutations(undefined)).toStrictEqual([[]]);
});
