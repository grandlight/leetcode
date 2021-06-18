/*
 * @lc app=leetcode id=205 lang=golang
 *
 * [205] Isomorphic Strings
 */
package leetcode

// @lc code=start
func isIsomorphic(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	s2t, t2s := map[byte]byte{}, map[byte]byte{}
	for i := 0; i < len(s); i++ {
		if _, ok1 := s2t[s[i]]; !ok1 {
			if _, ok2 := t2s[t[i]]; ok2 {
				return false
			}
			s2t[s[i]], t2s[t[i]] = t[i], s[i]
		} else if s2t[s[i]] != t[i] {
			return false
		}
	}
	return true
}

// @lc code=end
