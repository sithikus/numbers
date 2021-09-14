export const getUniqueCombinations = (valuesForCombination: number[], sum: number, size: number): number[][] => {
	const combinationsArr: number[][] = [];
	getCombinations(valuesForCombination, size, (array) => {
		if (array.reduce((a, b) => a + b, 0) === sum) combinationsArr.push([...array]);
	});
	return combinationsArr;
};

export function getCombinations(numArr: number[], choose: number, callback: (arr: number[]) => any) {
	const n: number = numArr.length;
	const c: number[] = [];
	const inner = (start: number, subChoose: number) => {
		if (subChoose === 0) {
			callback(c);
		} else {
			for (let i = start; i <= n - subChoose; ++i) {
				c.push(numArr[i]);
				inner(i + 1, subChoose - 1);
				c.pop();
			}
		}
	};
	inner(0, choose);
}
