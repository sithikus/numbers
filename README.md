# @sithikus/numbers

Number utilities used within @sithikus packages.

[![NPM Version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/@sithikus/numbers.svg
[npm-url]: https://npmjs.org/package/@sithikus/numbers

## Install

```bash
npm i @sithikus/numbers
```

## Usage

### getUniqueCombinations
Returns all combinations of length, summing to sum.

```javascript
import '@sithikus/numbers';

var uniqueCombinations = [1, 2, 3, 4, 5].getUniqueCombinations(5, 2); 
//uniqueCombinations == [[2,3], [1,4]]
```

### getPermutations
Returns all permutations of the array's contents.

```javascript
import '@sithikus/numbers';

var permutations = [1, 2].getPermutations(); 
//permutations == [[1,2], [2,1]]
```

## License

This project is licensed under the terms of the [MIT](https://choosealicense.com/licenses/mit/) license.