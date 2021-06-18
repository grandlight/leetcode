/*
 * @lc app=leetcode id=20 lang=golang
 *
 * [20] Valid Parentheses
 */

package leetcode

// @lc code=start
func isValid(s string) bool {
	lookup := map[rune]rune{'(': ')', '[': ']', '{': '}'}
	stack := make([]rune, 0, len(s))
	for _, p := range s {
		if _, ok := lookup[p]; ok {
			stack = append(stack, p)
		} else if len(stack) == 0 {
			return false
		} else {
			if lookup[stack[len(stack)-1]] != p {
				return false
			}
			stack = stack[:len(stack)-1]
		}
	}
	return len(stack) == 0
}

// @lc code=end
