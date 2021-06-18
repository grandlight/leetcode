/*
 * @lc app=leetcode id=13 lang=golang
 *
 * [13] Roman to Integer
 */

package leetcode

// @lc code=start
func romanToInt(s string) int {
	rtoi := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}
	res := rtoi[s[0]]
	for i := 1; i < len(s); i++ {
		res += rtoi[s[i]]
		if rtoi[s[i]] > rtoi[s[i-1]] {
			res -= rtoi[s[i-1]] * 2
		}
	}
	return res
}

// @lc code=end
