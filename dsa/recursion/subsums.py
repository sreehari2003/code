class Solution:
    def combinationSum(self, candidates, target):
        result = []

        def backtrack(start, stack, total):
            if total == target:
                result.append(stack.copy())
                return

            for i in range(start, len(candidates)):
                if total + candidates[i] <= target:
                    stack.append(candidates[i])
                    total += candidates[i]
                    print(i,stack,total)
                    backtrack(i, stack, total)
                    stack.pop()
                    total -= candidates[i]

        backtrack(0, [], 0)
        return result

# Example usage:
candidates = [2, 3, 6, 7]
target = 7
t = Solution()
result = t.combinationSum(candidates, target)




# combination_sum([2,3,6,7], 7)
#   backtrack(0, 7, [])
#     backtrack(0, 5, [2])
#       backtrack(0, 3, [2, 2])
#         backtrack(0, 1, [2, 2, 2])
#           backtrack(0, -1, [2, 2, 2])  # Target is reached, backtrack
#         backtrack(1, 1, [2, 2, 3])
#           backtrack(1, -2, [2, 2, 3])  # Target is reached, backtrack
#         backtrack(2, 1, [2, 2, 6])
#           backtrack(2, -5, [2, 2, 6])  # Target is reached, backtrack
#         backtrack(3, 1, [2, 2, 7])
#           backtrack(3, -6, [2, 2, 7])  # Target is reached, backtrack
#       backtrack(1, 3, [2, 3])
#         backtrack(1, 0, [2, 3, 2])
#           backtrack(0, 0, [2, 3, 2])  # Target is reached, backtrack
#         backtrack(1, -1, [2, 3, 3])  # Target is reached, backtrack
#         backtrack(2, 0, [2, 3, 6])
#           backtrack(2, -3, [2, 3, 6])  # Target is reached, backtrack
#         backtrack(3, 0, [2, 3, 7])
#           backtrack(3, -4, [2, 3, 7])  # Target is reached, backtrack
#       backtrack(2, 1, [2, 6])
#         backtrack(2, -2, [2, 6])  # Target is reached, backtrack
#       backtrack(3, 1, [2, 7])
#         backtrack(3, -3, [2, 7])  # Target is reached, backtrack
#     backtrack(1, 4, [3])
#       backtrack(1, 1, [3, 2])
#         backtrack(0, 1, [3, 2])  # Target is reached, backtrack
#       backtrack(2, 1, [3, 6])
#         backtrack(2, -2, [3, 6])  # Target is reached, backtrack
#       backtrack(3, 1, [3, 7])
#         backtrack(3, -3, [3, 7])  # Target is reached, backtrack
#     backtrack(2, 1, [6])
#       backtrack(2, -1, [6])  # Target is reached, backtrack
#     backtrack(3, 1, [7])
#       backtrack(3, -2, [7])  # Target is reached, backtrack
