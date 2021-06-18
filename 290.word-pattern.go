/*
 * @lc app=leetcode id=290 lang=golang
 *
 * [290] Word Pattern
 */
package leetcode

import "strings"

// @lc code=start
func wordPattern(pattern string, s string) bool {
	words := strings.Split(s, " ")
	if len(pattern) != len(words) {
		return false
	}
	p2w, w2p := map[byte]string{}, map[string]byte{}
	for i := 0; i < len(pattern); i++ {
		if _, ok1 := p2w[pattern[i]]; !ok1 {
			if _, ok2 := w2p[words[i]]; ok2 {
				return false
			}
			p2w[pattern[i]], w2p[words[i]] = words[i], pattern[i]
		} else if p2w[pattern[i]] != words[i] {
			return false
		}
	}
	return true
}

// @lc code=end
