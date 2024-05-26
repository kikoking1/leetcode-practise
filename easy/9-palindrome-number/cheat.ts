(function() {
	const solution = {
		main: () => {
			const testCases = [[121, true], [12321, true], [1, true], [0, true], [-1, false], [10, false], [1012, false]];

			for (let x = 0; x < testCases.length; x++) {

				let isPalindromeResult = solution.isPalindrome(testCases[x][0] as number);
				if (isPalindromeResult != testCases[x][1]) {
					console.log("Test #" + (x + 1) + " Failed. Input: " + testCases[x][0] + " Expected: " + testCases[x][1] + " Actual: " + isPalindromeResult);
				} else {
					console.log("Test #" + (x + 1) + " Succeeded. Input: " + testCases[x][0]);
				}

			}
		},

		isPalindrome: (x: number) => {

			if (x == 0) return true;

			if (x < 0 || x % 10 == 0) return false;

			let reversed_int = 0;
			while (x > reversed_int) {

				let poppedNum = x % 10;
				x = Math.floor(x / 10);

				reversed_int = (reversed_int * 10) + poppedNum;
			}

			if (x == reversed_int || x == Math.floor(reversed_int / 10)) {
				return true;
			} else {
				return false;
			}

		}
	}

	solution.main();
})();
