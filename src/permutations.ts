export function getPermutations(array: number[] = []): number[][] {
	const result: number[][] = [];
	function p(a: number[], temp: number[]) {
		let i: number;
		let x: number;
		if (!a.length) {
			result.push(temp);
		}
		for (i = 0; i < a.length; i++) {
			x = a.splice(i, 1)[0];
			p(a, temp.concat(x));
			a.splice(i, 0, x);
		}
	}

	p(array, []);
	return result;
}
