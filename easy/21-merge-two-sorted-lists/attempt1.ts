class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

type Input = [ListNode | null, ListNode | null];
type Output = ListNode | null;
type TestCase = [Input, Output];

(function () {
  const solution = {
    main: () => {

      const testCases: TestCase[] = [
        [
          [
            new ListNode(7, null),
            new ListNode(2, null),
          ],
          new ListNode(2, new ListNode(7, null)),
        ],
        [
          [
            new ListNode(10, null),
            new ListNode(-1, null),
          ],
          new ListNode(-1, new ListNode(10, null)),
        ],
      ];

      for (let x = 0; x < testCases.length; x++) {

        const input: Input = testCases[x][0];
        const expectedOutput: Output = testCases[x][1];

        let actualOutput = solution.run(...input);

        if (!solution.isActualOuptutEqualToExpectedOutput(expectedOutput, actualOutput)) {
          console.log("Test #" + (x + 1) + " Failed. Lists do not match!");
        } else {
          console.log("Test #" + (x + 1) + " Succeeded.");
        }

      }
    },

    isActualOuptutEqualToExpectedOutput: (expectedOutput: Output, actualOutput: Output): boolean => {

      while (expectedOutput || actualOutput) {
        if (expectedOutput?.val != actualOutput?.val) {

          console.log("Expected: " + expectedOutput?.val + " Actual: " + actualOutput?.val);
          return false;
        }

        expectedOutput = expectedOutput?.next || null;
        actualOutput = actualOutput?.next || null;
      }

      return true;
    },

    run: (list1: ListNode | null, list2: ListNode | null): ListNode | null => {

      let mergedList: Output = null;

      if (!list1 && !list2) {
        return mergedList;
      }

      while (list1 || list2) {

        if (!list1) {
          if (!mergedList) {
            mergedList = list2;
          } else {
            mergedList.next = list2;
          }

          list2 = list2?.next || null;
        } else if (!list2) {
          if (!mergedList) {
            mergedList = list1;
          } else {
            mergedList.next = list1;
          }

          list1 = list1.next;
        } else {
          if (list1.val < list1.val) {
            if (!mergedList) {
              mergedList = list1;
            } else {
              mergedList.next = list1;
            }

            list1 = list1.next;
          } else {
            if (!mergedList) {
              mergedList = list2;
            } else {
              mergedList.next = list2;
            }

            list2 = list2.next;
          }
        }
      }

      return mergedList;
    }
  }

  solution.main();
})();

