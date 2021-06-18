/*
 * @lc app=leetcode id=168 lang=golang
 *
 * [168] Excel Sheet Column Title
 */

package leetcode

// @lc code=start
func convertToTitle(columnNumber int) string {
	res := []byte{}
	for columnNumber > 0 {
		res = append(res, 'A'+byte((columnNumber-1)%26))
		columnNumber = (columnNumber - 1) / 26
	}
	for i := 0; i < len(res)/2; i++ {
		res[i], res[len(res)-1-i] = res[len(res)-1-i], res[i]
	}
	return string(res)
}

// @lc code=end
