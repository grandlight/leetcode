/*
 * @lc app=leetcode id=9 lang=golang
 *
 * [9] Palindrome Number
 */

package leetcode

// @lc code=start
func isPalindrome9(x int) bool {
	rev, xx := 0, x
	for xx > 0 {
		rev = rev*10 + xx%10
		xx = xx / 10
	}
	return rev == x
}

// @lc code=end
