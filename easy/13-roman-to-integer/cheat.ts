
(function() {
	const solution = {
		main: () => {
			const testCases: [string, number][] = [
				['I', 1],
				['II', 2],
				['III', 3],
				['IV', 4],
				['V', 5],
				['VI', 6],
				['IX', 9],
				['X', 10],
				['XL', 40],
				['L', 50],
				['XC', 90],
				['C', 100],
				['CD', 400],
				['D', 500],
				['CM', 900],
				['M', 1000],
				['MM', 2000],
				['MMM', 3000],
				['MCMXCIV', 1994],
				['MMMCMXCIX', 3999],
			];

			for (let x = 0; x < testCases.length; x++) {

				let input = testCases[x][0];
				let expectedOutput = testCases[x][1];
				let actualOutput = solution.romanToInt(input);

				if (actualOutput != expectedOutput) {
					console.log("Test #" + (x + 1) + " Failed. Input: " + input + " Expected: " + expectedOutput + " Actual: " + actualOutput);
				} else {
					console.log("Test #" + (x + 1) + " Succeeded. Input: " + input);
				}

			}
		},

		romanToInt: (s: string): number => {

			const romanNumeralSymbolValueMap = {
				'I': 1,
				'V': 5,
				'X': 10,
				'L': 50,
				'C': 100,
				'D': 500,
				'M': 1000,
			}

			let sum = 0;
			let cur = romanNumeralSymbolValueMap[s[0]];

			for (let x = 1; x < s.length; x++) {
				let next = romanNumeralSymbolValueMap[s[x]];

				if (cur < next) {
					sum -= cur;
				} else {
					sum += cur;
				}

				cur = next;
			}

			sum += cur;

			return sum;
		}
	}

	solution.main();
})();
