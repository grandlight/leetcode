/*
 * @lc app=leetcode id=387 lang=golang
 *
 * [387] First Unique Character in a String
 */

package leetcode

// @lc code=start
func firstUniqChar(s string) int {
	lookup := map[byte]int{}
	for i := 0; i < len(s); i++ {
		lookup[s[i]]++
	}
	for i := 0; i < len(s); i++ {
		if lookup[s[i]] == 1 {
			return i
		}
	}
	return -1
}

// @lc code=end
