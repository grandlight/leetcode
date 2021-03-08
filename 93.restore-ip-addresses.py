#
# @lc app=leetcode id=93 lang=python3
#
# [93] Restore IP Addresses
#

# Time:  O()
# Space: O()

from typing import List


# @lc code=start
class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        def isValid(ip: str):
            if not ip or len(ip) > 3:
                return False
            if len(ip) > 1 and ip[0] == "0":
                return False
            return 0 <= int(ip) <= 255

        def helper(cur: str, sec, idx):
            if idx > len(s):
                return
            if sec == 4:
                if idx == len(s):
                    res.append(cur)
                return
            for i in range(1, 4):
                ip = s[idx : idx + i]
                if isValid(ip):
                    if sec == 3:
                        helper(cur + ip, sec + 1, idx + i)
                    else:
                        helper(cur + ip + ".", sec + 1, idx + i)

        res = []
        helper("", 0, 0)
        return res


# @lc code=end
