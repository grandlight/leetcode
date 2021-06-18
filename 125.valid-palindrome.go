/*
 * @lc app=leetcode id=125 lang=golang
 *
 * [125] Valid Palindrome
 */

package leetcode

import "strings"

// @lc code=start
func isPalindrome125(s string) bool {
	s = strings.ToLower(s)
	i, j := 0, len(s)-1
	for i < j {
		for i < j && !isChar125(s[i]) {
			i++
		}
		for i < j && !isChar125(s[j]) {
			j--
		}
		if s[i] != s[j] {
			return false
		}
		i, j = i+1, j-1
	}
	return true
}

func isChar125(c byte) bool {
	if 'a' <= c && c <= 'z' || '0' <= c && c <= '9' {
		return true
	}
	return false
}

// @lc code=end
