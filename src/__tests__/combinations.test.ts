import * as Combinations from '../combinations';

test('Combinations Test - Empty Bucket', () => {
	expect(Combinations.getUniqueCombinations([], 1, 2)).toHaveLength(0);
});

test('Combinations Test - Zero Sum', () => {
	expect(Combinations.getUniqueCombinations([1, 2], 0, 2)).toHaveLength(0);
});

test('Combinations Test - Zero Size', () => {
	expect(Combinations.getUniqueCombinations([1, 2], 1, 0)).toHaveLength(0);
});

test('Combinations Test - Size Single', () => {
	expect(Combinations.getUniqueCombinations([1, 2], 1, 1)).toHaveLength(1);
	expect(Combinations.getUniqueCombinations([1, 2], 2, 1)).toHaveLength(1);
	expect(Combinations.getUniqueCombinations([1, 2], 3, 1)).toHaveLength(0);
});

test('Combinations Test', () => {
	expect(Combinations.getUniqueCombinations([1, 2], 1, 2)).toHaveLength(0);
	expect(Combinations.getUniqueCombinations([1, 2], 2, 2)).toHaveLength(0);
	expect(Combinations.getUniqueCombinations([1, 2], 3, 2)).toHaveLength(1);
	expect(Combinations.getUniqueCombinations([1, 2], 3, 2)[0]).toHaveLength(2);
	expect(Combinations.getUniqueCombinations([1, 2, 3, 4, 5], 5, 2)).toHaveLength(2);
});

test('Combinations Performance Test', () => {
	expect(Combinations.getUniqueCombinations([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 9)).toHaveLength(0);
});
