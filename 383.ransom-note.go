/*
 * @lc app=leetcode id=383 lang=golang
 *
 * [383] Ransom Note
 */

package leetcode

// @lc code=start
func canConstruct(ransomNote string, magazine string) bool {
	lookup := map[byte]int{}
	for i := 0; i < len(magazine); i++ {
		lookup[magazine[i]]++
	}
	for i := 0; i < len(ransomNote); i++ {
		if lookup[ransomNote[i]] == 0 {
			return false
		}
		lookup[ransomNote[i]]--
	}
	return true
}

// @lc code=end
