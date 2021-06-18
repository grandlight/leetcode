/*
 * @lc app=leetcode id=345 lang=golang
 *
 * [345] Reverse Vowels of a String
 */

package leetcode

// @lc code=start
func reverseVowels(s string) string {
	b := []byte(s)
	for i, j := 0, len(s)-1; i < j; {
		if !helper345(b[i]) {
			i++
		} else if !helper345(b[j]) {
			j--
		} else {
			b[i], b[j] = b[j], b[i]
			i, j = i+1, j-1
		}
	}
	return string(b)
}

func helper345(c byte) bool {
	if c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' {
		return true
	}
	if c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' {
		return true
	}
	return false
}

// @lc code=end
