/*
 * @lc app=leetcode id=242 lang=golang
 *
 * [242] Valid Anagram
 */

package leetcode

// @lc code=start
func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	lookup := map[byte]int{}
	for i := 0; i < len(s); i++ {
		lookup[s[i]]++
	}
	for i := 0; i < len(t); i++ {
		if _, ok := lookup[t[i]]; !ok || lookup[t[i]] == 0 {
			return false
		}
		lookup[t[i]]--
	}
	return true
}

// @lc code=end
