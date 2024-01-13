class Solution:
    def minOperations(self, nums):
        m = {}
        res = 0
        for i in nums:
            if i  in m:
                m[i] = m[i]+1
            else:
                m[i] = 1
        print(m) 
        for key , j in m.items():
            if j == 1:
                return -1
            res += j//3    
            if j % 3 > 0:
                res+=1
              



        

        return res
    
    
s = Solution()

s.minOperations([2,3,3,2,2,4,2,3,4])   