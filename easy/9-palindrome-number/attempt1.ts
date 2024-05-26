(function() {
	const solution = {
		main: () => {
			const testCases = [[121, true], [12321, true], [1, true], [0, true], [-1, false], [10, false], [1012, false]];

			for (let x = 0; x < testCases.length; x++) {

				let isPalindromeResult = solution.isPalindrome(testCases[x][0] as number);
				if (isPalindromeResult != testCases[x][1]) {
					console.log("Test #" + (x + 1) + " Failed. Expected: " + testCases[x][1] + " Actual: " + isPalindromeResult);
				} else {
					console.log("Test #" + (x + 1) + " Succeeded.");
				}

			}
		},

		isPalindrome: (x: number) => {

			if (x < 0) return false;

			if (x < 10) return true;

			let numArr: number[] = [];

			while (x > 0) {

				let poppedNum = x % 10;
				x = Math.floor(x / 10);

				numArr.push(poppedNum);
			}

			let evenModifier = 0;

			if (numArr.length % 2 == 0) {
				evenModifier = 1;
			}

			let rightIdx = Math.floor(numArr.length / 2);
			let leftIdx = rightIdx - evenModifier;

			while (leftIdx >= 0) {

				if (numArr[leftIdx] != numArr[rightIdx]) {
					return false;
				}

				leftIdx--;
				rightIdx++;
			}

			return true;
		}
	}

	solution.main();
})();
