
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

			// 1. check if first 2 characters are an exception, and if so, return out exception value
			// 2. if not exception, count how many of type of letter, return out letter value * count of letter
			// 3. build results into string, from left to right, parse into int to get the asnwer.

			const romanNumeralSymbolValueMap = {
				'I': 1,
				'V': 5,
				'X': 10,
				'L': 50,
				'C': 100,
				'D': 500,
				'M': 1000,
			}

			const romanNumeralDualSymbolValueMap = {
				'IV': 4,
				'IX': 9,
				'XL': 40,
				'XC': 90,
				'CD': 400,
				'CM': 900,
			}

			let totalIntValue = 0;
			let x = 0;
			while (x < s.length) {

				let symbolGroupValue = 0;
				if (x < s.length - 1) {

					let symbol = s[x] + s[x + 1];
					if (symbol in romanNumeralDualSymbolValueMap) {
						symbolGroupValue = romanNumeralDualSymbolValueMap[symbol];

						totalIntValue += symbolGroupValue;
						x += 2;
						continue;
					}
				}

				let symbolMultiplier = 1;

				if (symbolGroupValue == 0) {

					let symbol = s[x];

					if (symbol == s[x + 1]) {
						symbolMultiplier += 1;
					}

					if (symbol == s[x + 1] && symbol == s[x + 2]) {
						symbolMultiplier += 1;
					}

					symbolGroupValue = romanNumeralSymbolValueMap[symbol];
					symbolGroupValue *= symbolMultiplier;
				}

				totalIntValue += symbolGroupValue;
				x += (symbolMultiplier);
			}

			return totalIntValue;
		}
	}

	solution.main();
})();
